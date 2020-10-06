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

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error!!!')
            }
        }, 2000);
    });
};
createPost({ title: "post three", body: "This is post three" })
    .then(getPost)
    .catch(err =>
        console.log(err)
    );

/* Asynch, Await */
async function init(){
    await createPost({title:'Post Three',body:'this is post three'});
    getPosts();
}

/* Asynch, Await  Fetch */

async function fetchVal(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
}
fetchVal();




/* Promise Usage */

/* Promise all command */
const promise1 = Promise.resolve('hello baby')
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>setTimeout(resolve,2000,'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));



//Async way to write the above function
async function prom(){
    let resp = await Promise.all([promise1,promise2,promise3,promise4])
    console.log(resp);
 }

 prom();