import './Register.module.scss'
import Modal from 'react-modal'
import axios from 'axios'
import { useState } from 'react'
const modalStyles = {
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
function RegisterModal({isOpen, onClose}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const handleSubmit =  async (e) => {
        e.preventDefault();
        const user = {
            username: username,
            email: email,
            password: password
        }
        try{
            const response = await axios.post('https://ngoc-dep-trai-qua.onrender.com/api/auth/register', user)
            window.location.href = ('/')

        } catch (error){
            setErr(error.response.data)
        }
        
        

    }
    
    return (
        <Modal isOpen = {isOpen} onRequestClose={onClose} style={modalStyles}>
            <form onSubmit={handleSubmit}>
                <label htmlFor = "username" style={{marginRight: '20px'}}>Tên tài khoản</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder='Nhập tên tài khoản...' 
                    required
                    onChange={(e) => {setUsername(e.target.value)}}
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
                <label htmlFor="email"  style={{marginRight: '20px'}}>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder='Nhập email...' 
                    required
                    onChange={(e) => {setEmail(e.target.value)}}

                /><br/>
                <div style={{color: 'red'}}>{err}</div>
                <input type="submit" value="Đăng ký" className="btn btn--primary" style={{marginTop:'30px'}}/>
            </form>
        </Modal>
    )
}

export default RegisterModal;