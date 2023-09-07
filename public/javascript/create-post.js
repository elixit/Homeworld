async function PostFormHandler(event) {
    event.preventDefault();

    // const id = document.querySelector('input[name="id"]').value;    
    const planet_id = document.querySelector('input[name="planetid"]').value;
    const postContent = document.querySelector('textarea[name="post-content"]').value;    

    if(postContent == '') {
      new Alert({duration: 5, type: 'error', message: 'Invalid comment.', close: false});
      return;
    }    

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
  
    if (response.ok)
      { 
        setTimeout(function() {
        document.location.replace('/planet/' + planet_id);
      }, 2000);        
          new Alert({duration: 1, type: 'info', message: 'Comment added!', close: false});        
      }
        else {      
          new Alert({duration: 5, type: 'error', message: 'Something went wrong.', close: false});
        }

        

}

  document.querySelector('.post-form').addEventListener('submit', PostFormHandler);