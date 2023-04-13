import Image from "../models/image-schema.js";
import formidable from "formidable";
// import { json } from "body-parser";
import fs from "fs";
import pkg from "body-parser"
const {json} = pkg;
const addImage = (req,res) => {
  const form = formidable();
  console.log(form);
  // form.parse(req,(err,files,fields) => {
    
  //   if(files?.image)
  //   {
  //     console.log(files);
  //     const newimage = new Image();
  //     // newimage.photo.data = fs.readFileSync(files?.image.path);
  //   }
  // });

}

export default addImage;