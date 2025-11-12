import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {toast} from 'react-toastify'
import { auth } from './firebase'

const SignInWithGoogle = () => {
    function googleLogin(){
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async(result)=>{
            console.log(result)
            if(result.user){
                toast.success("user loggedIn successfully...")
                window.location.href = "/home"
            }

        })
    }
  return (
    <div>
    <p className='continue-p'>--- or continue with ---</p>
    <div onClick={googleLogin} style={{display:"flex", justifyContent:"center", cursor:"pointer"}}>
        <img src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" style={{cursor:"pointer"}} width={"30%"}/>

    </div>
    </div>
  )
}

export default SignInWithGoogle