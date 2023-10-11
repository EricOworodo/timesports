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


export default function RelatedNews() {

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
         {/* latest NPFL news */}
         <div class='flex flex-col lg:flex-col mx-[15px] '>
                <p class='text-[25px] lg:text-[25px] text-deepBlue font-bold text-left pb-[10px] mb-[20px] border-b-2 border-gray4 border-style-solid '>Related News</p>
                {post &&
                    post.slice(2, 5).map((post, index) => (
                
                    <div  onClick={() => {showPostDetails(post.post_id)}} class='flex flex-row gap-3 lg:mb-[15px] text-left text-[16px] lg:text-[18px] font-bold lg:font-bold lg:leading-[23px] leading-[20px] pt-[15px] pb-[15px] border-b-2 border-gray4 border-style-solid '>
                                  <div class='w-[30%] border-1 border-style-solid border-gray4 '>
                                    <img src={post.image} alt='image'  />
                                  </div>
                                  <div class='w-[70%] '>
                                    <p class='line-clamp-2'>{post.headline} </p>  
                                    <p class='line-clamp-1 text-gray text-light text-[15px] mt-[8px]'>{post.story}</p>   
                                  </div>       
                                                           
                                </div>     
                          
                        )                       
                        )}
                      
               </div>
    </div>
  )
}
