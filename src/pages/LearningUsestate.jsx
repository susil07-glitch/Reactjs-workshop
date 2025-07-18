

import React, { useState } from 'react'

const LearningUsestate = () => {
    //   const [name ,setName]=useState("sushil")
    //   const [age,setAge]=useState(20)
    //   const [address,setaddress]=useState("siraha")
    // let counter=0
    const[counter,setCounter]=useState(0)

     function increaseCounter(){
        setCounter(counter +1)
        // counter++
     }
     function decreaseCounter(){
        // counter--
        if(counter<=0){
            setCounter(0)
        }else{
        setCounter(counter -1)
     }
    }
  return (
    <>
        <h1>{counter}</h1>
        <button onClick={increaseCounter}>+</button>
        <button onClick ={decreaseCounter}>-</button>
      
    </>
  )
}

export default LearningUsestate
