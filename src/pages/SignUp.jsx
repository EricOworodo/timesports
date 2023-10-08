import {React, useState} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { Link, useNavigate, Form } from "react-router-dom";
import HeaderLogo from '../components/HeaderLogo';



export default function SignUp() {

  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`${firstName} ${lastName} Your Registration was successful `)
  
        axios.post("http://localhost:4000/api/register", {
            
        username: username,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,

      
        })
        .then((res) => {
          console.log(res);
                   
          console.log(res.data);
          
          
          if(res.success===true){   
                navigate('/AdminPost')                                             
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
               

                

                <button class='bg-red text-white  w-[95%] mx-auto h-[50px]' onClick={handleSubmit}>
                  SignUp
                </button>
                    
                  
                 
               
                  
              </div>
          
        </div>
    </div>
  )
}
