import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
import { Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate, Form } from "react-router-dom";
import { reverseList } from "../helpers/helper";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import RelatedNews from '../components/RelatedNews'
import LatestNews from '../components/LatestNews'
import ArchiveNews from '../components/ArchiveNews'
import {
    FacebookShareButton,
    EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
  } from "react-share";


export default function NewsPostPage() {

const dispatch = useDispatch();
const navigate = useNavigate();
const Post = useSelector((state)=> state.post)

const shareUrl = 'https://timesports.ng/NewsPostsPage';

//   console.log(post)

 return (
    <div >
      <div>
        <Header />
       
        <div class='w-[90%] lg:w-[70%] mx-auto py-0 lg:py-8 ' >
          <div class='py-8 '>
            <div class='flex flex-col lg:flex-row lg:w-[100%] gap-4'>
              
              <div class='flex flex-col lg:w-[70%]'>
                    <img src={Post[0].image} />
              <div class='mx-[15px]'>
                <div class='text-[25px] lg:text-[35px] text-bold mt-[25px] text-left leading-[29px] lg:leading-[39px]' >
                    {Post[0].title}  
                </div>
                <div class=' whitespace-pre-line  text-[15px] lg:text-[16px] my-[15px] text-left leading-[19px] lg:leading-[21px] ' >    
                  { JSON.parse(Post[0].content) }        
                </div>
              </div>
                   
                    <div class='flex flex-row mt-[10px]'>
                    <FacebookShareButton
                        url={shareUrl}
                        >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                       
                        <div class='mx-[5px] '>                     
                            <TwitterIcon size={32} round={true} />
                        </div>
                        <div class='mx-[5px] '>                     
                            <WhatsappIcon size={32} round={true} />
                        </div>
                    </div>
                    
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
  )
}
