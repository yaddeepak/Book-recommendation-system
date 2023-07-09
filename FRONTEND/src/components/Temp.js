import React from 'react'
import axios from 'axios';

function Temp () {
    const handleApi=()=>{
    axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'intitle', // Your search query here
          key: 'AIzaSyBTcRHaVAQgoEfDDGr3teAcKD_6RAgAUjo' // Replace with your API key
        }
      })
        .then(response => {
          // Handle the response data
          console.log(response.data);
        })
        .catch(error => {
          // Handle errors
          console.error(error);
      });  
    }
  return (
    <div>
        <button onClick={handleApi}>Click ME</button>
    </div>
  )
}

export default Temp;