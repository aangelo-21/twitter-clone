import EmailForm from "../../components/EmailForm/EmailForm"
import PasswordConfirmation from "../../components/PasswordConfirmation/PasswordConfirmation"
import PasswordForm from "../../components/PasswordForm/PasswordForm"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions"
import UsernameForm from "../../components/UsernameForm/UsernameForm"

function SignUp() {

  return (
    <div class="sign-up-container">
      <form action="/Home">
        <EmailForm />
        <UsernameForm />
        <PasswordForm />
        <PasswordConfirmation />
        <TermsAndConditions />
        <SubmitButton />
      </form>
    </div>
  )

}

export default SignUp