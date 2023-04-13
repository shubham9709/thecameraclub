// import mongoose from "mongoose";

// const imageSchema = new mongoose.Schema({
//   id:Number,
//   url: String,
//   title: String,
//   description: String
// });

// const Image = mongoose.model('image', imageSchema);

// export default Image;


import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  photo:{
    data: Buffer,
    contentType: String,
  }
},
{
  timestamps:true
});

const Image = mongoose.model('image', imageSchema);

export default Image;

