import style from '../../styles/user/contact.module.css';
import SectionLayout from '../SectionLayout';
import { useState } from 'react';
import { contactMessage } from '../../utils/requests/contactRequest';
import Spinner, { ErrorComponent } from '../../utils/Spinner';

const ContactSection = () => {

    const customStyles = {
        color: "black",
        backgroundColor: "#F6F5F5"
    };
    return (

        <SectionLayout
            isHr={false}
            style={customStyles}
            title='Contact us'
            content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!'>
            <div className={style.contactContainer}>
                <div className={style.form}>
                    <ContactForm/>
                </div>
                <div className={style.content}>
                    <h3>Contact Info</h3>
                    <div>
                        <label>Address:</label>
                        <address>34 Street Name, City Name Here, United States</address>
                        <label>Phone:</label><br/>
                        <a href="tel:+9999999999">+9999999999</a><br/>
                        <label>Email:</label><br/>
                        <a href="mailto:mail@rdev.com">mail@rdev.com</a>
                    </div>

                </div>
            </div>
        </SectionLayout>

    )
}


const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      const { loading: requestLoading, error: requestError } = await contactMessage({
        data: formData,
        setFormData,
      });
      setLoading(requestLoading);
      setError(requestError);
    };
  
    if (loading) return <Spinner />;
  
    if (error) return <ErrorComponent message={error} />;
  
    return (
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <div className={style.nameContainer}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          rows={10}
          name="message"
          placeholder="Write your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {error && <p className={style.errorMessage}>{error}</p>}
      </form>
    );
  };
  
export default ContactSection
