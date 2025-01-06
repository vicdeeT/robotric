import { useNavigate } from "react-router-dom"
import "./styleshome.css"

const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("authToken")
        navigate("/")
    }
    return (

        <>
            <header>
                <nav className="navbar">
                    <div className="container">
                        {/* <!-- Logo Section --> */}
                        <a href="#" className="navbar-brand">Robotrik</a>

                        {/* <!-- Navigation Links --> */}
                        <ul className="navbar-menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/dashdarkX/about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="/dashdarkX/contact">Contact</a></li>
                            <div className="navbar-buttons">
                                {!localStorage.getItem("authToken") ? <a className="login" href="/dashdarkX/authentication/login">Log in</a> : <div className="login" onClick={handleClick}>LogOut</div>

                                }
                                <a className="open-account" href="/dashdarkX/authentication/sign-up">Open Account</a>
                            </div>
                        </ul>

                        {/* <!-- Buttons inside Navbar --> */}


                        {/* <!-- Mobile Menu Button --> */}
                        <button className="navbar-toggle" id="menu-toggle">☰</button>
                    </div>
                </nav>
            </header>

            {/* <!-- Content Placeholder --> */}
            <div className="hero">
                <div className="text">
                    <h1>
                        Hey! I Am
                        <span>RobotTrik</span>
                    </h1>
                    <p>
                        It's time to take your trading experience up a notch!
                    </p>
                </div>
                <div className="image">
                    <img alt="Hero Image" src="https://robotrik.com/img/Hero-Image.png" />
                </div>
            </div>


            <div className="container-fluid care bg-white">
                <div className="container tools">
                    <div className="header">CARE FEATURES</div>
                    <div className="title">Provide Awesome Service <br /> With Our Tools</div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature">
                                <img alt="Trading Solution" src="https://robotrik.com/img/features/conversation-icon-1.png" />
                                <div className="feature-title">Trading Solution</div>
                                <div className="feature-description">Trading solutions for active day traders and new entrants.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <img alt="Cutting Edge Trading" src="https://robotrik.com/img/features/graphicon-1.png" />
                                <div className="feature-title">Cutting Edge Trading</div>
                                <div className="feature-description">Our aim is to help you gain confidence in online forex trading.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <img alt="Competitive Pricing" src="https://robotrik.com/img/features/rocket-icon-1.png" />
                                <div className="feature-title">Competitive Pricing</div>
                                <div className="feature-description">Competitive and low pricing for ordinary Traders.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid content">
                <div className="container">
                    <div className="row">
                        {/* <!-- Image Section --> */}
                        <div className="col-12 col-md-6 image-container">
                            <img alt="Robot images on mobile screens" src="https://robotrik.com/img/pexels-tima-miroshnichenko-7567523.jpg" className="img-fluid" />
                        </div>
                        {/* <!-- Text Section --> */}
                        <div className="col-12 col-md-6 text-container">
                            <h2>EXPERIENCE</h2>
                            <h1>First Trading Robot Which Have Best Features And Advantages Of Trading Robot Ever....</h1>
                            <p>
                                The main advantage of using a forex robot is that it can execute trades for you without any human intervention. This means no more waiting on the phone or in line at your broker’s office! You’ll have access to all sorts of different investing opportunities, including short selling stocks and bonds as well stock options – meaning there are basically zero risks involved with these types investments if they go south while being fully protected thanks again canceling out potential losses via stops orders etc… The best part? You don’t even need prior knowledge about how this stuff works.
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid mt5">
                <div className="container Platform">
                    <div className="text-content">
                        <h2>
                            WHY MT5?
                        </h2>
                        <h1>
                            All Trades Are Executed On Advanced Meta Trader 5 Platform
                        </h1>
                        <p>
                            MetaTrader 5 is an advanced, user-friendly platform that traders can use to manage all aspects of their financial portfolio. It includes analytics tools and indicators as well as market depth information for trading stocks, indices or forex currency pairs on various different markets around the world including US Stocks Portfolio Monitor which provides real time updates about your investments 24/5!
                        </p>
                    </div>
                    <div className="image-content">
                        <img alt="" src="https://robotrik.com/img/mobile/moxkup-2.png" />
                    </div>
                </div>
            </div>




            <div className="container-fluid">
                <div className="container countries">
                    <div className="row">
                        {/* <!-- Cards Section --> */}
                        <div className="col-md-6 col-12">
                            <div className="row">
                                {/* <!-- Row 1 --> */}
                                <div className="col-md-6 col-12">
                                    <div className="card">
                                        <h2>100+</h2>
                                        <h3>Countries</h3>
                                        <p>RobotTrik is providing its world-class services in more than 100+ countries</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="card">
                                        <h2>1.5M+</h2>
                                        <h3>Users</h3>
                                        <p>RobotTrik has been trading for more than 1.5M+ happy clients.</p>
                                    </div>
                                </div>
                                {/* <!-- Row 2 --> */}
                                <div className="col-md-6 col-12">
                                    <div className="card">
                                        <h2>10000+</h2>
                                        <h3>Leaders</h3>
                                        <p>RobotTrik has been trading for more than 1.5M+ happy clients.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="card">
                                        <i className="fas fa-brain" style={{ "fontSize": "50px", "color": "#00a651" }}></i>
                                        <h3>Platform</h3>
                                        <p>RobotTrik has been trading for more than 5.5M+ happy clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Image Section --> */}
                        <div className="col-md-6 col-12">
                            <div className="image-card">
                                <img alt="RobotTrik" src="https://robotrik.com/img/image-18.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>












            <div className="container-fluid care">
                <div className="container tools">
                    <div className="header"> INNOVATIVE TRADING PLATFORM</div>
                    <div className="title">How MT5 is the best?</div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature">
                                <i className="fas fa-chart-line"></i>
                                <div className="feature-title">Fast Trade Execution</div>
                                <div className="feature-description">Fast Trade Execution.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <i className="fas fa-star"></i>
                                <div className="feature-title">FEATURES</div>
                                <div className="feature-description">Advanced Trading Features.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <i className="fas fa-hand-holding-usd"></i>
                                <div className="feature-title">RELIABLE</div>
                                <div className="feature-description">Safe and Secure.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <i className="fas fa-shield-alt"></i>
                                <div className="feature-title"> TRUST</div>
                                <div className="feature-description">Worlds Most Trusted and Secured Trading Platform.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <i className="fas fa-award"></i>
                                <div className="feature-title"> BEST</div>
                                <div className="feature-description">Worlds Best innovative Terminal for Forex Trading.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <i className="fas fa-tasks"></i>
                                <div className="feature-title">MULTI TASK</div>
                                <div className="feature-description">Provides Multiple Forex Trading Instruments.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="hero">
                <div className="text">
                    <h1 style={{ "color": "#007bff" }}>
                        The most profitable
                        <span style={{ "color": "#28a745" }}>Trading Robot</span>
                    </h1>
                    <p>
                        is here to trade for you...

                    </p>
                    <p>
                        Start Robot Trading with</p>
                    <h1 style={{ "color": "#28a745" }}>
                        $25
                    </h1>

                </div>
                <div className="image">
                    <img alt="Hero Image" src="https://robotrik.com/img/Hero-Image.png" />
                </div>
            </div>

            <footer className="text-dark py-5" style={{ "backgroundColor": "#E0E4E8" }}>
                <div className="container">
                    <div className="row text-center text-md-left">
                        {/* <!-- Contact Section --> */}
                        <div className="col-md-12 px-4 mb-4">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                {/* <!-- Support Contact --> */}
                                <div className="d-flex align-items-center mb-3">
                                    <img src="https://robotrik.com/img/image-removebg-preview-29-1-1.png" alt="Support Icon" style={{ "width": "45px" }} />
                                    <div className="ms-2">
                                        <p className="mb-0">support@RobotTrik.com</p>
                                        <small>Email us</small>
                                    </div>
                                </div>
                                {/* <!-- HR Contact --> */}
                                <div className="d-flex align-items-center mb-3">
                                    <img src="https://robotrik.com/img/image-removebg-preview-29-1-1.png" alt="HR Icon" style={{ "width": "45px" }} />
                                    <div className="ms-2">
                                        <p className="mb-0">hr@RobotTrik.com</p>
                                        <small>Email us</small>
                                    </div>
                                </div>
                                {/* <!-- Career Contact --> */}
                                <div className="d-flex align-items-center mb-3">
                                    <img src="https://robotrik.com/img/image-removebg-preview-29-1-1.png" alt="Career Icon" style={{ "width": "45px" }} />
                                    <div className="ms-2">
                                        <p className="mb-0">career@RobotTrik.com</p>
                                        <small>Email us</small>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>

                        {/* <!-- About Section --> */}
                        <div className="col-md-3 mb-4">
                            <h5>About</h5>
                            <p className="small">RobotTrik is an AI-based Forex Trading Robot powered by advanced algorithms and multiple languages.</p>
                        </div>

                        {/* <!-- Services Section --> */}
                        <div className="col-md-2 mb-4">
                            <h5>Services</h5>
                            <ul className="list-unstyled small">
                                <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* <!-- Community Section --> */}
                        <div className="col-md-2  mb-4">
                            <h5>Community</h5>
                            <ul className="list-unstyled small">
                                <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Blog</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Forums</a></li>
                            </ul>
                        </div>

                        {/* <!-- Newsletter Section --> */}
                        <div className="col-md-5 col-12 mb-4">
                            <h5>Subscribe</h5>
                            <p className="small">Get the latest updates and news from RobotTrik.</p>
                            <form className="d-flex flex-wrap">
                                <input type="email" className="form-control me-2 mb-2" placeholder="Enter your email" />
                                <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
                            </form>
                            <div className="social-icons mt-3">
                                <a href="#" className="text-dark me-3"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-dark me-3"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-dark me-3"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-dark"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <p className="small mb-0">© 2024 — RobotTrik. All Rights Reserved.</p>
                    </div>
                </div>    </footer>
        </>

    )
}

export default Home