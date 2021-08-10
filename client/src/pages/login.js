import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import  '../styles/login.css'
import Buzztalkk from '../images/Buzztalkk.jpeg'
import header from '../images/header.gif'

const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="header1">
        
     <div id ="card">
     <div id="card-content">
    
      <div id="card-title">
             
             
            
        
          <div>
            <img className="Buzztalkk" src={Buzztalkk} alt="Buzztalkk" style={{width: "70%",
    height: "20%", marginLeft: "50px", marginTop: "-30px", marginBottom: "10px"}} /></div>
     <div class="underline-title"></div>
     <form onSubmit={handleSubmit}> 
                
                
        <label for="user-email" style={{"padding-top":"13px"}}> Email </label>
                      <div>
                    <input type="email" id="user-email" className="form-content" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />
                </div>
  <div class="form-border"></div>
                
                
                <label for="user-password" style={{"padding-top":"22px"}}>Password
          </label>

                    
                        <div>
                        <input type={ typePass ? "text" : "password" } 
                        className="form-content" id="user-password"
                        onChange={handleChangeInput} value={password} name="password" />

                        <small onClick={() => setTypePass(!typePass)}>
                            
                        </small>
                   
                        </div>
                        <div class="form-border"></div>
                
                <button  id="submit-btn" type="submit" 
                disabled={email && password ? false : true}>
                    Login
                </button>

               <div>
               
                <p  id="forgot-pass">
                    You don't have an account? <Link to="/register" style={{color: "crimson"}}>Register Now</Link>
                </p>
                </div>
               
            </form>
            </div>
                </div>
         
         </div>
         </div>
        
     
       
    )
}

export default Login
