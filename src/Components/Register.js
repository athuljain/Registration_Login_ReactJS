import React, {  useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { myContext } from './context';


const Register = () => {
 const data = useContext(myContext)
const {formData,setFormData} = data
 
  const [regSuccess, setRegSuccess] = useState(false);
  

  const UsernameChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
  };

  const EmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const PasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    
      setRegSuccess(true);
   
      console.log(formData);
    }

  

  return (
    <div className='Registration'>
        
      <h2>Register</h2>
      <form className='RegForm' onSubmit={Submit}>
        <div>
          <label className='RegUsername'>Username:</label><br />
          <input type="text" className='InputUsername' value={formData.username} onChange={UsernameChange} />
        </div>
        <div>
          <label className='RegEmail'>Email:</label> <br />
          <input type="email" className='InputEmail' value={formData.email} onChange={EmailChange} />
        </div>
        <div>
          <label className='RegPassword' >Password:</label> <br />
          <input type="password" className='InputPassword' value={formData.password} onChange={PasswordChange} />
        </div>
        <button className='RegButton' type="submit">Register</button>
      </form>
      
      {regSuccess && <p>Registration Successful! <Link to="/login">Login</Link> </p>}
      
    </div>
  );
};

export default Register;
