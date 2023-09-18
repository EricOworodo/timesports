import React from 'react'
import { useEffect, useState } from 'react'
import  '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
import { Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Banner from '../components/Banner'
import { Link, useNavigate, Form } from "react-router-dom";
import HeaderLogo from '../components/HeaderLogo'


export default function Home() {

  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
   
    useEffect(() => {

   
      axios.get("http://localhost:4000/posts",)
      
      .then(response => {
        const post = response.data;
        setPost(post);    
          console.log(post)
  
          })
        .catch(error => console.log(error))                    
  
    }, []);      
         
      
  }

  const [post, setPost] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {

   
    axios.get("http://localhost:4000/posts",)
    
    .then(response => {
      const post = response.data;
      setPost(post);    
        console.log(post)

        })
      .catch(error => console.log(error))                    

  }, []);

  return (
    <div className='App'>
      <div>
        <HeaderLogo />
        <Header />
        <Banner />
        <Container>
          <div style={{backgroundColor:'#fff', paddingTop:70, paddingBottom:20}}>
            <div class='col-lg-8 px-lg-5 ps-lg-5 pb-lg-1'>
                  <p style={{fontSize:40, fontWeight:500, lineHeight:1.1, marginBottom:0, textAlign:'left'}}>Get the latest of sports news around the globe</p>
            </div>
            <div class='col-lg-10 px-lg-5 ps-lg-5 pt-lg-3 pb-lg-0' >
              <p style={{  borderBottom:1, borderRight:0, borderLeft:0, borderTop:0, borderStyle:'solid', borderColor:'#999999',}}></p>
            </div>
          </div>
          
        <div class="row mx-auto px-lg-5 ps-lg-5" fluid style={{ backgroundColor:'#fff', paddingBottom:100, justifyContent:'left', flexDirection:'row', alignItems:'left', textAlign:'left',}} >
            
          {post.map(post => {
                  return (
                 
                      
                        <div class='col-sm-12 col-md-12 col-lg-4' style={{ flexDirection:'row'}}>
                          <div class='col' style={{backgroundColor:'#fff',textAlign:'left', marginTop:50, display:'flex', flexDirection:'column', lineHeight:1.2, }}>
                            <div style={{paddingTop:0}}>
                              <img src={post.image} alt='image' style={{width:'100%', height:250, border:1, borderStyle:'solid', borderColor:'#ddd', borderRadius:0,}} />
                            </div>
                            <p style={{ paddingTop:0, fontSize:22, fontWeight:600,}}>{post.heading.substring(0, 250)}... </p>              
                            <p style={{ paddingTop:0, fontSize:16, fontWeight:400,}}>{ post.story.substring(0, 250)}... </p>      
                          </div>        
                        </div>
                     
                      
                                                                
                    
                        
                  )
              })
          }
                        
        </div> 
        </Container>
       
        <Bottom />
        <Footer />
      </div>
    </div>
  )
}
