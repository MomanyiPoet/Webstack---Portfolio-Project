import React, {useState} from 'react';

function Books() {
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
		<div className="is-preload" id="body3">
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
                    <section id="banner" className="banner3">
						<div className="inner">
							<h2>Book Reviews</h2>
							<p>Come, explore and let us help you discover your next literary adventure.</p>
						</div>
					</section>

                    {/* WRAPPER */}
                    <section id="wrapper">

						{/* FOUR */}
							<section id="four" className="wrapper alt style1">
								<div className="inner">
									<h2 className="major" id="mjr">Starter Pack</h2>

									<section className="features">
										<article>
											<a href="#one1" className="image"><img src="../../assets/images/books/book4.jpg" alt="" /></a>
											<h3 className="major">Beginner</h3>
										</article>

										<article>
											<a href="#two2" className="image"><img src="../../assets/images/books/book2.jpg" alt="" /></a>
											<h3 className="major">Intermediate</h3>
										</article>

                                        <article>
											<a href="#three3" className="image"><img src="../../assets/images/books/book3.jpg" alt="" /></a>
											<h3 className="major">Advanced</h3>
										</article>
									</section>
								</div>
							</section>

							{/* ONE */}
							<section id="one" className="wrapper spotlight style1">
								<div className="inner" id="one1">
									<a href="" className="image"><img src="../../assets/images/books/book1.png" alt="" /></a>
									<div className="content">
										<h2 className="major"><i>The Alchemist</i> - Paulo Coelho</h2>
										<p>
											tells the story of a shepherd boy named Santiago who dreams of finding treasure beyond his humble life. 
											Santiago embarks on a journey to pursue his dream and discovers a world of wisdom, self-discovery, and 
											spiritual enlightenment.<br />The novel is beautifully written, with simple yet evocative language that captures 
											the essence of Santiago's journey. The story is imbued with themes of destiny, personal legend, and the 
											power of following one's heart. Coelho encourages readers to have the courage to pursue their own dreams, 
											to follow the omens of the universe, and to embrace the journey of self-discovery.
                                        </p>
									</div>
								</div>
							</section>

							{/* TWO */}
							<section id="two" className="wrapper alt spotlight style2">
								<div className="inner" id="two2">
									<a href="" className="image"><img src="../../assets/images/books/book2.png" alt="" /></a>
									<div className="content">
										<h2 className="major"><i>The Picture of Dorian Gray</i> - Oscar Wilde</h2>
										<p>
											In this novel, we follow the story of Dorian Gray, a handsome and wealthy young man 
											who becomes obsessed with the pursuit of pleasure and beauty. After having his portrait 
											painted, he discovers that the painting ages and deteriorates while he remains young and beautiful.<br /><br />
											As Dorian descends into a life of sin and corruption, he must confront the consequences of his actions 
											and the true nature of his soul. With its stunning prose and themes of morality and temptation, 
											this book is a haunting and thought-provoking read.
                                        </p>
									</div>
								</div>
							</section>

							{/* ONE */}
							<section id="one" className="wrapper spotlight style1">
								<div className="inner" id="three3">
									<a href="" className="image"><img src="../../assets/images/books/book3.png" alt="" /></a>
									<div className="content">
										<h2 className="major"><i>To Kill a Mockingbird</i> - Harper Lee</h2>
										<p>
											Set in the Depression-era South, this novel follows the story of Scout Finch
											 as she navigates issues of race, prejudice, and justice.<br />
											Through her eyes, we see how the town of Maycomb deals with the trial
											of Tom Robinson, a black man accused of raping a white woman. With beautifully
											crafted prose and unforgettable characters, this book is a timeless classNameic that 
											teaches us about empathy, morality, and the importance of standing up for what is right.
                                        </p>
									</div>
								</div>
							</section>

					</section>

                    {/* FOOTER */}
                    <section id="footer" className="footer3">
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

export default Books;
