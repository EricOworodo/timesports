import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import foothball1 from'../foothball1.jpg'
import foothball2 from'../foothball2.jpg'
import basketball1 from'../basketball1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Col, Row } from 'react-bootstrap';



export default function Banner() {
  return (
  
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div style={{ display:'flex', alignItems:'center',textAlign:'left',padding:25, lineHeight:1.3, alignContent:'right', 
      justifyContent:'left', backgroundImage: `url(${foothball1})`, height:500, backgroundPosition: 'center center',  backgroundRepeat:"no-repeat", backgroundSize:'cover'}} class="carousel-item active">
        {/* <img src="..." class="d-block w-100" alt="..."> */}
        <Row class="pt-lg-20" pt-xs-20 style={{ display:'flex', justifyContent:'left', alignItems:'left'}}> 
          
          <Col lg={6} >
            
            <p style={{color:'#fff', fontSize:18, fontWeight:400, lineHeight:1.3 }}>
             
            </p>
          </Col>
          <Col lg={6}></Col>
        </Row>
      </div>
    <div  style={{ display:'flex', alignItems:'center',textAlign:'left',padding:25, lineHeight:1.3, alignContent:'right', 
    justifyContent:'left', backgroundImage: `url(${basketball1})`, height:500,  backgroundRepeat:"no-repeat", backgroundSize:'cover'}} class="carousel-item">
   
      <Row pt-lg-5 pt-xs-5 style={{}}> 
      
          <Col lg={6} >
           
            <p style={{color:'#fff', fontSize:18, fontWeight:400, lineHeight:1.3 }}>
            
            </p>
          </Col>
          <Col lg={6}></Col>
      </Row>
    </div>
      
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>  
 
 
  );
}