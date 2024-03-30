import './App.css'
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google';


function App() {

  const googleHandler = () => {
    try {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/`).then(res => {
        console.log(res);
      }).catch(console.error)
    } catch (error) {
      console.error(error);
    }
  }

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      {/* <button onClick={googleHandler}>Signin with Google</button> */}
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </>
  )
}

export default App
