
import { useNavigate } from "react-router-dom"
import "./styleContact.css"
const Contact = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("authToken")
        navigate("/")
    }
    return (
        <>

            <div className="navbar">
                <div className="logo">
                    <a href="/">
                        RobotTrik
                    </a>
                </div>
                <div className="menu">
                    <a href="/">
                        Home
                    </a>
                    <a href="/dashdarkX/about">
                        About Us
                    </a>
                    <a href="">

                        Our Services
                    </a>
                    <a className="active" href="/dashdarkX/contact">
                        Contact us
                    </a>
                </div>
                <div className="buttons">
                    {!localStorage.getItem("authToken") ? <a className="login" href="/dashdarkX/authentication/login">Log in</a> : <div className="login" onClick={handleClick}>LogOut</div>

                    }
                    <a className="open-account" href="/dashdarkX/authentication/sign-up">Open Account</a>
                </div>
            </div>

            <div className="container-fluid">
                <div className="contianer">
                    <div className="row">

                        <div className="col-md-12 justsay my-5">Don't be a Stranger
                            <br />   just say Hello.</div>


                        <div className="container Hello">
                            <div className="image-section">
                                <img alt="Cute robot illustration" height="400" src="https://storage.googleapis.com/a1aa/image/g4IQEXPLBx4GA13beVCUyTfni9KIHBm88M4xraO2iuQYgpmTA.jpg" width="400" />
                            </div>
                            <div className="form-section">
                                <input placeholder="Name" type="text" />
                                <input placeholder="Email" type="email" />
                                <input placeholder="Phone Number" type="text" />
                                <textarea placeholder="Message"></textarea>
                                <button>
                                    SEND
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            {/* <!-- footer --> */}
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">

                            </div>
                            <div className="col-md-3">
                                <div className="whatsapp">
                                    <img src="/img/image-removebg-preview-29-1-1.png" alt="" width="40px" />
                                    <span>support@RobotTrik.com</span>
                                    <p>Email us</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="whatsapp">
                                    <img src="/img/image-removebg-preview-29-1-1.png" alt="" width="40px" />
                                    <span>hr@RobotTrik.com</span>
                                    <p>Email us</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="whatsapp">
                                    <img src="/img/image-removebg-preview-29-1-1.png" alt="" width="40px" />
                                    <span>career@RobotTrik.com</span>
                                    <p>Email us</p>
                                </div>
                            </div>
                            {/* <!-- <div className="col-md-6"></div> --> */}
                        </div>
                        <hr />
                    </div>
                </div>


                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 about">

                                <h3>About</h3>
                                <p>RobotTrik is an AI based Forex Trading Robot with power of more than 6 powerful languages.</p>

                            </div>
                            <div className="col-md-2">
                                <div className="services">
                                    <h3>Services</h3>
                                    <a href="#">About Us</a><br />
                                    <a href="#">Contact us</a><br />
                                    <a href="#">Terms & Conditions</a><br />
                                    <a href="#">Privacy Policy</a>
                                </div>
                            </div>
                            <div className="col-md-2"> <div className="community">
                                <h3>Community</h3>
                                <a href="#" className="active">Home</a><br />
                                <a href="#">About Us</a><br />
                                <a href="#">Contact us</a>
                            </div></div>
                            <div className="col-md-4">
                                <div className="newsletter">
                                    <h3>Subscribe To Newsletter</h3>
                                    <p>Get latest update and News</p>
                                    <form>
                                        <input type="email" placeholder="Email" />
                                        <input type="submit" value="SEND" />
                                    </form>
                                    <div className="social-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="copyright">
                    © 2024 — RobotTrik. All Rights Reserved.
                </div>
            </footer>


        </>)
}

export default Contact