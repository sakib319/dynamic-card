//Dummy data

/*
const posts=[
  {
  title:"This is Title 1",
  body:"This is Body1 "
  
},
{
  title:"This is Title 2",
  body:"This is Body 2"
  
},{
  title:"This is Title 3",
  body:"This is Body 3"
  
},{
  title:"This is Title 4",
  body:"This is Body 4"
  
},{
  title:"This is Title 5",
  body:"This is Body 5"
  
},{
  title:"This is Title 6",
  body:"This is Body1 6"
  
},
{
  title:"This is Title 7",
  body:"This is Body 7"
  
},
{
  title:"This is Title 8",
  body:"This is Body 8"
  
},
  
  
  ]
*/





const postElements=document.querySelector(".posts")

async function loadAllData( ){
  
  try{
  
  const res=await axios('https://jsonplaceholder.typicode.com/posts');
  
  const posts=res.data;
  
  
  posts.map(post=>{
    const postElement=document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML=`
<h2 class="post-title">${post.title}</h2>
   <p class="post-desc">${post.body}</p>
    
    `
    
    postElements.appendChild(postElement)

  })
  
  }catch(err){
    console.log(err.message)
  }
  }


loadAllData()