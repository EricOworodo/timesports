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

export default function LatestNews() {

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
    <div> <div class='w-[90%] lg:w-[70%] mx-auto'>
      <div class='flex pt-[30px] lg:pt-[0px] pb-[15px] text-[25px] leading-[30px] text-left text-bold'>
            <p>Get the latest of sports news around the globe</p>
      </div>
      <div  >
        <p style={{  borderBottom:1, borderRight:0, borderLeft:0, borderTop:0, borderStyle:'solid', borderColor:'#999999',}}></p>
      </div>
  
  
      <div class="grid lg:grid-cols-3 gap-6 lg:gap-6 sm:grid-cols-1 lg:pb-[0px]"  >

        {post &&
            post.slice(3, 10).map((post, index) => (
            <div
              key={post.id}             
            >               
                <div onClick={() => {showPostDetails(post.post_id)}} class='flex justify-left flex-col mb-[30px] text-left text-[18px] lg:text-[19px] font-medium lg:font-medium lg:leading-[24px] leading-[23px]'>
                    <div  onClick={() => {showPostDetails(post.post_id)}} class='z-1 '
                    >
                    <img src={post.image} alt='image' class='bg-red w-[100%] h-[250px]  ' />
                    </div>
                    <div  class='flex flex-col z-2 bg-gradient-to-t from-blue-950 to-transparent h-[250px] pt-[150px] pb-[20px]  pl-[20px] pr-[20px] mt-[-250px] text-white'>
                        <djiv class=' w-[30%] bg-red text-white py-[0px] mb-[5px] text-center px-[5px] text-[12px] text-light rounded-[2px]'>
                            Top News
                        </djiv>
                        <div class='line-clamp-2  '>
                            {post.headline} 
                        </div>
                    </div>
                        
                </div>   
          </div>
      ))}
        </div> 
    </div>
</div>
  )
}
