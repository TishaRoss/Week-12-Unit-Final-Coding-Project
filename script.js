 //Coding Steps:
 //Create a CRD application (CRUD without update) using json-server or another API
 //Use fetch and async/await to interact with the API
 //Use a form to create/post new entities
 //Build a way for users to delete entities
 //Include a way to get entities from the API and display them
 //You do NOT need update, but you can add it if you'd like
 //Use Bootstrap and/or CSS to style your project
 
$(document).ready(() => {
    let menuList;

    const menuInfoList = () => {
      $("#content").empty()
      menuList.forEach(name => {
       $("#content").append(`
          <div id="menu${menu.id}" class="info-box">
            ID: ${menu.id} ${menu.name}, ${menu.selection}
          </div>
          `)

      })
      
    }

    $.get('http://localhost:3000/menu', (data) => {
        menuList = data
    }).done(() => menuInfoList())

    $('#myForm').submit(event => {
      event.preventDefault()
      const formData = {
        name: $('#name').val(),
        selection: $('#selection').val(),
      }

      $.post('http://localhost:3000/menu', formData, (data) => {
        alert(`data added: Name: ${data.name}, Selection: ${data.selection}`)
      })

      $('myForm').trigger('reset')
      $.get('http://localhost:3000/menu', (data) => {
        menuList = data
      }).done(() => menuInfoList())



  })
})


 async function fetchData() {

    const response = await fetch('http://localhost:3000/menu');
  
    const data = await response.json();
  
    // Display data in the list
  
  }
  
  
  
  async function createItem(data) {
  
    await fetch('http://localhost:3000/menu', {
  
      method: 'POST',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      body: JSON.stringify(data)
  
    });
  
  }
  
  
  
  async function deleteItem(id) {
  
    await fetch(`http://localhost:3000/menu/${id}`, {
  
      method: 'DELETE'
  
    });
  
  }
  
  
  
  // Event listeners for form submission and delete buttons
  
  // ... 
  