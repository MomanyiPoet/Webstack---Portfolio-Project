import React, {useState} from 'react';

function Quotes() {
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
		<div className="is-preload" id="body2">
                <div id="page-wrapper">
                    {/* Header */}
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

                    {/* Banner */}
                    <section id="banner" className="banner2">
						<div className="inner">
							<h2>Poetic Quotes</h2>
							<p>Discover a rich collection of original and curated quotes from a variety of voices and perspectives.</p>
						</div>
					</section>

                    {/* Wrapper */}
                    <section id="wrapper">

						{/* ONE */}
							<section id="one" className="wrapper spotlight style1">
								<div className="inner">
									<a href="" className="image"><img src="../../assets/images/quotes/ben_stein.png" alt="" /></a>
									<div className="content">
										<h2 className="major">Ben Stein</h2>
										<p>"There is no sudden leap into the stratosphere...
                                            There is only advancing step by step, slowly and tortuously, up the pyramid towards your goals."<br />
                                            "The first step to getting the things you want out of life is this: Decide what you want."
                                        </p>
									</div>
								</div>
							</section>

						{/* TWO */}
							<section id="two" className="wrapper alt spotlight style2">
								<div className="inner">
									<a href="" className="image"><img src="../../assets/images/quotes/ralph.png" alt="" /></a>
									<div className="content">
										<h2 className="major">Ralph Waldo Emerson</h2>
										<p>"To be yourself in a world that is constantly trying to make you something else 
                                            is the greatest accomplishment."
                                        </p>
									</div>
								</div>
							</section>

						{/* THREE */}
							<section id="three" className="wrapper spotlight style3">
								<div className="inner">
									<a href="" className="image"><img src="../../assets/images/quotes/edmund.png" alt="" /></a>
									<div className="content">
										<h2 className="major">Edmund Burke</h2>
										<p>"The only thing necessary for the triumph of evil is for good men to do nothing."</p>
									</div>
								</div>
							</section>

							{/* TWO */}
							<section id="two" className="wrapper alt spotlight style2">
								<div className="inner">
									<a href="" className="image"><img src="../../assets/images/quotes/steve.png" alt="" /></a>
									<div className="content">
										<h2 className="major">Steve Jobs</h2>
										<p>
											"The only way to do great work is to love what you do. If you haven’t 
											found it yet, keep looking. Don’t settle. As with all matters of the heart, 
											you’ll know when you find it."
                                        </p>
									</div>
								</div>
							</section>

							{/* THREE */}
							<section id="three" className="wrapper spotlight style3">
								<div className="inner">
									<a href="" className="image"><img src="../../assets/images/quotes/winstone.png" alt="" /></a>
									<div className="content">
										<h2 className="major">Winston Churchill</h2>
										<p>
											"Success is not final, failure is not fatal: it is the courage to continue that counts."
										</p>
									</div>
								</div>
							</section>

					</section>

                    {/* FOOTER */}
                    <section id="footer" className="footer2">
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

export default Quotes;
