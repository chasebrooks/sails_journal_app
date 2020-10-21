module.exports = {
    posts: async function(req, res){
        //return all posts in DB
        try{
            const posts = await Post.find()
            res.send(posts)
        } catch (err){
            res.serverError(err.toString())
        }
            
    },
    create: async function(req, res){
        const title = req.body.title
        const postBody = req.body.postBody
        
        sails.log.warn(title + " " + postBody)
        //create post
        try{
            const newPost = await Post.create({title:title, body:postBody})
            res.redirect('/home')
        } catch(err){
            res.serverError(err.toString())
        }
    },

    findById: function(req, res){
        const postId = req.param('postId');

        const filteredPosts = allPosts.filter(p => {return p.id == postId});
        
        if (filteredPosts.length > 0) {
            res.send(filteredPosts[0])
        } else {
            res.send("couldn't find post by ID: " + postId)
        }
    },

    delete: async function(req, res){
        const postId = req.param('postId')
        
        await Post.destroy({id: postId})
        
        res.send("Deleted Post: " + postId)
    }
}