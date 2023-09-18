import {React, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../App.css'
import '../pages/SignUp.css'
import Header from '../components/Header'
import { Link, useNavigate, Form } from "react-router-dom";
import HeaderLogo from '../components/HeaderLogo';



export default function SignUp() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`${firstName} ${lastName} Your Registration was successful `)
  
        axios.post("http://localhost:4000/signup", "https://api.timesports.ng", {
            
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password,

      
        })
        .then((res) => {
          console.log(res);
          navigate("/AdminPost");          
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
      <HeaderLogo />
        <Header />
        <div style={{backgroundColor:'#fff', paddingTop:50, paddingBottom:50, display:'flex', justifyContent:'center'}}>
          <div class='col fluid col-lg-5 ps-lg-0 mx-auto' style={{backgroundColor:'#fff',
                                            display:'flex',
                                            justifyContent:'center',
                                            textAlign:'left',
                                            alignItems:'center',
                                            paddingTop:30,
                                            paddingBottom:30,
                                            border:1,
                                            borderStyle:'solid',
                                            borderColor: '#ccc'      
                                          }}>         
              <div>
                <form>
                <label>
                    <input type='text'
                    value={firstName} 
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                    className='field' />
                </label> <br/>

                <label>
                    <input type='text'
                    value={lastName} 
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                    className='field' />
                </label> <br/>

                <label>
                    <input type='text'
                    value={phone} 
                    placeholder='Phone No.'
                    onChange={(e) => setPhone(e.target.value)}
                    className='field' />
                </label> <br/>

                <label>
                    <input type='text'
                    value={email} 
                    placeholder='Email Id'
                    onChange={(e) => setEmail(e.target.value)}
                    className='field' />
                </label> <br/>

                <label>
                    <input type='text'
                    value={password} 
                    placeholder='Password.'
                    onChange={(e) => setPassword(e.target.value)}
                    className='field' />
                </label> <br/>

                <label>
                    <input type='text'
                    value={confirmPassword} 
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='field' />
                </label> <br/>

                <input type='submit'  value='Sign up' className='button' onClick={handleSubmit}/>
                    
                  
                </form>  
               
                  
              </div>
          </div>
        </div>
    </div>
  )
}
