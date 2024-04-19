import * as React from 'react';
import SparkleSVG from '../SparkleSVG';
import "./ContactSection.css";
import emailjs from "@emailjs/browser";

interface Props { }

const ContactSection: React.FC<Props> = ({ }) => {
    return (
        <div className='flex flex-col items-start justify-center gap-14 pl-20' id="contact">
            <div className='flex flex-row items-center text-2xl gap-3 font-medium rounded-3xl border-2 border-dark-textPrimary px-8 py-2'>
                <SparkleSVG />
                <p>Contact</p>
            </div>
            <p className="ContactSection__Slogan gradient-text pb-2 leading-tight">
                Let&apos;s make something <br></br>awesome together!
            </p>
            <ContactForm />
        </div>
    );
};

export default ContactSection;

interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = ({ }) => {

    const SECRET_KEY = process.env.NEXT_PUBLIC_API_KEY;

    const [formData, setFormData] = React.useState({
        service_id: 'service_q7qz7n8',
        template_id: 'template_9tmyq5i',
        user_id: SECRET_KEY,
        template_params: {
            name: '',
            email: '',
            message: '',
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            template_params: {
                ...formData.template_params,
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate the message field
        if (!formData.template_params.message.match(/^(?!.*<script>)(?!.*<\/script>)(?!.*<iframe>)(?!.*<\/iframe>)(?!.*<embed>)(?!.*<\/embed>)(?!.*<object>)(?!.*<\/object>)(?!.*<applet>)(?!.*<\/applet>)(?!.*<style>)(?!.*<\/style>)(?!.*<link>)(?!.*<\/link>)(?!.*<meta>)(?!.*<\/meta>).*$/)) {
            alert('Please enter a valid message without any HTML tags.');
            return;
        }
        console.log(SECRET_KEY)

        emailjs
            .send(formData.service_id, formData.template_id, formData.template_params, { publicKey: SECRET_KEY })
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert('Your mail is sent!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Oops... ' + JSON.stringify(error));
            });
    };


    return (
        <div className="login-box text-dark-textPrimary">
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input type="text" id="name" name="name" required={true} pattern="^[a-zA-Z\s]+$" title="Name should only contain letters and spaces" onChange={handleChange} />
                    <label htmlFor="name">Your Name *</label>
                </div>
                <div className="user-box">
                    <input type="email" id="email" name="email" required={true} pattern="^[A-Za-z0-9._\%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" title="Please enter a valid email address" onChange={handleChange} />
                    <label htmlFor="email">Email Address *</label>
                </div>
                <div className="user-box">
                    <textarea name="message" id="message" required={true} onChange={handleChange} />
                    <label htmlFor="message">A Few Words *</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};