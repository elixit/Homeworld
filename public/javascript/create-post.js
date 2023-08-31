async function PostFormHandler(event) {
    event.preventDefault();
  
    const postContent = document.querySelector('input[name="post-content"]').value;
  
    const response = await fetch(`/api/planets`, {
      method: 'POST',
      body: JSON.stringify({
       
        postContent
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/planet');
    } else {
     console.log('issue on create-post js');
    }
  }
  
  document.querySelector('.newPost-form').addEventListener('submit', PostFormHandler);