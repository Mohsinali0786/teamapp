import SigninForm from "../component/signin"
import Signin_Image from '../assets/loginimage.png'
import signup_screen_img from '../assets/image1.jpg'

export default function SigninScreen() {

    return (
        <>

            <div className="signin-screen-maindiv" >
                <img src={signup_screen_img} id='signuppage-img' />
                <div className='signinscreen-form'>
                    <img src={Signin_Image} className='signin-image' />
                    <h3>Login</h3>s
                    <SigninForm />
                <p>Not have an account <a>click Here</a> for SignUp</p>
                </div>
            </div>
        </>
    )
}

{/* <Grid container className="signupScreen-mainDiv">
    <div className='signupscreen-form'>
        <h3>Create an account</h3>
        <SignupForm />
    </div>
</Grid> */}