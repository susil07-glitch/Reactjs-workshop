import React ,{useState}from 'react'

const LearningUseState = () => {
  const [count,setCount] = useState(0)
  const increase = ()=> setCount(count +1)
  function decrease(){
    if(count <= 0){
      setCount(0)
    }else{
      setCount(count-1)
    }
  }
  const reset = () => setCount(0)
  return (
    <divn >
      <h1 className='uppercase text-3xl text-center font-bold mt-20 mb-20'>Number: {count}</h1>
      <div className='flex justify-center items-center gap-40'>
      <button onClick={increase} className='text-black bg-blue-500  outline-none w-20 h-20 rounded-md'> + </button>
      <button onClick={decrease} className='text-red bg-blue-500  outline-none w-20 h-20 rounded-md'> - </button>
     
      </div>
      
    </divn>
  )
}

export default LearningUseState