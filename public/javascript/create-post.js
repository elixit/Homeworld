async function PostFormHandler(event) {
    event.preventDefault();
  

    const id = document.querySelector('input[name="id"]').value;
    const userid = document.querySelector('input[name="userid"]').value;
    const planetid = document.querySelector('input[name="planetid"]').value;
    const postContent = document.querySelector('input[name="post-content"]').value;

  
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({       
        id,
        userid,
        planetid,
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