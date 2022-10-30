import { useState } from "react"
import ContactFormWrapper from "./ContactFormWrapper.css"

const ContactForm = () => {

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: ''
  })

  const handleForm = (e:any) => {
    setData(prev => ({...prev, [e.target.name]:e.target.value}))  
  }

  const showData = (e:any) => {
    e.preventDefault()
    let formData = data
    console.log(formData);
  }

  return (
    <ContactFormWrapper action="" className="form">
      <input type="text" className="form__input" placeholder="Your first name" name="firstName" onChange={handleForm} required/>
      <input type="text" className="form__input" placeholder="Your last name" name="lastName" onChange={handleForm} required/>
      <input type="email" className="form__input" placeholder="Your email" name="email" onChange={handleForm} required/>
      <textarea placeholder="Your subject" className="form__textarea" name="subject" cols={30} rows={10} onChange={handleForm} required></textarea>
      <input type="submit" className="form__input--submit" value="Submit" onClick={showData}/>
    </ContactFormWrapper>
  )
}

export default ContactForm