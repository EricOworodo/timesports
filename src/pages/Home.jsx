import React from 'react'
import { useEffect, useState } from 'react'
import  '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
import { Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate, Form } from "react-router-dom";
import HeaderLogo from '../components/HeaderLogo'
import { reverseList } from "../helpers/helper";
import { addPost } from '../redux/postSlice'
import { useDispatch } from 'react-redux'
import RelatedNews from '../components/RelatedNews'
import LatestNews from '../components/LatestNews'
import ArchiveNews from '../components/ArchiveNews'


export default function Home() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postDetail, setPostDetail] = useState();
  const [post, setPost] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {

   
    axios.get("https://backend.timesports.ng/api/get-posts", )
    

    .then(response => {
      const post = response.data;
      setPost(post);    
        console.log(post)
         // reverse the data to get the latest post first
     const postArr = response.data;
     // console.log(typeof JSON.parse(postArr[2].content))
     const reversePostArr = reverseList(postArr)
     setPost(reversePostArr)
        })
      .catch(error => console.log(error))                    
        
  }, []);

const showPostDetails = 
  postId => {
   let filterPostDetail = [ ]
   filterPostDetail = post.filter((p) => {
    return postId == p.post_id
   })
   console.log(filterPostDetail)
   console.log(postId)
   dispatch(addPost(filterPostDetail))
   navigate('/NewsPostPage')
  }


  return (
    <div >
      <div>
        <Header />
       
        <div class='w-[100%] lg:w-[100%] mx-auto py-0 lg:py-8 ' >
          <div class='py-8 lg:w-[85%] mx-auto'>
            <div class='flex flex-col lg:flex-row lg:w-[100%] gap-4'>
              
              <div class=' lg:w-[70%] w-[100%] '>
              {post &&
                    post.slice(0, 1).map((post, index) => (

                     <div class='flex justify-left flex-col mb-[30px] text-left text-[25px] lg:text-[25px] font-bold lg:font-bold lg:leading-[30px] leading-[27px]'>
                        <div onClick={() => {showPostDetails(post.post_id)}} class='backdrop-opacity-1 backdrop bg-black/5'
                        >
                          <img src={post.image} alt='image' class='bg-red w-[100%] lg:h-[500px]  ' />
                        </div>
                        <div class='line-clamp-2 mx-[20px] mt-[-80px] mb-[80px] text-white'>
                         {post.headline} 
                        </div>
                           
                      </div>                          
                        
                  )
                  
                 )}
                  
              </div>
              <div class=' lg:w-[30%]'>
               <RelatedNews />
              </div> 
            </div>
            <div class='lg:border-b-2 lg:border-gray4 lg:border-style-solid pb-[20px] mb-[30px] ' >
          
        </div>
            </div>

           <LatestNews />

        {/* //NEWS ARCHIVE// */}
            <ArchiveNews />
        </div>
       
        <Bottom />
        <Footer />
      </div>
    </div>
  )
}
