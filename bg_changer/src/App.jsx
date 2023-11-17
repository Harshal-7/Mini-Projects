import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState("#2f2f2f")

  return (
    <div className="w-screen h-screen" 
    style={{backgroundColor: color}}
    >
      
      <div className='fixed flex flex-wrap justify-center bottom-12 p-4 w-full'>
        
        <div className='flex flex-wrap justify-center gap-4 bg-gray-200 px-3 py-2 rounded-full'>
          <button className=' text-white rounded-full px-3 py-1 font-semibold shadow-md' 
          onClick={() => setColor("red")}
          style={{backgroundColor: "red"}}>
            Red
          </button>

          <button className=' text-white rounded-full px-3 py-1 font-semibold shadow-md'
          onClick={() => setColor("green")}
          style={{backgroundColor: "green"}}>
            Green
          </button>
          
          <button className=' text-white rounded-full px-3 py-1 font-semibold shadow-md'
          onClick={() => setColor("blue")}
          style={{backgroundColor: "blue"}}>
            Blue
          </button>

          <button className=' text-white rounded-full px-3 py-1 font-semibold shadow-md'
          onClick={() => setColor("purple")}
          style={{backgroundColor: "purple"}}>
            Purple
          </button>

          <button className=' text-black rounded-full px-3 py-1 font-semibold shadow-md'
          onClick={() => setColor("orange")}
          style={{backgroundColor: "orange"}}>
            Orange
          </button>

          <button className=' text-black rounded-full px-3 py-1 font-semibold shadow-md'
          onClick={() => setColor("yellow")}
          style={{backgroundColor: "yellow"}}>
            Yellow
          </button>

          <button className=' text-black rounded-full px-3 py-1 font-semibold shadow-md'
          onClick={() => setColor("pink")}
          style={{backgroundColor: "pink"}}>
            Pink
          </button>
          
          <button className=' text-black rounded-full px-3 py-1 font-semibold shadow-md'
          onClick={() => setColor("white")}
          style={{backgroundColor: "white"}}>
            White
          </button>

          <button className=' text-white rounded-full px-3 py-1 font-semibold shadow-md'
          onClick={() => setColor("black")}
          style={{backgroundColor: "black"}}>
            Black
          </button>

        </div>

      </div>
      
    </div>
  )
}

export default App
