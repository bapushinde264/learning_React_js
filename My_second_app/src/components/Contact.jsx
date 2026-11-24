const Contact = () => {
    return (
        <section style={{ backgroundColor: "#f2f2f2", padding: "20px 0" }}>
            <div className="container">
                <h3 className="text-center mb-4">Contact Us</h3>

                <div className="row">
                    <div className="col-md-6">
                        <h4>Get In Touch</h4>
                        <p>Have any questions? Feel free to contact us.</p>

                        <p><b>Address:</b> Pune, Maharashtra</p>
                        <p><b>Email:</b> info@example.com</p>
                        <p><b>Phone:</b> +91 9876543210</p>
                    </div>

                    <div className="col-md-6">
                        <form>
                            <input type="text" className="form-control mb-3"
                                placeholder="Enter Your Name" />

                            <input type="email" className="form-control mb-3"
                                placeholder="Enter Your Email" />

                            <input type="text" className="form-control mb-3"
                                placeholder="Enter Subject" />

                            <textarea className="form-control mb-3"
                                rows="5" placeholder="Enter Your Message"></textarea>

                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;