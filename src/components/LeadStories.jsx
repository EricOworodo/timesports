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




export default function LeadStories() {
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
    <div>
        <div class=' lg:w-[100%] w-[100%] '>
                {post &&
                  post.slice(0, 1).map((post, index) => (

                    <div onClick={() => {showPostDetails(post.post_id)}} class='flex justify-left flex-col mb-[30px] text-left text-[25px] lg:text-[25px] font-bold lg:font-bold lg:leading-[30px] leading-[27px]'>
                      <div   class='z-1 '
                      >
                        <img src={post.image} alt='image' class='bg-red w-[100%] h-[300px] lg:h-[500px]  ' />
                      </div>
                       
                      <div  class='flex flex-col z-2 bg-gradient-to-t from-blue-950 line-clamp-2 h-[350px] lg:h-[500px] pt-[220px] lg:pt-[360px] pl-[20px] pr-[20px] mt-[-350px] lg:mt-[-500px] mb-[10px] lg:mb-[-20px] text-white'>
                        <djiv class=' w-[30%] lg:w-[10%] bg-red text-white py-[0px] mb-[5px] text-center px-[5px] text-[12px] text-light rounded-[2px]'>
                            lead stories
                        </djiv>
                        <div class='border-b-[5px] border-style-solid border-orange pb-[5px] mb-[5px] w-[35%] lg:w-[20%] '></div>
                        <div class='line-clamp-2'>
                            {post.headline} 
                        </div>
                      </div>
                          
                    </div>                          
                        
                  )
                  
                 )}
                  
              </div>
    </div>
  )
}
