import './PasswordConfirmation.css'

function PasswordConfirmation () {

  return (
    <div class = "password-confirmation-form">
      <label htmlFor="">Confirma la contraseña:</label>
      <input type="text" placeholder="Confirma la contraseña"/>
      <span class = "password-confirmation-required">* Es un campo obligatorio</span>
      <span class = "password-confirmation-dont-match">* Las contraseñas no coinciden</span>
    </div>
  )

}

export default PasswordConfirmation