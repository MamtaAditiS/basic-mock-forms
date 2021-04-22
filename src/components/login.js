import React, { useState, useEffect } from 'react' 
import Loader from 'react-spinner-loader';
import { toast } from 'react-toastify';
import { validateLogin } from '../validations/login';

function LoginForm (props){
    const [info, setInfo] = useState({})
    const [buttonLoading, setLoading] = useState(false)
    const [userData, saveUserData] = useState([])

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('userdata'))
        if( data && (data.length > 0)){
            saveUserData(data)
        }
        else {
            toast.error('Please register yourself before login.')
        }

    }, [])

    const submit = () => {
        setLoading(true)
        let result = validateLogin(info)
        if(Object.keys(result).length > 0 ){
            if( result['email'] && result['email'].length > 0 ){
                toast.error(result['email'][0]);
            }
            if( result['password'] && result['password'].length > 0 ){
                toast.error(result['password'][0]);
            } 
            setLoading(false)
        }
        else {
            let response = matchData(info)
            setLoading(false)
            if( response ){
                toast.success('Logged in successfully!')
                setTimeout(() => {
                    props.history.push('/list')
                }, 1000);
            }
            else{
                toast.error(`User doesn't exist`);
            }
            
        }
    }


    const matchData = (data) => {
        let filtered = userData.filter(item => (item.email === data.email)) || []
        if (filtered.length > 0 ){
            return true
        }
        else {
            return false
        }
    }


    return(
        <div>
            <form>
                <div className="container">
                    <input onChange={(e) => setInfo({...info, 'email' : e.target.value })} 
                        value={info.email || ''} type="text" placeholder="Enter Email" name="uname" required/>

                    <input onChange={(e) => setInfo({...info, 'password' : e.target.value })} 
                        value={info.password || ''} type="password" placeholder="Enter Password" name="psw" required/>

                    <button type="button" onClick={submit}>
                        {buttonLoading ?  <Loader type="ThreeDots" color="#FFFFFF" height={20} width={30}/> : 'Login'}
                    </button>
                </div>
            </form>
        </div>
       
    )
}

export default LoginForm