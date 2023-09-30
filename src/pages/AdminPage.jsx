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
import AdminHeader from '../components/AdminHeader'


export default function AdminPage() {

  const navigate = useNavigate();
  const [postDetail, setPostDetail] = useState();
  const [post, setPost] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {

   
    axios.get("http://localhost:8000/api/get-posts", )
    

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

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     //setLoading(true);
  //     const res = await axios.get(
  //       "http://localhost:8000/api/get-posts"
  //     );
  //     setPost(res.data);
  //     //setLoading(false);
  //     console.log(post)
  //   };
  //   fetchPost();
  // }, []);

  return (
    <div className='App'>
      <div>
        <HeaderLogo />
        <AdminHeader />
       
        <div class='w-[90%] lg:w-[70%] mx-auto py-10 ' >
          <div style={{backgroundColor:'#fff', paddingTop:70, paddingBottom:20}}>
            <div class='flex flex-col lg:flex-row lg:w-[100%] gap-4'>
              
              <div class=' lg:w-[70%]'>
              {post.slice(0,1).map((post, index) => {
               
                  return (
                     <div class='flex flex-col mb-[30px] text-left text-[20px] lg:text-[25px] font-medium lg:font-bold lg:leading-[30px] leading-[27px]'>
                            <div >
                              <img src={post.image} alt='image' style={{width:'100%', height:'', border:1, borderStyle:'solid', borderColor:'#ddd', borderRadius:0,}} />
                            </div>
                            <p>{post.headline.substring(0, 250)}... </p>              
                           
                          </div>                          
                        
                  )
                  
                  })
                  // .reverse()
                  }
              </div>

              {/* latest NPFL news */}
              <div class='flex flex-col lg:flex-col lg:w-[30%] '>
                <p class='text-[20px] lg:text-[25px] font-bold text-left pb-[10px] mb-[20px] border-b-2 border-gray4 border-style-solid '>Top Football News</p>
                {post.slice(0, 3).map((post, index) => {
                
                  return (
                               
                        
                          <div class='flex flex-row gap-3 lg:mb-[15px] text-left text-[18px] lg:text-[18px] font-medium lg:font-bold lg:leading-[23px] leading-[27px] pb-[15px] border-b-2 border-gray4 border-style-solid '>
                            <div>
                              <img src={post.image} alt='image' class='w-[350px] h-[100px] lg:w-[200px]' />
                            </div>
                            <p>{post.headline.substring(0, 250)}... </p>                                       
                          </div>        
                       
                        
                  )
                  
                  })
                  //.reverse()
                  }
                </div>
            <div>
              <div>
                
              </div>
              
              </div>
            </div>
           
            <div class='flex pt-[50px] lg:pt-[70px] pb-[15px] text-[30px] leading-[35px] text-left text-bold'>
                  <p>Get the latest of sports news around the globe</p>
            </div>
            <div  >
              <p style={{  borderBottom:1, borderRight:0, borderLeft:0, borderTop:0, borderStyle:'solid', borderColor:'#999999',}}></p>
            </div>
          </div>
          
          <div class="grid lg:grid-cols-3 gap-12 lg:gap-6 sm:grid-cols-1 lg:pb-[140px]"  >
        
            {post &&
            post.slice(0, 6).map((post, index) => (
            <div
              key={post.id}             
            >
                      
                        <div>
                          <div class='flex flex-col  text-left text-[20px] lg:text-[18px] font-medium lg:font-bold lg:leading-[23px] leading-[27px]'>
                            <div >
                              <img src={post.image} alt='image' style={{width:'100%', height:250, border:1, borderStyle:'solid', borderColor:'#ddd', borderRadius:0,}} />
                            </div>
                            <p>{post.headline.substring(0, 250)}... </p>              
                           
                          </div>        
                        </div>
                     
                      
                                                                
                    
                        
                  
               
            
          
          </div>
      ))}
        </div> 
        <div class='border-b-2 border-gray4 border-style-solid pb-[20px] mb-[30px]' >
          <p class='text-left text-[25px] mt-[40px] lg:text-[30px] font-bold '>News Archive</p>
        </div>
        <div class=' lg:columns-3 lg:w-[90%] '>
                
                {post.map((post, index) => {
                  if(index >= 4) {
                  return (
            
                          <div class='flex flex-row gap-3 lg:mb-[15px] text-left text-[18px] lg:text-[18px] font-medium lg:font-bold lg:leading-[23px] leading-[22px] pb-[15px] border-b-2 border-gray4 border-style-solid '>
                            <div>
                              <img src={post.image} alt='image' class=' w-[400px] h-[100px] lg:w-[400px] lg:h-[120px] ' />
                            </div>
                            <p>{post.headline.substring(0, 250)}... </p>                                       
                          </div>        
                       
                        
                  )
                  }
                  })
                  .reverse()
                  }
                </div>
        </div>
       
        <Bottom />
        <Footer />
      </div>
    </div>
  )
}
