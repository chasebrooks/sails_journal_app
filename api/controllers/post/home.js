module.exports = async function(req, res){
    console.log("this route shows homepage of posts.")

    const allPosts = await Post.find()

    res.view("pages/home", {allPosts})

}