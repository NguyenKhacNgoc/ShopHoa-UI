import { useState } from 'react'
import  './Login.module.scss'
import Modal from 'react-modal'
import axios from 'axios'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '50%',
        height: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2rem',
        textAlign: 'center',
        lineHeight: 2,
        paddingTop: '50px'
    } 
}
Modal.setAppElement('#root')
function LoginModal({isOpen, onClose}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = {
            email: email,
            password: password
        }
        try{
            const response = await axios.post('https://ngoc-dep-trai-qua.onrender.com/api/auth/login', user)
            localStorage.setItem('loggedInUser', JSON.stringify(response.data))
            console.log(response.data)
            window.location.href = "/"

        }catch(error){
            console.log(error)
            setErr(error.response.data)
            
            
        }
    }
    
    return (
        <Modal isOpen = {isOpen} onRequestClose={onClose} style={customStyles}>
            <form onSubmit={handleSubmit}>
                <label htmlFor = "email" style={{marginRight: '20px'}}>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder='Nhập email...'
                    required
                    onChange={(e) => {setEmail(e.target.value)}}
                /><br/>
                <label htmlFor="password" style={{marginRight: '20px'}}>Mật khẩu</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder='Nhập mật khẩu...' 
                    required
                    onChange={(e) => {setPassword(e.target.value)}}
                /><br/>
                <div style={{color: 'red'}}>{err}</div>
                

                <input type="submit" value="Đăng nhập" className="btn btn--primary" style={{marginTop: '30px'}}></input>
            </form>
        </Modal>
    )
}
export default LoginModal

