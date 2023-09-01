async function PostFormHandler(event) {
    event.preventDefault();
  

    // const id = document.querySelector('input[name="id"]').value;    
    const planet_id = document.querySelector('input[name="planetid"]').value;
    const postContent = document.querySelector('textarea[name="post-content"]').value;
    

  
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({       
        planet_id,
        postContent
                
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
  
    if (response.ok) {
      return
    } else {
     console.log('issue on create-post js');
    }
  }
  

  
  document.querySelector('.post-form').addEventListener('submit', PostFormHandler);