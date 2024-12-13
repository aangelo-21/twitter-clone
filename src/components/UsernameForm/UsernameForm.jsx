import './UsernameForm.css'

function UsernameForm () {

  return (
    <div class = "username-form">
      <label htmlFor="">Introduce un nombre de usuario:</label>
      <input type="text" placeholder="Introduce un nombre de usuario"/>
      <span class = "username-required">* Es un campo obligatorio</span>
      <span class = "username-used">* El nombre de usuario ya está en uso</span>
    </div>
  )

}

export default UsernameForm