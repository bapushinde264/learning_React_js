const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#212529", color: "white", padding: "40px 0 15px" }}>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 mb-3">
                        <h4>My Website</h4>
                        <p>
                            Welcome to our website. We provide quality services
                            and the best user experience.
                        </p>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="#about" className="text-white text-decoration-none">About</a></li>
                            <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
                            <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h4>Contact Info</h4>
                        <p>📍 Pune, Maharashtra</p>
                        <p>📧 info@example.com</p>
                        <p>📞 +91 9876543210</p>
                    </div>

                </div>

                <hr />

                <div className="text-center">
                    <p className="mb-0">
                        © 2026 My Website. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;