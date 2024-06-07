const {errorHandler} = require('./error');
const jwt = require('jsonwebtoken');


module.exports.generateToken = (id) => {

    const token = jwt.sign({
        id: id
    }, process.env.JWT_SECRET);

    return token;

}

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization; 

    if (!token) 
        return next(errorHandler(401, 'Unauthorized'));
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) 
            return next(errorHandler(403, 'Forbidden'));
        
        req.user = user; 
        next();
    });
};
// valid_id