import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-css'

const IndexPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      fetch("http://localhost:4000/post").then(response=>{
        response.json().then(posts=>{
            console.log(posts)
            setPosts(posts)})
      })
    
    }, [])
    const breakPoints={
        default:4,
        1100:3,
        768:2,
        500:1
    }
    
  return (
    <div className='md:mx-10 mx-6 my-5'>
    <Masonry
  breakpointCols={breakPoints}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
    {posts.length> 0 && posts.map(post => (
        <div key={post._id} className='relative'>
        <Link to={`post/${post._id}`} >
            <img src={'http://localhost:4000/' + post.cover} alt={post.title} className='rounded-2xl cursor-zoom-in hover:opacity-90 ' />
        </Link>
        {/* <a href={`http://localhost:4000/downloads/${post.cover}`}  download className="bg-white/25 hover:bg-white text-black font-bold py-2 px-4 rounded mt-2 absolute top-2 right-4 inline-block">
            Download
         </a> */}
        </div>
    ))}
 </Masonry>
    </div>
  )
}

export default IndexPage