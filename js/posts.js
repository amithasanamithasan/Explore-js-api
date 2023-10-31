function postsdata(){
    // console.log('amit hasan');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data =>  loadDatas(data))
}

function loadDatas(data){
 for(const post of data){

     console.log(post);
const div1=document.getElementById('div-center');
//  console.log(div);
const postdiv= document.createElement('div');
// console.log(div);
// css class .post use javascript
postdiv.classList.add('post');


postdiv.innerHTML = 
`<h3>Post:ID${post.id}</h3>
<h4>user ${post.userId}</h4>
<h5>post:titel${post. title}</h5>
<p>Post:body${post.body}</p>

`;
div1.appendChild(postdiv);
 
 }

}

postsdata();