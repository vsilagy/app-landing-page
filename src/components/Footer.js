import logo from '../assets/logo-bookmark.svg';
import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
const Footer = () => {
	return (
		<footer className="bg-veryDarkBlue">
			<div>
				<div className="z-10">
					<img src={logo} />

					<div className="hidden items-center gap-10 uppercase text-veryDarkBlue  md:flex md:mr-12">
						<a
							href="#"
							className="tracking-widest hover:text-softRed cursor-pointer">
							Feature
						</a>
						<a
							href="#"
							className="tracking-widest hover:text-softRed cursor-pointer">
							Pricing
						</a>
						<a
							href="#"
							className="tracking-widest hover:text-softRed cursor-pointer">
							Contact
						</a>
					</div>
				</div>
				<div>
					<a href="#">
						<img src={facebook} />
					</a>
					<a href="#">
						<img src={twitter} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
