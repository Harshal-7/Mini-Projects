/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$&%^*()_+=-{}[]~`"

    for(let i = 1; i <= length; i++){
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length,numAllowed,charAllowed,setPassword])

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto px-4 py-2 my-8 text-white bg-zinc-800 rounded-md'>
        <h1 className='text-4xl text-center p-5'>Password Generator</h1>
        <div className='flex overflow-hidden mb-5 py-4'>
          <input
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 rounded-l-md text-black'
          placeholder='Password'
          ref={passwordRef}
          readOnly
          />
          <button
          onClick={copyPass}
          className='bg-blue-600 rounded-r-md px-3 py-1 outline-none hover:bg-blue-700'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input 
            min={8}
            max={20}
            value={length}
            type="range"
            className='cursor-pointer'
            id='rangeIP'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="rangeIP">Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numAllowed}
            className='cursor-pointer'
            id='checkBox1'
            onChange={() => {
              setNumAllowed(prev => !prev)
            }}
            />
            <label htmlFor="checkBox1">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={charAllowed}
            className='cursor-pointer'
            id='checkBox2'
            onChange={() => {
              setCharAllowed(prev => !prev)
            }}
            />
            <label htmlFor="checkBox2">Characters</label>
          </div>


        </div>

      </div>
    </>
  )
}

export default App
