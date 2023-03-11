import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    userId:{ type:String,required:true},
    desc : String,
    Likes : [],
    image : String,
},
{timestamps: true});

var PostModel=mongoose.model("Posts",postSchema)
export default PostModel