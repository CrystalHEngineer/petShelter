import React from 'react';

function Contact() {
    return (
        <div className='contact'>
            <h1>Contact</h1>
            <form class="" action="mailto:crystalhaylen@gmail.com" method="post">
                <label for="name">Name:</label>
                <input type="text" name="yourName" value="" /><br />
                <label for="email">Email:</label>
                <input type="email" name="yourEmail" value="" /><br />
                <label for="message">Your Message:</label><br />
                <textarea name="yourMessage" rows="12" cols="70"></textarea><br />
                <input type="submit" name="" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;