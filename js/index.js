function loadUsers2()
{
    // console.log('amit hasan');\

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> displayUsers2(data))
}
  
// parameter any name you can read it 'amit'/'data'
function displayUsers2(amit){

 const ul= document.getElementById('Users-data');
//  console.log(ul);
for(const user of amit){
   
    // console.log(data);
    console.log(user.name);
      // Create a new <li> element and set its text content to the user's name.
    const li = document.createElement('li');
     // Append the <li> element to the <ul> element to display it on the webpage.
    li.innerText = user.name;
    ul.appendChild(li);
}
}
