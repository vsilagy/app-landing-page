import logo from '../assets/logo-bookmark.svg';

const Nav = () => {
	return (
		<nav className="container relative mx-auto p-6">
			<div className="flex justify-between items-center gap-10 my-6">
				<div className="z-10 ">
					<img src={logo} />
				</div>

				<div className="hidden items-center gap-10 uppercase text-veryDarkBlue  md:flex md:mr-12">
					<a
						href="#features"
						className="tracking-widest hover:text-softRed cursor-pointer">
						Features
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
					<button className="uppercase tracking-widest bg-softRed text-white px-9 py-3 rounded-md hover:bg-white hover:text-softRed hover:ring-2 hover:ring-softRed">
						Login
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
