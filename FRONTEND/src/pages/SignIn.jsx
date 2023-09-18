import {React, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../App.css'
import '../pages/SignUp.css'
import Header from '../components/Header'
import { Link, useNavigate, Form } from "react-router-dom";
import HeaderLogo from '../components/HeaderLogo';



export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
   
  
        axios.post("http://localhost:4000/signin", {
            
        email: email,
        password: password,

      
        })
        .then((res) => {
           console.log(res.data);
          
          if(res.data.success===true){  
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
        <div style={{backgroundColor:'#fff', paddingTop:150, paddingBottom:50, display:'flex', justifyContent:'center', alignItems:'center'}}>
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
                <p style={{textAlign:'center', fontWeight:600}}>Login to make a pot</p>
                <form>
                

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

               
                <input type='submit'  value='Login' className='button' onClick={handleSubmit}/>
                    
                  
                </form>  
               
                  
              </div>
          </div>
        </div>
    </div>
  )
}
