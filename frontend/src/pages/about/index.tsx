import { useNavigate } from "react-router-dom"
import "./aboutStyles.css"

const About = () => {
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
                    <a className="active" href="/dashdarkX/about">
                        About Us
                    </a>
                    <a href="#">

                        Our Services
                    </a>
                    <a href="/dashdarkX/contact">
                        Contact us
                    </a>
                </div>

                <div className="buttons">
                    {!localStorage.getItem("authToken") ? <a className="login" href="/dashdarkX/authentication/login">Log in</a> : <div className="login" onClick={handleClick}>LogOut</div>

                    }
                    <a className="open-account" href="/dashdarkX/authentication/sign-up">Open Account</a>
                </div>
            </div>
            <div className="bg-cover bg-center" style={{"backgroundImage": "url('./img/andy-kelly-0E_vhMVqL9g-unsplash.jpg')"}}>
                <div className="text">
                    <h1>
                        About

                    </h1>
                    <p>

                        Empowering a global community of investors.
                    </p>
                </div>
                <div className="image">
                    {/* <!-- <img alt="" height="400" src="img/Hero-Image.png" width="400"/> --> */}
                </div>
            </div>



            <div className="container my-5">
                <div className="box vision">
                    <h2>Our Vision</h2>
                    <p>  RobotTrik has created a multi-asset investment platform that is built on social collaboration and investor education: a community where users can connect, share, and learn.</p>
                </div>
                <div className="box mission">
                    <h2>Our Mission</h2>
                    <p>Opening the global markets so that everyone can trade and invest in a simple and transparent way.</p>
                </div>
                <div className="box values">
                    <h2>Our Values</h2>
                    <p>Our values are reflected in our product offering and user experience, as well as being embedded in our internal culture and employee experience.</p>
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
                                    <span>support@RobotTrik</span>
                                    <p>Email us</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="whatsapp">
                                    <img src="/img/image-removebg-preview-29-1-1.png" alt="" width="40px" />
                                    <span>hr@RobotTrik</span>
                                    <p>Email us</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="whatsapp">
                                    <img src="/img/image-removebg-preview-29-1-1.png" alt="" width="40px" />
                                    <span>career@RobotTrik</span>
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


        </>
    )
}

export default About