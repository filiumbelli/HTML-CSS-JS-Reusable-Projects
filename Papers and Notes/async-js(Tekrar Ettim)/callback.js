const posts = [
    { title: 'post one', body: 'The post one' },
    { title: 'post two', body: 'The post two' }
];


/* Delays the innerHTML command for 1 second */

const getPost = () => {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
};


/* Push event finishes after 2 seconds, thus we are not be able to see the pushed item if we
dont use a callback method which waits for element to be pushed to the main posts */

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
};



createPost({ title: "post three", body: "This is post three" }, getPost);