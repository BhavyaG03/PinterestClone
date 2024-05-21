import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const CreatePost = () => {
    const [files, setFiles] = useState('')
    const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const[redirect,setRedirect]=useState(false)
  async function createNewPost(e){
    e.preventDefault()
    const data = new FormData();
    data.set('title',title)
    data.set('summary',summary)
    data.set('file',files[0])
    console.log(files)
  
    const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        body: data,
    });
    if (response.ok) {
        setRedirect(true)
    }
  }
  if (redirect) {
    return <Navigate to={'/'}/>
  }
  
  return (
    <form className='w-full h-full bg-[#E9E9E9] flex justify-center items-center' onSubmit={createNewPost}>
        <div className="w-[800px] h-[600px] bg-white m-5 rounded-xl mt-12 flex justify-between items-start gap-8 px-10">
            <div className="w-[300px] h-[400px] mt-20">
                <input type='file' placeholder='Drag and drop or click to upload'onChange={e=>setFiles(e.target.files)} className='w-full h-full bg-[#E9E9E9] placeholder:text-black '></input>
            </div>
            <div className="flex flex-col justify-start items-start gap-4 mt-20">
                <div className="flex flex-col justify-center items-center">
                <input type="text" value={title} placeholder='Add your title' onChange={e=>setTitle(e.target.value)} className='w-[400px] h-[100px] text-4xl text-black font-bold placeholder:text-gray-600 placeholder:text-5xl placeholder:font-semibold focus:outline-none' />
                <div className="w-[400px] h-[2px] bg-black/20"></div>
                </div>
            <div className="flex justify-start items-center gap-5">
                <div className='bg-[#E1E1E1] flex justify-center items-center rounded-full w-12 h-12 cursor-pointer '>
                       B
                </div>
                <div className="font-sans font-semibold text-black text-base">Bhavya</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <input type="text" value={summary} placeholder='Tell everyone what your pin is about' onChange={e=>setSummary(e.target.value)} className='w-[400px] h-[100px] text-2xl text-black font-semibold placeholder:text-gray-600 placeholder:text-lg placeholder:font-medium focus:outline-none focus:placeholder:text-gray-500 ' />
                <div className="w-[400px] h-[2px] bg-black/20"></div>
                </div>
                <div className="">
                    <button type='submit' className='bg-black text-white text-xl font-medium rounded-full py-3 px-8'>Save</button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default CreatePost