import {React, useState} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { Link, useNavigate, Form } from "react-router-dom";
import HeaderLogo from '../components/HeaderLogo';



export default function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
   
  
        axios.post("http://localhost:8000/api/login", {
            
        username: username,
        password: password,

      
        })
        .then((res) => {
           console.log(res.data);
          
          if(res.data.success===true){  
            navigate('/AdminPage')
            } else{
                        
            } 
      
        })
        
      
        .catch(error => console.log(error))    
            
     
  }

  return (
    <div>
        <HeaderLogo />
        <Header />
        <div>
                 
              <div class='flex flex-col w-[95%] lg:w-[50%] mx-auto border-2 border-style-solid border-gray4 py-[50px] mt-[100px] '>           
                <div class='flex flex-col w-[95%] mx-auto'>
                  <input 
                          type="text" 
                          required 
                          value={username} 
                          name="username" 
                          onChange={(e) => setUserName(e.target.value)} 
                          placeholder='Enter your username' 
                          class="form-input px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[60px] rounded-none" />
                </div>     

                <div class='flex flex-col w-[95%] mx-auto'>
                  <input 
                          type="password" 
                          required 
                          value={password} 
                          name="password" 
                          onChange={(e) => setPassword(e.target.value)} 
                          placeholder='Enter your password' 
                          class="form-input px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[60px] rounded-none" />
                </div>               
               

                

                <button class='bg-red text-white  w-[95%] mx-auto h-[50px]' onClick={handleSubmit}>
                  SignIn
                </button>
                    
                  
                 
               
                  
              </div>
          
        </div>
    </div>
  )
}
