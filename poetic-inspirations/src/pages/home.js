import React, {useState} from 'react';

function Home() {
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
		<div className="is-preload" id="body1">
                <div id="page-wrapper">

					<header>
						<nav className="navbar">

							<ul className={active}>
								<li><a href="/">Home</a></li>
								<li><a href="quotes">Quotes</a></li>
								<li><a href="books">Book Reviews</a></li>
								<li><a href="inspirations">Inspirations</a></li>
								<li><a href="">Blog</a></li>
								<li><a href="#about-us">About Us</a></li>
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
                    <section id="banner">
						<div className="inner">
							<div className="logo"><img className="icon" src="../../assets/images/poet_logo.png" alt="" /></div>
							<h2>Poetic Inspirations</h2>
							<h3>WELCOME TO OUR WORLD.</h3>
							<p>We invite you to immerse yourself in our world of lyrical beauty and be inspired by <br />The magic of words.</p>
						</div>
					</section>

                    {/* Wrapper */}
                    <section id="wrapper">

						{/* Four */}
							<section id="four" className="wrapper alt style1">
								<div className="inner">
									<h2 className="major" id="mjr">A Place to Explore, Connect, and Create</h2>
									<p id ="mjr">
										<b id="mjr">
											The power of language, the beauty of verse, and the magic of the written word.
											Whether you're an aspiring writer, a seasoned poet, 
											or simply someone who loves to read and appreciate the written word, 
											we have something for you. <br />Our website features a diverse range of categories, 
											each designed to inspire, inform, and delight:
										</b>
									</p>

									<section className="features">
										<article>
											<a href="quotes" className="image"><img src="../../assets/images/quotes/quote2.png" alt="" /></a>
											<h3 className="major">Quotes</h3>
											<a href="quotes" className="special">Read More</a>
										</article>

										<article>
											<a href="books" className="image"><img src="../../assets/images/books/book4.png" alt="" /></a>
											<h3 className="major">Book Reviews</h3>
											<a href="books" className="special">Read More</a>
										</article>

										<article>
											<a href="inspirations" className="image"><img src="../../assets/images/inspire/inspire4.png" alt="" /></a>
											<h3 className="major">Inspirations</h3>
											<a href="inspirations" className="special">Read More</a>
										</article>
									</section>
								</div>
							</section>

					</section>

                    {/* Footer */}
                    <section id="footer">
						<div className="inner">

							<h2 className="major" id="about-us">About Us</h2>
							<blockquote>
								Welcome to our poetic website, where we seek to inspire, evoke, 
								and transport our readers through the power of words. At our core, 
								we believe that poetry has the ability to connect us to ourselves, 
								to each other, and to the world around us.
								Our mission is to create a space where poetry can flourish, where 
								the beauty of language can be celebrated, and where the human experience 
								can be explored through the lens of verse. 
								<br /><br /> We believe that poetry is not just a form of self-expression, 
								but also a tool for healing, transformation, and social change.
								<br />Poetry should be accessible to everyone, regardless of their background 
								or experience. That's why we strive to make our website a welcoming and 
								inclusive space, where readers can discover new poets, explore different 
								styles and themes, and connect with a global community of poetry enthusiasts.
								<br /><br />So whether you are a seasoned poet or a newcomer to the world of verse, 
								we invite you to join us on this journey of discovery and self-expression. 
								Together, we can explore the beauty of language, celebrate the power of poetry, 
								and inspire a more compassionate and connected world.
							</blockquote>

							<h2 className="major" id="contact-us">Get in touch</h2>
							<form method="post" action="#">
								<div className="fields">
									<div className="field">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div className="field">
										<label for="email">Email</label>
										<input type="email" name="email" id="email" />
									</div>
									<div className="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="4"></textarea>
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
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

export default Home;