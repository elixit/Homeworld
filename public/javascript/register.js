
async function registerFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#registerUsername').value.trim();    
    const password = document.querySelector('#registerPassword').value.trim();    
     
    if (username && password) {
      const response = await fetch('/api/users/', {
        method: 'post',
        body: JSON.stringify({
          username,          
          password
        }),
        headers: { 'content-type': 'application/json' } 
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.signup').addEventListener('submit', registerFormHandler);