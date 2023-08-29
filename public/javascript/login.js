async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'content-type': 'application/json' }
      });
      console.log(response)
  

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.login').addEventListener('submit', loginFormHandler);