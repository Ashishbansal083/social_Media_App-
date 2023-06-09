import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

//get a user

export const getuser=async(req,res)=>{
    const id=req.params.id;

    try{
        const user=await UserModel.findById(id);

        if(user){
            const {password,...otherDetails}=user._doc

            res.status(200).json(otherDetails)

        }else{
            res.status(400).json("no such user exist")
        }
    }catch(error){
        res.status(500).json("error")
    }
};

//update a user

export const updateUser=async(req,res)=>{
    const id=req.params.id
    const {currentUserId,currentUserAdminStatus,password}=req.body

    if(id===currentUserId || currentUserAdminStatus)
    {
        try {
            if(password){
                const salt= await bcrypt.genSalt(10)
                req.body.password=await bcrypt.hash(password,salt)
            }


            const user= await UserModel.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json(user)

        } catch (error) {
            res.status(500).json("error")
        }
    }
    else{
        res.status(400).json("access denied!")
    }
}

// Delete User
export const deleteUser= async(req,res)=>{
    const id = req.params.id
    const {currentUserId,currentUserAdminStatus}=req.body

    if(id===currentUserId || currentUserAdminStatus)
    {
        try {
            const user= await UserModel.findByIdAndDelete(id)
            res.status(200).json("user deleted successfully")
        } catch (error) {
            res.status(500).json("error")
        }
    }
    else{
        res.status(400).json("access denied!you can only dele")
    }


};

// Follow the user

export const followUser= async (req,res) => {
    const id=req.params.id;
    const {currentUserId}=req.body;

    if(currentUserId === id){
         res.status(403).json('action forbidden') ;       
    } else{
        try {
            const followUser= await UserModel.findById(id);
            const followingUser= await UserModel.findById(currentUserId);

            if( ! followUser.followers.includes(currentUserId)){ 
                await followUser.updateOne({$push : {followers:currentUserId}});
                await followingUser.updateOne({$push : {followings:id}});
                res.status(200).json("User followed");
            } else{
                res.status(403).json("User is already followed by you");
            }
            
        }catch (error) {
            res.status(500).json("err");
        }
    }
};

// UnFollow the user

export const UnFollowUser= async (req,res) => {
    const id=req.params.id;
    const {currentUserId}=req.body;

    if(currentUserId === id){
         res.status(403).json('action forbidden') ;       
    } else{
        try {
            const followUser= await UserModel.findById(id);
            const followingUser= await UserModel.findById(currentUserId);

            if(followUser.followers.includes(currentUserId)){ 
                await followUser.updateOne({$pull : {followers:currentUserId}});
                await followingUser.updateOne({$pull : {followings:id}});
                res.status(200).json("User Unfollowed");
            } else{
                res.status(403).json("User is not by you");
            }
            
        }catch (error) {
            res.status(500).json("err");
        }
    }
};