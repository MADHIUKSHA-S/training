async function likeCode() {
    return new Promise((likePosted) => {
        likePosted("Liked the post successfully");
    });
}

async function unlikeCode() {
    return new Promise((unlikePosted) => {
        unlikePosted("Unliked the post successfully");
    });
}

async function commentCode() {
    return new Promise((commentPosted) => {
        commentPosted("Comment posted successfully on the post created");
    });
}

async function uncommentCode() {
    return new Promise((uncommentPosted) => {
        uncommentPosted("Comment removed successfully from the post");
    });
}

async function shareCode() {
    return new Promise((sharePosted) => {
        sharePosted("Post shared successfully");
    });
}

async function unshareCode() {
    return new Promise((unsharePosted) => {
        unsharePosted("Post unshared successfully");
    });
}

async function createPost() {
    var post = new Promise((cpost) => {
        cpost("Post created successfully");
    });

    var [posts, comment, like, share] = await Promise.all([
        post,
        commentCode(),
        likeCode(),
        shareCode(),
    ]);
    
    console.log(posts);
    console.log(comment);
    console.log(like);
    console.log(share);
}

async function undoActions() {
    var [uncomment, unlike, unshare] = await Promise.all([
        uncommentCode(),
        unlikeCode(),
        unshareCode(),
    ]);

    console.log(uncomment);
    console.log(unlike);
    console.log(unshare);
}

createPost().then(() => {
    undoActions();
});
