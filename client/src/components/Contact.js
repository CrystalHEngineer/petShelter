import React from 'react';

function Contact() {
    return (
        <div className="container">
            <div className="contactForm">

                <h1 className="contactHeader">Contact Us!</h1>
                <form class="" action="mailto:crystalhaylen@gmail.com" method="post">
                    <label for="name" className="formLabel">Name:</label>
                    <input className="formInput"></input>
                    <label for="email" className="formLabel">Email:</label>
                    <input className="formInput"></input>
                    <label for="message" className="formLabel">Your Message:</label><br />
                    <textarea name="yourMessage" className="formMessageInput" rows="12" cols="70"></textarea><br />
                    <button className="contactBtn" type="submit">Add Pet</button>
                </form>

            </div>
        

        </div>
    );
}

export default Contact;