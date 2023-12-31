import React from 'react'
import { useEffect, useState } from 'react'
import  '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
import { Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate, Form } from "react-router-dom";
import { reverseList } from "../helpers/helper";
import { addPost } from '../redux/postSlice'
import { useDispatch } from 'react-redux'
import RelatedNews from '../components/RelatedNews'
import LatestNews from '../components/LatestNews'

export default function ArchiveNews() {

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
      <div class='w-[90%] lg:w-[70%] mx-auto'>
        <div class='border-b-2 border-gray4 border-style-solid pb-[20px] mb-[30px]' >
          <p class='text-left text-[25px] mt-[40px] lg:text-[30px] font-bold '>News Archive</p>
        </div>
        <div class=' lg:columns-3 lg:w-[90%] '>
                
        {post &&
                    post.slice(4, 13).map((post, index) => (
            
                          <div  onClick={() => {
                            showPostDetails(post.post_id)
                          } } class='flex flex-row gap-3 lg:mb-[15px] text-left text-[18px] lg:text-[18px] font-bold lg:font-bold lg:leading-[23px] leading-[22px] pb-[15px] border-b-2 border-gray4 border-style-solid '>
                            <div class='w-[30%]'>
                              <img src={post.image} alt='image ' />
                            </div>
                            <div class='w-[70%]'>
                              <p class='line-clamp-2'>{post.headline} </p>  
                              <p class='line-clamp-1 text-gray text-[14px] mt-[8px]'>{post.story}</p>    
                            </div>                                 
                          </div>        
                 
                  )
                  
                  )}
                 
                
                </div>
        </div>
    </div>
  )
}
