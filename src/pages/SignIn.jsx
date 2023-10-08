import {React, useState} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { Link, useNavigate, Form } from "react-router-dom";
import HeaderLogo from '../components/HeaderLogo';
import { addUser } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
import {  setAccessToken,  setAdminAcessToken,  setData,  setIsLoggedIn,} from "../redux/userSlice";


export default function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
   
  
        axios.post("https://backend.timesports.ng/api/login", {

        username: username,
        password: password,
        })
        .then(response => {
          const user = response.data
          console.log(response.data);
          

         
          if(user.success===true){  
            //dispatch(setAccessToken(response.data.access));
            const uniqueKey = `user_${response.data.user_id}`;

            sessionStorage.setItem("userKey", uniqueKey);
            dispatch(setIsLoggedIn(true));
            dispatch(setData(response.data))
           dispatch(addUser(user))
           navigate('/AdminDashboard')

            } else{
                        
            } 
      
        })
        
      
        .catch(error => console.log(error))    
            
     
  }

  return (
    <div>
       
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
