async function likeCode(){
    return new Promise((likePosted)=>{
        likePosted("liked the post successfully")
    })
}async function commentCode(){
    return new Promise((commentPosted)=>{
        commentPosted("Comment posted successfully in the post created")
    })
}
async function createPost(){
    var post=new Promise((cpost)=>{
        cpost("Post created Successfully")
    })
    var [posts,comment,like]=await Promise.all([post,commentCode(),likeCode()])
    console.log(posts);
    console.log(comment);
    console.log(like);
}
createPost()