import './PasswordForm.css'

function PasswordForm () {

  return (
    <div class = "password-form">
      <label htmlFor="">Introduce una contraseña:</label>
      <input type="text" placeholder="Introduce una contraseña"/>
      <span class = "password-required">* Es un campo obligatorio</span>
    </div>
  )

}

export default PasswordForm