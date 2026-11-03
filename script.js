const postsContainer = document.querySelector('.posts-container');
 const updateData = {
    title: "I am improving my JavaScript skills"
};
const updatePosts = {
    title: "Learning JavaScript APIs",
    body: "I am now practising PUT requests.",
    userId: 1
};
async function updatePost(){
  const answer = await  fetch("https://dummyjson.com/posts/1", {
    method: "PUT",
    headers:{
        "content-Type": "application/json"
    },
    body:JSON.stringify(updatePost)

  }) 
  if(!answer.ok){
    throw new Error ("something went wrong")
  }
    const finalAnswer = await answer.json();
    console.log(finalAnswer)

    
}
updatePost()
async function updatesData(){
  const respond = await  fetch("https://dummyjson.com/posts/1", {
        method: "PATCH",
  
  headers:{
     "content-Type": "application/json",
 },
 
     body: JSON.stringify(updateData)
  }
)
 if (!respond.ok) {
    throw new Error("Something went wrong");
}
  const result = await respond.json();
  console.log(result)
 
}
updatesData()

const  postData = {
    title: "Learning JavaScript APIs",
    body: "I am practising my first POST request.",
    userId: 1
};
 

 async function sendPost(){
    try{  
  const response = await fetch("https://dummyjson.com/posts/add" 
     , {
    method: "POST",
    headers: {
     "Content-Type": "application/json"   
    },
    body:JSON.stringify(postData)
 })
 if (!response.ok) {
    throw new Error("Something went wrong");
}
 const data = await response.json();
 console.log(data);
 return data;

 } catch (error) {
        console.log(error.message);
    }
} 

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts" )
  const data = await response.json();
  console.log(data)
  return data.posts;
  

}


async function loadData( ){
  const newPost = await sendPost();
  const existingPosts = await getPosts();
  const allPosts = [...existingPosts, newPost];
    console.log(allPosts);
    const postsHtml = allPosts.map(item => {
    return `
        <article>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
        </article>
    `;
});

postsContainer.innerHTML = postsHtml.join("");

}
loadData();


async function deletePost(){
    const response = await fetch("https://dummyjson.com/posts/1", {
        method: "DELETE",
        
    })
    if(!response.ok){
        throw new Error ("somethin isnt delete")
    }
    const finalResponse = await response.json();
    console.log(finalResponse)
}
deletePost()

 /* const postsContainer = document.querySelector('.posts-container');

  fetch("https://dummyjson.com/postss")
    .then( response => {
        if (!response.ok) {
    throw new Error("Something went wrong");
}
        return response.json();
}) .then(data => {
    console.log(data)
   const result =  data.posts.forEach(item => {
         
    })
    const postsHtml = data.posts.map(item => {
     return `
        <article>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
        </article>
    `;

});

const allPosts = postsHtml.join("");
postsContainer.innerHTML = allPosts;
console.log(postsHtml)
}) .catch(error => {
    console.log(error)
});
*/