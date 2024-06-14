import { useState } from "react"
import "../App.css"
import Axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {

  const [URL,setURL] = useState("")
  const [shortlink,setshortlink] = useState("")

  function handlesubmit(e){
    e.preventDefault()
    console.log({URL})
    Axios.post("https://url-10z0.onrender.com/getshortURL",{URL})
    .then(res=>setshortlink(res.data))
    .catch(err=>console.log(err))
    setURL("")
  }
  function handlechange(event){
    setURL(event.target.value)
  }

  return (
    <div className="url">
      
      <h1>URL SHORTNER</h1>
      <form onSubmit={handlesubmit}>
      <input type="URL" placeholder="Original URL" onChange={handlechange} value={URL}/>
      <button>Create</button>
      </form>
      <h3>Press the URL below to redirect</h3>
      <a href={shortlink}>{shortlink}</a>
    </div>
  )
}

export default Home
