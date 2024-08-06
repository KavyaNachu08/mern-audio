import './SignUpPage.scss';
import SignUp from '../../components/SignForms/SignUp/SignUp';
import HeroText from '../../components/HeroText/HeroText';

function SignUpPage(){
    return(
        <div className='page'>
            <HeroText />
            <SignUp />
        </div>
    )
}

export default SignUpPage;