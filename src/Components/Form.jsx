import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

const [userName, setUserName] = useState("")
const [userEmail, setUserEmail] = useState("")
const [isErrorInfo, setIsErrorInfo] = useState(false);
const [showMessage, setshowMessage] = useState(false);

const isValidName = userName.length > 4;
function isValidEmail() {
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailFormat.test(userEmail);
}

  const sendContactInfo = (e) => {
    e.preventDefault();
    if (isValidName && isValidEmail()) {
      setshowMessage(true)
  } else {
    setIsErrorInfo(true)
  }
};

  const onNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (

    <>
      <form onSubmit={sendContactInfo} >
        <div>
        <input type="text" name="userName" placeholder="Full name" onChange={onNameChange}/>
        <input type="email" name="userEmail" placeholder="Email" onChange={onEmailChange}/>
        </div>
        <button type="submit">Send</button>
      </form>
  
      {isErrorInfo && <p>Por favor verifique su información nuevamente</p>}

      {showMessage &&(
      <p>Gracias {userName}, te conctactaremos cuanto antes via email</p>
      )}
</>
  
  );


}
export default Form;