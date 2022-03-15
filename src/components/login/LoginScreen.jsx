import { useNavigate } from "react-router-dom"
import './login.css'




export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {

    navigate('/', {replace: true});

  }



  return (
    <div className="login-screen">
    <h1>Heroes</h1>


    <button className="btn btn-login" onClick={handleLogin}>
        Login
    </button>
    
    </div>
  )
}
