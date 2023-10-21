import {React, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate, Form } from "react-router-dom";




export default function CreateNewUser() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`${firstName} ${lastName} Your Registration was successful `)
  
        axios.post("https://backend.timesports.ng/api/register", {
            
        username: username,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,
    
        })
        .then((res) => {                 
          console.log(res.data);           
          if(res.success===true){   
                navigate('/admindashboard')                                             
            } else{
                        
            }   
        })     
        .catch(error => console.log(error))    
            
     
  }

  return (
    <div>
        <div>
                 
              <div class='flex flex-col w-[95%] lg:w-[50%] mx-auto border-2 border-style-solid border-gray4 py-[50px] mt-[100px] '>           
                <div class='flex flex-col w-[95%] mx-auto'>
                  <input 
                          type="text" 
                          required 
                          value={username} 
                          name="username" 
                          onChange={(e) => setUsername(e.target.value)} 
                          placeholder='Enter your username' 
                          class="form-input px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[60px] rounded-none" />
                </div>      
                <div class='flex flex-col w-[95%] mx-auto'>
                  <input 
                          type="text" 
                          required 
                          value={email}  
                          onChange={(e) => setEmail(e.target.value)} 
                          placeholder='Enter your email' 
                          class="form-input px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[60px] rounded-none" />
                </div>  
                <div class='flex flex-col w-[95%] mx-auto'>
                  <input 
                          type="text" 
                          required 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          placeholder='Enter your phone number' 
                          class="form-input px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[60px] rounded-none" />
                </div>  
                <div class='flex flex-col w-[95%] mx-auto'>
                  <input 
                          type="text" 
                          required 
                          value={firstname} 
                          onChange={(e) => setFirstname(e.target.value)} 
                          placeholder='Enter your First Name' 
                          class="form-input px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[60px] rounded-none" />
                </div>           
                <div class='flex flex-col w-[95%] mx-auto'>
                  <input 
                          type="text" 
                          required 
                          value={lastname} 
                          onChange={(e) => setLastname(e.target.value)} 
                          placeholder='Enter your last Name' 
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
                <div class='flex flex-col w-[95%] mx-auto'>
                  <input 
                          type="password" 
                          required 
                          value={confirmPassword} 
                          onChange={(e) => setConfirmPassword(e.target.value)} 
                          placeholder='Confirm your password' 
                          class="form-input px-4 py-3 mb-[5px] text-[20px] text-left text-gray  h-[60px] rounded-none" />
                </div>  
                

                <button class='bg-red text-white  w-[95%] mx-auto h-[50px]' onClick={handleSubmit}>
                  SignUp
                </button>
                    
                  
                 
               
                  
              </div>
          
        </div>
    </div>
  )
}
