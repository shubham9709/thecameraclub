import User from "../models/user-schema.js"
export const userSignup = async (request,response) => {
  try{
    const exist = await User.findOne({username: request.body.username});
    console.log(request.body);
    if(exist)
    {
      response.status(401).json({message: "User already exists"});
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({message: user});
  }
  catch(error)
  {
    response.status(500).json({message: error.message});
  }
}

export const userLogin = async (request,response) => {
  const username = request.body.username;
  const password = request.body.password;
  try{
    const user = await User.findOne({username:username, password:password})
    if(user)
    {
      response.status(200).json({data: user});
    }
    else{
      response.status(401),json({message: "Invalid username or password"});
    }
  }
  catch(error)
  {
    response.status(500).json({message: error.message});
  }
}