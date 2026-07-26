import User from "../Models/AuthModel.js";

export const findUserByEmail= async(email)=>{
    return await User.findOne({email})
}

export const findUserById= async(id)=>{
    return await User.findById(id).select(-'password')
}

export const createUser= async(userData)=>{
    return await User.create(userData)
}