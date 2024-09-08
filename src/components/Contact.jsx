import { useState } from "react";

export default function Contact() {
    const [formInputs,setFormInput] = useState({
      name:"",
      email:"",
      age:"",
    });
   
 

    const handleChange = (e)=>{
      const{name,value}=e.target;
     setFormInput({...formInputs,
      [name]:value,
    })
    }
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(formInputs);
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>User Name </label>
        <input type="text" value={formInputs.name} onChange={handleChange} name="name" />
  
        <label>Email </label>
        <input type="text" value={formInputs.email} onChange={handleChange} name="email" />
        <label>Age </label>
        <input type="text" value={formInputs.age} onChange={handleChange} name="age"/>
  
        <hr />
        <button type='submit'>Submit</button>

      
        
      </form>
    )
  }