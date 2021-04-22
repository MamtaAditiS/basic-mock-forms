import React , {  useEffect, useState } from 'react' 
import Loader from 'react-spinner-loader';
import { toast } from 'react-toastify';

function UserList (props){
    const [ userData, setUserData] = useState([])
    const [ buttonLoading,setLoading ] = useState(false)
    
    useEffect(() => {
        let userdata = JSON.parse(localStorage.getItem('userdata'))
        setUserData(userdata)

    }, [])

    const deleteUser = (index) => {
        setLoading(true)
        userData.splice(index, 1)
        setUserData([...userData])
        localStorage.setItem('userdata', [...userData])
        setTimeout(() => {
            toast.success('User deleted.')
            setLoading(false)
        }, 1000);
    }

    return(
        <div>
            <div className="container">
                <h1>User List</h1>
                <table style={{ "width":'100% '}}>
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th></th>
                    </thead>
                    <tbody>

                        { userData.length > 0 ? 
                            userData.map((user, index) => {
                                return(<tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>
                                            <button className="del-button" onClick={() => deleteUser(index)}>
                                            { buttonLoading ?  <Loader type="ThreeDots" color="#FFFFFF" height={20} width={30}/> : 'Delete'}</button>
                                        </td>
                                    </tr>)
                            })
                        :  <tr className="text-center"><td colSpan={5}> No data available.</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
       
    )
}

export default UserList