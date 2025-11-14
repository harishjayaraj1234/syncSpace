import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {toast} from 'react-toastify'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'
import { User } from 'lucide-react'

const SignInWithGoogle = () => {

    const dispatch = useDispatch()

     function googleLogin(){
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async(result)=>{
            console.log(result)
            if(result.user){
                toast.success("user loggedIn successfully...")
                window.location.href = "/home"
                dispatch(setUser({
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL,
                    uid: result.user.uid
                }))
            }

        })





            
            
                

 }

                     
    
  return (
    <div>
    <p className='mt-4 align-center text-[#b2b2b2] font-[12px]'>--- or continue with ---</p>
    <div onClick={googleLogin} className="flex justify-center cursor-pointer">
        <img src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" className="cursor-pointer w-[60%]"/>

    </div>
    </div>
  )
}

export default SignInWithGoogle