import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sing-up.component'
import './sign-in-sign-up.styles.scss'
import '../../components/sign-in/sign-in.component'

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )


}

export default SignInAndSignUp;