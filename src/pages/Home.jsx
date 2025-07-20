import React, { useEffect,useState } from 'react'
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
    
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((blog)=>{
          return(
          <Card key={blog.id} blog={blog}/>
          )
          })}
      </div>

    </div>

   
  )
}

export default Home
