// Add your code here
function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const data = {
    name: name,
    email: email
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
    //i had to research what this stringify means but the output looks like "{\"name\":\"John\",\"email\":\"john@example.com\"}" 
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        return new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Access the new ID from the response and append it to the DOM
      document.body.innerHTML += `<p>New ID: ${data.id}</p>`;
    })
    .catch(error => {
      // Handle errors by appending error message to the DOM
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
       // Return the fetch chain from the submitData function
      return submitData;
      
    });
  
  }