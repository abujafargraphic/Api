  
  const postsContainer = document.querySelector('.posts-container');

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


