import './EmailForm.css'

function EmailForm () {

  return (
    <div class = "email-form">
      <label htmlFor="">Introduce un email:</label>
      <input type="text" placeholder="Introduce un email"/>
      <span class = "email-required">* Es un campo obligatorio</span>
      <span class = "email-invalid">* El email no es válido</span>
    </div>
  )

}

export default EmailForm