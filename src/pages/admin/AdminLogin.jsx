import {React, useState} from 'react'
import axios from 'axios'
import Header from '../../components/admn/AdminHeader'
import { Link, useNavigate, Form } from "react-router-dom";
import { addUser, setData } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import Bottom from '../../components/Bottom';
import Footer from '../../components/Footer';



export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
   
  
        axios.post("http://localhost:4000/api/login", {

        email: email,
        password: password,
        })
        .then(response => {
          const user = response.data
          console.log(response.data);     
          if(user.success===true){  
            //dispatch(setAccessToken(response.data.access));
            const uniqueKey = `user_${response.data.user_id}`;
            sessionStorage.setItem("userKey", uniqueKey);
            dispatch(addUser(response.data))
           navigate('/admindashboard')
            } else{
                        
            }})   
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
                          value={email}  
                          onChange={(e) => setEmail(e.target.value)} 
                          placeholder='Enter your email Id' 
                          class="form-input px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[60px] rounded-none" />
                </div>     

                <div class='flex flex-col w-[95%] mx-auto'>
                  <input 
                          type="password" 
                          required 
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                          placeholder='Enter your password' 
                          class="form-input px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[60px] rounded-none" />
                </div>               
               

                

                <button class='bg-red text-white  w-[95%] mx-auto h-[50px]' onClick={handleSubmit}>
                  SignIn
                </button>
                    
                  
                 
               
                  
              </div>
          
        </div>
        <Bottom />
        <Footer />
    </div>
  )
}
