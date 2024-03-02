import React, { useState } from 'react'
import './loginsignup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faUser,faEnvelope,faLock, faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
// import {faemail} from 'react-icons/fa'
// import 
const Loginsignup = () => {
  const [action,setaction]=useState("Sign Up");
  // const [password,setpassword] = useState("");
  const [type,Settype]=useState('password');
  const [icon,Seticon]=useState(faEye);
  const handleToggle = () =>{
    if(type === 'password'){
            Seticon(faEyeSlash);

      Settype('text');
    }
    else{
      Seticon(faEye);
      Settype('password');

    }
  }

  
  
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      {action === "Login"? <div>1</div>:<div className="imput">
          <FontAwesomeIcon  className='icon' icon={faUser}></FontAwesomeIcon>
          <input type="text" placeholder='Name' />
        </div>}
        
        <div className="imput">
          <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
          <input type="Email" placeholder='Email'/>
        </div>
        <div className="imput">
          <FontAwesomeIcon className='icon' icon={faLock}></FontAwesomeIcon>
          <input type={type} placeholder='Enter password'/>
          <FontAwesomeIcon onClick={handleToggle} className='eye' icon={icon}></FontAwesomeIcon>
        </div>  

        {action === "Sign Up"? <div></div>:<div className="forgot-password">forgot password? <span>Click Here</span></div>
}
        <div className="submit-container">
          <div className={action === "Login"? "submit gray":"submit"} onClick={() =>{
            setaction("Sign Up")
          }}>Sign Up</div>
          <div className={action === "Sign Up"? "submit gray":"submit"} onClick={() =>{
            setaction("Login")}}>Login</div>

        </div>
      </div>
    
      
    </div>
  )
}

export default Loginsignup
