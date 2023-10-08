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
    <div class='flex pt-[30px] lg:pt-[0px] pb-[15px] text-[30px] leading-[35px] text-left text-bold'>
          <p>Get the latest of sports news around the globe</p>
    </div>
    <div  >
      <p style={{  borderBottom:1, borderRight:0, borderLeft:0, borderTop:0, borderStyle:'solid', borderColor:'#999999',}}></p>
    </div>
  
  
  <div class="grid lg:grid-cols-3 gap-12 lg:gap-6 sm:grid-cols-1 lg:pb-[140px]"  >

        {post &&
        post.slice(4, 9).map((post, index) => (
        <div
          key={post.id}             
        >
                  
                    <div>
                      <div  onClick={() => {
              showPostDetails(post.post_id)
            } } class='flex flex-col  text-left text-[20px] lg:text-[18px] font-bold lg:font-bold lg:leading-[23px] leading-[27px]'>
                        <div >
                          <img src={post.image} alt='image' class='' />
                        </div>
                        <p class='line-clamp-2 mt-[-80px] px-[20px] mb-[80px] text-white'>{post.headline} </p>              
                        {/* <p class='line-clamp-1 text-gray text-[14px] mt-[8px]'>{post.story}</p>   */}
                      </div>        
                    </div>
      </div>
  ))}
    </div> 
</div>
</div>
  )
}
