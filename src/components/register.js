import React, { useState, useEffect  } from 'react' 
import {  validate } from '../validations/signup';
import Loader from 'react-spinner-loader';
import { toast } from 'react-toastify';

function RegisterForm (props){
    const [info, setInfo] = useState({})
    const [buttonLoading, setLoading] = useState(false)
    const [ userData, saveUserArr] = useState([])
    

    const submit = () => {
        setLoading(true)
        let result = validate(info)
        if(Object.keys(result).length > 0 ){
            if( result['email'] && result['email'].length > 0 ){
                toast.error(result['email'][0]);
            }
            if( result['password'] && result['password'].length > 0 ){
                toast.error(result['password'][0]);
            } 
            if( result['name'] && result['name'].length > 0 ){
                toast.error(result['name'][0]);
            } 
            if( result['mobile'] && result['mobile'].length > 0 ){
                toast.error(result['mobile'][0]);
            } 
            setLoading(false)
        }
        else {
            let userArr = JSON.parse(localStorage.getItem('userdata'))
            if((userArr !== null) && (userArr.length > 0)){
                let updatedArr = (userArr !== null) && (userArr.length > 0) ? [...userArr] : []
                updatedArr.push(info)
                localStorage.setItem('userdata', JSON.stringify(updatedArr))
                setLoading(false)
                toast.success(' Registered successfully!')
                props.history.push('/login')
            }
            else {
                let updatedArr = []
                updatedArr.push(info)
                localStorage.setItem('userdata', JSON.stringify(updatedArr))
                setLoading(false)
                toast.success(' Registered successfully!')
                props.history.push('/login')
            }
            
        }
    }

    return(
        <div>
            <form >
                <div className="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    
                    <input value={info.name || ''} onChange={(e) => setInfo({...info, 'name' : e.target.value }) } 
                        type="text" placeholder="Enter Name" name="psw" id="psw" required/>

                    <input value={info.mobile || ''} onChange={(e) => setInfo({...info, 'mobile' : e.target.value }) } 
                        type="number" placeholder="Enter Mobile" name="psw" id="psw" required/>

                    <input value={info.email || ''} onChange={(e) => setInfo({...info, 'email' : e.target.value }) } 
                        type="text" placeholder="Enter Email" name="email" id="email" required/>

                    <input value={info.password || ''} onChange={(e) => setInfo({...info, 'password' : e.target.value }) } 
                        type="password" placeholder="Enter Password" name="psw" id="psw" required/>
                    
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="button" className="registerbtn" onClick={submit}>
                        {buttonLoading ? <Loader type="ThreeDots" color="#000" height={20} width={30}/> : 'Register'}</button>
                </div>

                <div className="container signin">
                    <p>Already have an account? <a href="/login">Sign in</a>.</p>
                </div>
                </form>
           
        </div>
       
    )
}

export default RegisterForm