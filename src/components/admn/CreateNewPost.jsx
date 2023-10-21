import {React, useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate, Form } from "react-router-dom";
import AdminHeader from '../../components/admn/AdminHeader';


export default function CreateNewPost() {
  const [headline, setHeadline] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState('');
  const [url, setUrl] = useState(''); 

  const navigate = useNavigate();

  const handleImage = (e) => {
    setImage(e.target.files[0])
    console.log(e.target.files[0]) 
    
  }

  const handleContent = (e) => {
    setContent(e.target.value)
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
  formData.append('headline', headline);
  formData.append('content', content);


  axios.post("http://localhost:4000/api/createpost", {
    headline: headline,
    content: JSON.stringify(content),
    image: url,

    headers:{
        'Content-type':'application/json, multipart/form-data'
       
    },
    //config,

})
.then((res) => {
  console.log(res.data);
  setHeadline('')
  setContent('')
  setImage('')
 
 if(res.data.success===true){  
        navigate('/posts')                                             
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
        <div class='bg-white flex flex-col lg:w-[70%]  mx-auto border-2 border-style-solid border-gray4 py-[50px] mt-[100px] '>           
        <div class='flex flex-col w-[98%] lg:w-[70%] mx-auto'>
                      
                <label class='text-left text-[18px] font-semibold '>Headline</label>
                <input type='text'
                value={headline} 
                onChange={(e) => setHeadline(e.target.value)}
                class="form-input px-4 py-3  text-[20px] mb-[30px] text-left text-gray  h-[60px] rounded-none" />
            
            
            <label class='text-left text-[18px] font-semibold '>Content</label>
                <textarea type='textarea' 
                value={content} 
                onChange={(e) => setContent(e.target.value)}
                class=" px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[300px] rounded-none" />
                                                
            <input
                name='file'
                type="file"                 
                onChange={handleImage}
                style={{marginBottom:20}}
                
                /> <br/>
            <button class='bg-red text-white  w-[100%] mx-auto h-[50px]' onClick={handleSubmit}>
            Post
        </button>
            
            
            </div>
        </div>
    </div>
      
  )
}
