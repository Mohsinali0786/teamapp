import SignupForm from "../../component/signup";
import signup_screen_img from '../../assets/image1.jpg'
import { Grid,Box } from '@mui/material';
export default function SignupScreen() {
    return (
        // <Box className="signupScreen-mainDiv">
            <Grid container className="signupScreen-mainDiv">
                    <img src={signup_screen_img} id='signuppage-img' />
                <div className='signupscreen-form'>
                    <h3>Create an account</h3>
                    <SignupForm />
                </div>
            </Grid>
        // </Box>
    )
}