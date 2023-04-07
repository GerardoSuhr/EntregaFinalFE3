import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

const [userName, setUserName] = useState("")
const [userEmail, setUserEmail] = useState("")
const [isErrorName, setIsErrorName] = useState(false);
const [isErrorEmail, setisErrorEmail] = useState(false);
const [showCard, setShowCard] = useState(false);

const isValidName = userName.length > 4;
function isValidEmail() {
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailFormat.test(userEmail);
}



  const handleSubmit = (e) => {
    e.preventDefault();
    // fijarse como arreglarlo para que funcione

    if (isValidName && isValidEmail()) {
    <p>Gracias {userName}, te contactaremos cuanto antes via mail</p>
  } else if (isValidName) {
    <p>Por favor ingresa un email válido</p>
  } else {
    <p>Por favor ingresa un nombre de más de 5 caracteres</p>
  }
};

  const onNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" name="userName" placeholder="Full name" onChange={(e) => setUserName({...userName, [e.target.name]: e.target.value})}/>
        <input type="email" name="userEmail" placeholder="Email" onChange={(e) => setUserEmail({...userEmail, [e.target.name]: e.target.value})}/>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );


}
export default Form;



/*
  return (
    <div>
      <form>
        <input type="text" name="userName" placeholder="Full name" onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}/>
        <input type="email" name="userEmail" placeholder="Email" onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}/>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
  */