/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) 

  */


// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData() 
{

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
   .then(response => response.json())
    .then(json => console.log(json))
    
}

// jasonplaceholder  browser e likhe tar moddho  thake nia asci 
// aita javascript er moddhe cholbe na 
// html er browser er moddhe dila chalano lagbe

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))