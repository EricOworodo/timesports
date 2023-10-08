import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
import { Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate, Form } from "react-router-dom";
import HeaderLogo from '../components/HeaderLogo'
import { reverseList } from "../helpers/helper";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import RelatedNews from '../components/RelatedNews'
import LatestNews from '../components/LatestNews'
import ArchiveNews from '../components/ArchiveNews'


export default function NewsPostPage() {

const dispatch = useDispatch();
const navigate = useNavigate();
const [postDetail, setPostDetail] = useState();
const [post, setPost] = useState();
const [image, setImage] = useState([]);
//const {newsPost} = useSelector((state) => state.post)
const newsPost = useSelector((state)=> state.post)



//   console.log(newsPost)

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
       <HeaderLogo />
        <Header />
       
        <div class='w-[90%] lg:w-[70%] mx-auto py-0 lg:py-8 ' >
          <div class='py-8 '>
            <div class='flex flex-col lg:flex-row lg:w-[100%] gap-4'>
              
              <div class='flex flex-col lg:w-[70%]'>
                <img src={newsPost[0].image} />
                <div class='text-[25px] lg:text-[35px] text-bold my-[15px] text-left leading-[29px] lg:leading-[39px]' >
                    {newsPost[0].headline}  
                </div>
                <div class='text-[15px] lg:text-[16px] my-[15px] text-left leading-[19px] lg:leading-[21px] ' >
                {/* {
                    newsPost[0].story == "\"" && JSON.parse(newsPost[0].story)
                  } */}
                  {/* {
                    newsPost[0].story != "\"" && newsPost[0].story
                  } */}
                    {(newsPost[0].story) }
                    
                </div>
             
            </div>
            <div class='lg:w-[30%]'>
                  {/* latest NPFL news */}
                <RelatedNews />
            </div>  
            </div>
           
          </div>
        </div>
        <div class='w-[100%]'>
            <LatestNews />
        </div>
        <ArchiveNews />
       
        <Bottom />
        <Footer />
      </div>
    </div>
  )
}
