import {React, useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../App.css'
import '../pages/AdminPost.css'
import Header from '../components/Header'
import { Link, useNavigate, Form } from "react-router-dom";
import HeaderLogo from '../components/HeaderLogo';


export default function AdminPost() {
  const [heading, setHeading] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState('');
  const [url, setUrl] = useState(''); 

  const navigate = useNavigate();

  const handleImage = (e) => {
    setImage(e.target.files[0])
    console.log(e.target.files[0]) 
    
  }

  
  useEffect(() => {
    if(url){
        uploadFields()
    }
},[url])

const config = {
  headers: {
      "Content-type": 'multipart/form-data'
  }
}

const uploadFields = () => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('upload_preset', 'ndolioig');
  formData.append('cloud_name', 'dlxwdx21t');
  formData.append('heading', heading);
  formData.append('story', story);


  fetch('http://localhost:4000/post', {
      method:'post',
      headers:{
          'Content-type':'application/json'
      },
      body: JSON.stringify({
          heading,
          story, 
          image:url
      })
  })
  .then(res=>res.json())
  .then(data=>{
      
      //console.log(response.data);
      console.log(data)
      if(data.success===true){   
          navigate('/Home')                                             
      } else{
                  
      } 

  })
  

  .catch(error => console.log(error))    

  
}

function uploadFile(e) {

  const data = new FormData()
  data.append('file', image)
  data.append('upload_preset', 'ndolioig')
  data.append('cloud_name', 'dlxwdx21t')

  fetch("https://api.cloudinary.com/v1_1/dlxwdx21t/image/upload",{
      method:"post",
      body: data
  })
  .then(res=>res.json())
  .then(data=>{
      setUrl(data.url)
      console.log(data)
  })

  .catch(error => console.log(error))    

}

  const handleSubmit = (event) => {
    event.preventDefault();
           
      if(image){
          uploadFile()
      }else{
          uploadFields()
      }
       
  }

  return (
    <div>
      <HeaderLogo />
        <Header />
        <div style={{backgroundColor:'#fff', paddingTop:50, paddingBottom:50}}>
          <div class='col fluid col-lg-5 ps-lg-5 mx-auto' style={{backgroundColor:'#fff',
                                            display:'flex',
                                            justifyContent:'left',
                                            textAlign:'left',
                                            alignItems:'center',
                                            paddingTop:30,
                                            paddingBottom:30,
                                            border:1,
                                            borderStyle:'solid',
                                            borderColor: '#ccc'      
                                          }}>         
              <div>
                
                  <label>
                        Heading: <br/>
                        <input type='text'
                        value={heading} 
                        onChange={(e) => setHeading(e.target.value)}
                        className='field' />
                    </label> <br/>
                    <label>
                        Story: <br/>
                        <textarea type='textarea' 
                        value={story} 
                        onChange={(e) => setStory(e.target.value)}
                        className='textArea' />
                    </label> <br/>                                       
                    <input
                        name='file'
                        type="file"                 
                        onChange={handleImage}
                        style={{marginBottom:20}}
                        
                      /> <br/>
                    <input type='submit'  value='send post' className='button' onClick={handleSubmit}/>
                    
                  
                  
              </div>
          </div>
        </div>
    </div>
  )
}
