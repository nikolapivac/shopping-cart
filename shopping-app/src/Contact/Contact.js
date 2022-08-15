import React from "react";
import "../styles/Contact.css"
import Header from "../Header"
import Footer from "../Footer"

const Contact = () => {
    return (
        <>
            <Header />
            <div className="contact_container">
                <div className="map_container">
                    <h1>Find Us:</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22384.801519630553!2d9.130560333156149!3d45.467785623091565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c15d1ae0a733%3A0xd38dbc81477a4ac9!2sVia%20Alberto%20da%20Giussano%2C%202%2C%2020145%20Milano%20MI%2C%20Italija!5e0!3m2!1shr!2shr!4v1660558167733!5m2!1shr!2shr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="continfo_container">
                    <h3>Address: Via Alberto da Giussano 2</h3>
                    <h3>Number: 555-555-5555</h3>
                    <h3>Email: winery_experts@winery.com</h3>
                </div>
                <div className="social_container">
                    <a href="https://www.facebook.com"><i className="gg-facebook"></i></a>
                    <a href="https://www.instagram.com"><i className="gg-instagram"></i></a>
                    <a href="https://www.twitter.com"><i className="gg-twitter"></i></a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;