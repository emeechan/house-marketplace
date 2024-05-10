import { useLocation, useNavigate } from "react-router-dom"
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import {db} from '../firebase.config'
import { toast } from "react-toastify"
import googleIcon from '../assets/svg/googleIcon.svg'

function OAuth() {
    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider  = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            //gets the user from the google sign in
            const user = result.user

            //checks for user
            //passes in the user id
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            //if user doesnt exist, create user
            if(!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    //uses the timestamp on the server
                    timestamp: serverTimestamp()
                })
            }
            navigate('/')
        } catch (error) {
            toast.error('Could not authorise with Google')
        }
    }

  return (
    <div className="socialLogin">
        {/* if in the sign up page it says sign up, else it says sign in */}
      <p> Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with </p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className='socialIconImg' src={googleIcon} alt="google" />
      </button>
    </div>
  )
}

export default OAuth
