import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Bottom from '../Bottom'
import { Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate, Form } from "react-router-dom";
import { reverseList } from "../../helpers/helper";
import { addPost } from '../../redux/postSlice'
import { useDispatch } from 'react-redux'
import RelatedNews from '../RelatedNews'
import LatestNews from '../LatestNews'
import ArchiveNews from '../ArchiveNews'
import AdminHeader from './AdminHeader'

export default function UnAuthorisedPosts() {

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
   navigate('/Posts')
  }

  return (
    <div class='bg-gray4'>
      
        <div class='flex flex-col bg-white border-[2px] mx-[5px] mt-[2px] border-gray2 border-style-solid py-[50px]px-[5px] lg:px-[50px] w-[98%] mx-auto h-full'>
        <div>
          {post &&
            post.slice(0, 10).map((post, index) => (

                <div onClick={() => {showPostDetails(post.post_id)}} class='flex justify-left bg-white flex-row mb-[5px] py-[5px] text-deepBlue text-left text-[15px] border-[2px] w-full border-gray2 border-style-solid lg:text-[15px] font-medium lg:font-medium lg:leading-[20px] leading-[20px] '>
                <div class='line-clamp-1 mx-[5px] lg:mx-[20px] mt-[5px] w-full pl-[5px] lg:pl-[20px] '>
                {post.headline} 
                </div>  
                  
                <div class='bg-deepBlue text-white text-[15px] grid content-center px-[20px] mx-[2px]  '>
                    Edit
                </div>  
                <div class='bg-red text-white text-[15px]  px-[20px]  grid content-center mx-[2px] '>
                    Delete
                </div>              
            </div>                        
                
        )
        
        )}
      </div>
        
    </div>
    </div>
    
  )
}
