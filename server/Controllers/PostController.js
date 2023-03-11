import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

//Create new post
export const createPost = async(req,res)=>{
    const newPost = new PostModel(req.body);
    
    
    try {
        await newPost.save()
        res.status(200).json("post created")
    } catch (error) {
        res.status(500).json("error")
    }

};

//Get a post
export const getPost = async(req,res)=>{
    const id = req.params.id

    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json("error")
    }

}

// Update a Post

export const updatePost = async(req,res)=>{
    const postId = req.params.id;

    const { userId }=req.body;
    try {
        const post = await PostModel.findById(postId)

        if (post.userId===userId) {
            await post.updateOne({$set : req.body})
            res.status(200).json("post updated")
        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json("error")
    }    
}

// Delete A post
 
export const deletePost = async (req , res)=>{
    const id = req.params.id;
    const {userId}=req.body;

    try {
        const post = await PostModel.findById(id)
        if (post.userId === userId) 
        {
            await post.deleteOne();
            res.status(200).json("post deleted successfully")            
        }
        else
        {
            res.status(403).json("Action forbidden")
        }
    } catch (error) 
    {
        res.status(500).json("error")
    }    

}

// like & dislike of post

export const likePost = async(req,res)=>{
    const id=req.params.id
    const {userId}=req.body
    
    try {
        const post = await PostModel.findById(id)
        if (!post.Likes.includes(userId)) {
            await post.updateOne({$push :{Likes : userId}})
            res.status(200).json("post Liked")      
        }else{
            await post.updateOne({$pull :{Likes : userId}})
            res.status(200).json("post disLiked")
        }

    } catch (error) {
        res.status(500).json("error")
    }
}

// get timeline posts
export const getTimelinePosts=async(req,res)=>{
    const userId = req.params.id

    try {
        const currentUserPosts= await PostModel.find({userId:userId});
        const followingPosts= await UserModel.aggregate([
            {
                $match:{
                    _id:new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup:{
                    from : "posts",
                    localField : "followings",
                    foreignField : "userId",
                    as : "followingPosts"
                }
            },
            {
                $project:{
                    followingPosts : 1,
                    _id: 0
                }
            }
        ])

        res
        .status(200)
        .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
        .sort((a,b)=>{
            return b.createdAt-a.createdAt;  
        }))
        ;
        
    } catch (error) {
        res.status(500).json("error")
    }
}