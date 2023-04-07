import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    userName: '',
    userEmail:'',
});

  const handleSubmit = (e) => {
    e.preventDefault();
    // fijarse como arreglarlo para que funcione
    <p>Gracias {user.userName}, te contactaremos cuanto antes via mail</p>
  } 
  console.log(user);

  return (
    <div>
      <form>
        <input type="text" name="userName" placeholder="Full name" onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}/>
        <input type="email" name="userEmail" placeholder="Email" onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}/>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
};

export default Form;
