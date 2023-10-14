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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 5 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      //partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
    }
  };

  return (


    <div>
        <Carousel
            //partialVisible={true}
            //centerMode={true}
             swipeable={true}
             draggable={false}
             showDots={true}
             responsive={responsive}
             ssr={true} // means to render carousel on server-side.
             infinite={true}
             autoPlay={responsive.deviceType !== "mobile" ? true : false}
             autoPlaySpeed={2000}
             keyBoardControl={true}
             customTransition="all .5"
             transitionDuration={2500}
             containerClass="carousel-container"
             removeArrowOnDeviceType={["tablet", ""]}
             deviceType={responsive.deviceType}
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
            >
            <div class=' lg:w-[100%] w-[100%] '>
                {post &&
                  post.slice(0, 1).map((post, index) => (
                    <div onClick={() => {showPostDetails(post.post_id)}} class='flex justify-left flex-col mb-[30px] text-left text-[25px] lg:text-[25px] font-bold lg:font-bold lg:leading-[30px] leading-[27px]'>
                      <div   class='z-1 '
                      >
                        <img src={post.image} alt='image' class='bg-red w-[100%] h-[300px] lg:h-[500px]  ' />
                      </div>
                       
                      <div  class='flex flex-col z-2 bg-gradient-to-t from-blue-950 line-clamp-2 h-[350px] lg:h-[500px] pt-[220px] lg:pt-[360px] pl-[20px] pr-[20px] mt-[-350px] lg:mt-[-500px] mb-[10px] lg:mb-[-20px] text-white'>
                        <div class=' w-[30%] lg:w-[15%] bg-red text-white py-[0px] mb-[5px] text-center px-[5px] text-[12px] lg:text-[15px] text-light rounded-[2px]'>
                            lead stories
                        </div>
                        <div class='border-b-[5px] border-style-solid border-orange pb-[5px] mb-[5px] w-[35%] lg:w-[20%] '></div>
                        <div class='line-clamp-2'>
                            {post.headline} 
                        </div>
                      </div>
                          
                    </div>                                               
                  )               
                 )}                
              </div>

              <div class=' lg:w-[100%] w-[100%] '>
                {post &&
                  post.slice(2, 3).map((post, index) => (
                    <div onClick={() => {showPostDetails(post.post_id)}} class='flex justify-left flex-col mb-[30px] text-left text-[25px] lg:text-[25px] font-bold lg:font-bold lg:leading-[30px] leading-[27px]'>
                      <div   class='z-1 '
                      >
                        <img src={post.image} alt='image' class='bg-red w-[100%] h-[300px] lg:h-[500px]  ' />
                      </div>
                       
                      <div  class='flex flex-col z-2 bg-gradient-to-t from-blue-950 line-clamp-2 h-[350px] lg:h-[500px] pt-[220px] lg:pt-[360px] pl-[20px] pr-[20px] mt-[-350px] lg:mt-[-500px] mb-[10px] lg:mb-[-20px] text-white'>
                      <div class=' w-[30%] lg:w-[15%] bg-red text-white py-[0px] mb-[5px] text-center px-[5px] text-[12px] lg:text-[15px] text-light rounded-[2px]'>
                            lead stories
                        </div>
                        <div class='border-b-[5px] border-style-solid border-orange pb-[5px] mb-[5px] w-[35%] lg:w-[20%] '></div>
                        <div class='line-clamp-2'>
                            {post.headline} 
                        </div>
                      </div>
                          
                    </div>                                               
                  )               
                 )}                
              </div>

              <div class=' lg:w-[100%] w-[100%] '>
                {post &&
                  post.slice(4, 5).map((post, index) => (
                    <div onClick={() => {showPostDetails(post.post_id)}} class='flex justify-left flex-col mb-[30px] text-left text-[25px] lg:text-[25px] font-bold lg:font-bold lg:leading-[30px] leading-[27px]'>
                      <div   class='z-1 '
                      >
                        <img src={post.image} alt='image' class='bg-red w-[100%] h-[300px] lg:h-[500px]  ' />
                      </div>
                       
                      <div  class='flex flex-col z-2 bg-gradient-to-t from-blue-950 line-clamp-2 h-[350px] lg:h-[500px] pt-[220px] lg:pt-[360px] pl-[20px] pr-[20px] mt-[-350px] lg:mt-[-500px] mb-[10px] lg:mb-[-20px] text-white'>
                      <div class=' w-[30%] lg:w-[15%] bg-red text-white py-[0px] mb-[5px] text-center px-[5px] text-[12px] lg:text-[15px] text-light rounded-[2px]'>
                            lead stories
                        </div>
                        <div class='border-b-[5px] border-style-solid border-orange pb-[5px] mb-[5px] w-[35%] lg:w-[20%] '></div>
                        <div class='line-clamp-2'>
                            {post.headline} 
                        </div>
                      </div>
                          
                    </div>                                               
                  )               
                 )}                
              </div>

              <div class=' lg:w-[100%] w-[100%] '>
                {post &&
                  post.slice(6, 7).map((post, index) => (
                    <div onClick={() => {showPostDetails(post.post_id)}} class='flex justify-left flex-col mb-[30px] text-left text-[25px] lg:text-[25px] font-bold lg:font-bold lg:leading-[30px] leading-[27px]'>
                      <div   class='z-1 '
                      >
                        <img src={post.image} alt='image' class='bg-red w-[100%] h-[300px] lg:h-[500px]  ' />
                      </div>
                       
                      <div  class='flex flex-col z-2 bg-gradient-to-t from-blue-950 line-clamp-2 h-[350px] lg:h-[500px] pt-[220px] lg:pt-[360px] pl-[20px] pr-[20px] mt-[-350px] lg:mt-[-500px] mb-[10px] lg:mb-[-20px] text-white'>
                      <div class=' w-[30%] lg:w-[15%] bg-red text-white py-[0px] mb-[5px] text-center px-[5px] text-[12px] lg:text-[15px] text-light rounded-[2px]'>
                            lead stories
                        </div>
                        <div class='border-b-[5px] border-style-solid border-orange pb-[5px] mb-[5px] w-[35%] lg:w-[20%] '></div>
                        <div class='line-clamp-2'>
                            {post.headline} 
                        </div>
                      </div>
                          
                    </div>                                               
                  )               
                 )}                
              </div>
           
        </Carousel>  
       
    </div>
  )
}
