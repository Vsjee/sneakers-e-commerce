import { ContactForm } from "@/components"
import ContactWrapper from "./ContactWrapper.css"
import connect from '../../assets/connect.png'

const Contact = () => {
  return (
    <ContactWrapper>
      <figure>
        <img src={connect} alt="contact logo"/>
      </figure>
      <ContactForm />
    </ContactWrapper>
    )
}

export default Contact