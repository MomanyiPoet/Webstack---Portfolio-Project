import React, {useState} from 'react';

function Inspirations() {
	const [active, setActive] = useState("nav__menu");
	const [icon, setIcon] = useState("nav__toggler");
	const navToggle = () => {
		if (active === "nav__menu") {
		  setActive("nav__menu nav__active");
		} else setActive("nav__menu");
	
		// Icon Toggler
		if (icon === "nav__toggler") {
		  setIcon("nav__toggler toggle");
		} else setIcon("nav__toggler");
	  };
	return(
		<div className="is-preload" id="body4">
                <div id="page-wrapper">

                    {/* HEADER */}
					<header>
						<nav className="navbar">

							<ul className={active}>
								<li><a href="/">Home</a></li>
								<li><a href="quotes">Quotes</a></li>
								<li><a href="books">Book Reviews</a></li>
								<li><a href="inspirations">Inspirations</a></li>
								<li><a href="">Blog</a></li>
								<li><a href="#contact-us">Contact Us</a></li>
							</ul>

							<div onClick={navToggle} className={icon}>
								<div className="line1"></div>
								<div className="line2"></div>
								<div className="line3"></div>
							</div>
							
						</nav>
					</header>

                    {/* BANNER */}
                    <section id="banner" className="banner4">
						<div className="inner">
							<h2>Poetic Inspirations</h2>
							<p>
								We strive to ignite your inner creativity and imagination. 
								This is a space where you can find uplifting and thought-provoking 
								content that will inspire you to see the world in a different 
								light and encourage you to pursue your passions.</p>
						</div>
					</section>

                    {/* WRAPPER */}
                    <section id="wrapper">

						{/* ONE */}
							<section id="one" className="wrapper spotlight style1">
								<div className="inner">
									<a href="" className="image"><img src="../../assets/images/inspire/inspire6.png" alt="" /></a>
									<div className="content">
										<h2 className="major">Martin Luther King Jr.</h2>
										<p>
											Design Your Life's Blueprint - Keep Moving
                                        </p>
										<audio controls className="ctrl1">
											<source src="../../assets/audio/luther.mp3" type="audio/mpeg" />
										</audio>
									</div>
								</div>
							</section>

					</section>

                    {/* FOOTER */}
                    <section id="footer" className="footer4">
						<div className="inner" id="contact-us">
							<ul className="contact">
								<li className="icon solid fa-home">
									Nairobi, Kenya
								</li>
								<li className="icon solid fa-phone">(+254) 700 013 897</li>
								<li className="icon solid fa-envelope">momanyiturner@gmail.com</li>
								<li className="icon brands fa-github"><a href="https://github.com/MomanyiPoet">Momanyi Poet</a></li>
							</ul>
							<ul className="copyright">
								<li>&copy; Poetic Inspirations. All rights reserved.</li>
							</ul>
						</div>
					</section>

                </div>
            </div>
	);
}

export default Inspirations;
