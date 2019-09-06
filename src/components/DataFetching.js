import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DataFetching() {

    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [post, setPost] = useState({})
    const [buttonClickedId, setButtonClickedId] = useState(1)

    //fetching api data
    //don't forget to pass an empty array in effect hook as a 2nd paratmeter otherwise after every render i.e posts.map()
    //effect hook will execute and data will fetched from api every time unesseccerly. 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err.response)
            setPost(err.response.data)
        })
    },[buttonClickedId])

    const handleClick = () => {
        setButtonClickedId(id)
    }

  return (
    <div>
      <ul>
          {/* {
              posts.map(post => (
                  <li key={post.id}>{post.title}</li>
              ))
          } */}
      </ul>
      <br></br>
      <input type="text" value={id} onChange = {e => setId(e.target.value)}/><br></br>
      <button onClick = {handleClick} value={buttonClickedId}>search</button>
      <li>{post.title ? post.title : 'No data'}</li>
    </div>
  )
}
