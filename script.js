 //Coding Steps:
 //Create a CRD application (CRUD without update) using json-server or another API
 //Use fetch and async/await to interact with the API
 //Use a form to create/post new entities
 //Build a way for users to delete entities
 //Include a way to get entities from the API and display them
 //You do NOT need update, but you can add it if you'd like
 //Use Bootstrap and/or CSS to style your project
 
 async function fetchData() {

    const response = await fetch('http://localhost:3000/items');
  
    const data = await response.json();
  
    // Display data in the list
  
  }
  
  
  
  async function createItem(data) {
  
    await fetch('http://localhost:3000/items', {
  
      method: 'POST',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      body: JSON.stringify(data)
  
    });
  
  }
  
  
  
  async function deleteItem(id) {
  
    await fetch(`http://localhost:3000/items/${id}`, {
  
      method: 'DELETE'
  
    });
  
  }
  
  
  
  // Event listeners for form submission and delete buttons
  
  // ... 
  