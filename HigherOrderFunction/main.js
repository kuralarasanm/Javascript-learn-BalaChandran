// higher order functions

import { posts } from "./sub.js";

posts.forEach((post)=>{
    console.log(post);
})

console.clear()

const filteredposts=posts.filter((post)=>{
    return post.userId ===5
})
console.log(filteredposts);

const mappedPosts=filteredposts.map((post)=>{
    return post.id
})
console.log(mappedPosts);