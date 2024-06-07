const bcryptjs = require('bcryptjs')
const {generateToken} = require('../config/utils');
const userModel = require('../models/userModel');
const {errorHandler} = require('../config/error');

module.exports.registerController = async(req, res) => {

    const {
        name,
        email,
        Phone,
        password,
        Image,
        bio
    } = req.body;

    try {
        const isUser = await userModel.findOne({email});

        if (isUser) {
            return res
                .status(400)
                .json({success: false, message: 'User already exists'});
        }
        const hashedPassword = bcryptjs.hashSync(password, 10)
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            Phone,
            bio,
            image: Image
        });
        await newUser.save();

        const token = generateToken(newUser._id);

        return res
            .status(201)
            .json({success: true, token: token, message: 'User registered successfully'});

    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({success: false, message: error.message});
    }
};

module.exports.loginController = async(req, res) => {
    const {email, password} = req.body;

    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res
                .status(400)
                .json({success: false, message: 'Invalid email or password'});
        }

        const validPassword = bcryptjs.compareSync(password, user.password);

        if (!validPassword) 
            return next(errorHandler(401, 'Wrong credentials!'));
        
        const token = generateToken(user._id);

        if(user.isVerified){
            return res
            .status(200)
            .json({success: true, token: token,role : user.role, message: 'Login successful'});
        }
        return res
            .status(201)
            .json({success: true,  message: 'You can login once the admn approves your profile successful'});

    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({success: false, message: error.message});
    }
};

module.exports.getUserController = async(req, res) => {

    const {id} = req.user;
    try {
        const user = await userModel.findById(id);
        if (!user) {
            return next(errorHandler(403, "Error in token || user doesnot exist. "));
        }
        const {
            password,
            ...rest
        } = user._doc;
        return res
            .status(200)
            .json({success: true, message: 'user data retieved successful', user: rest});

    } catch (error) {
        return next(errorHandler(403, error.message));

    }

}

module.exports.getAllAgents = async(req, res, next) => {
    try {
        const users = await userModel.find({role: 'USER', isVerified: true});

        if (!users || users.length === 0) {
            return res
                .status(404)
                .json({success: false, message: 'No agents found.'});
        }

        // Remove sensitive fields like password
        const sanitizedUsers = users.map(user => {
            const {
                password,
                ...rest
            } = user._doc;
            return rest;
        });

        return res
            .status(200)
            .json({success: true, message: 'User data retrieved successfully', users: sanitizedUsers});
    } catch (error) {
        return next(errorHandler(403, error.message));
    }
}
module.exports.getTopAgents = async(req, res, next) => {
    try {
        const users = await userModel
            .find({role: 'USER', isVerified: true})
            .sort({Property: -1})
            .limit(6);

        if (!users || users.length === 0) {
            return res
                .status(404)
                .json({success: false, message: 'No agents found.'});
        }

        // Remove sensitive fields like password
        const sanitizedUsers = users.map(user => {
            const {
                password,
                ...rest
            } = user._doc;
            return rest;
        });

        return res
            .status(200)
            .json({success: true, message: 'User data retrieved successfully', users: sanitizedUsers});
    } catch (error) {
        return next(errorHandler(403, error.message));
    }
};

// getAllAgentsToverfiy

module.exports.getAllAgentsToverfiy = async(req, res, next) => {
    try {
        const users = await userModel.find({role: 'USER', isVerified: false});

        if (!users || users.length === 0) {
            return res
                .status(404)
                .json({success: false, message: 'No agents found.'});
        }

        // Remove sensitive fields like password
        const sanitizedUsers = users.map(user => {
            const {
                password,
                ...rest
            } = user._doc;
            return rest;
        });

        return res
            .status(200)
            .json({success: true, message: 'User data retrieved successfully', users: sanitizedUsers});
    } catch (error) {
        return next(errorHandler(403, error.message));
    }
}

module.exports.verifyAgentController = async(req, res, next) => {
    
    const {id} = req.params;
    console.log(id);
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, {
            isVerified: true
        }, {new: true});

        if (!updatedUser) {
            return res
                .status(404)
                .json({success: false, message: 'User not found'});
        }

        return res
            .status(200)
            .json({success: true, message: 'User verified successfully'});
    } catch (error) {
        return next(errorHandler(403, error.message));
    }
};

module.exports.updateProfiletController = async (req, res) => {
    const { name, Phone, bio,image } = req.body;
     

    try {
        // Assuming req.user is set by the protect middleware to the authenticated user
        const userId = req.user.id;
        const user = await userModel.findById(userId);

        if (user) {
            user.name = name || user.name;
            user.Phone = Phone || user.Phone;
            user.bio = bio || user.bio;
            user.image = image || user.image;

            const updatedUser = await user.save();
            res.json({
                success: true,
                message: 'Profile updated successfully'
            });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// GET AGENT DATA
module.exports.getAgentDataController = async (req, res, next) => {
    const { id } = req.params;
    
    try {
      const agent = await userModel.findById(id);
      
      if (agent) {
        res.status(200).json({ success : true, agent});
      } else {
        res.status(404).json({ success: false, message: 'Agent not found' });
      }
    } catch (error) {
        return next(errorHandler(500, error.message));
    }
  };