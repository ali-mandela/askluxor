const mongoose =  require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    Phone: {
        type: String,
        required: true,
        unique:true,
      },
    password: {
      type: String,
      required: true,
    },
    image:{
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    role: {
        type: String, 
        enum: [
            'USER', 'ADMIN' ],
        default: 'USER'
    },
    isVerified:{ 
      default:false,
      type:Boolean
    },
    bio:{
      type:String,
    },
    Property:{
      default:0,
      type:Number,
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;