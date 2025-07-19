import React, { useEffect,useState } from 'react'
import Navbar from '../Component/Navbar'
import Card from '../Component/Card'
import axios from 'axios'
const Home = () => {
  const[blog,setBlog]=useState([])
  async function fetchBlog(){
    const response = await axios.get("https://687af359abb83744b7ee4687.mockapi.io/blog")
    if(response.status == 200){
       setBlog(response.data)

  }else{
    alert("Error aayo!!!")
  }
}
useEffect(()=>{
  fetchBlog()

},[])
  return (
    <>
        <Navbar/>
          {blog.map(function(blog){
          return(
          <Card key={blog.id} blog={blog}/>
          )
          })}
    
    </>
  )
}

export default Home
