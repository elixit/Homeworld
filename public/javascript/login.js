async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if(username == '' || password == '') {
      new Alert({duration: 5, type: 'error', message: 'Invalid username or password.', close: false});
      return;
    }  
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'content-type': 'application/json' }
      });      
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        new Alert({duration: 5, type: 'error', message: 'Invalid username or password.', close: false});
      }
    }
  }

  document.querySelector('.login').addEventListener('submit', loginFormHandler);