import logo from '../assets/logo-bookmark.svg';

const Nav = () => {
	return (
		<nav className="container relative mx-auto p-6">
			<div className="flex justify-between items-center gap-12 my-6">
				<div>
					<img src={logo} />
				</div>

				<div className="hidden items-center gap-12 uppercase text-grayishBlue  md:flex">
					<a className="tracking-wider hover:text-softRed">Feature</a>
					<a className="tracking-wider hover:text-softRed">Pricing</a>
					<a className="tracking-wider hover:text-softRed">Contact</a>
					<button className="uppercase tracking-wider bg-softRed text-white px-9 py-3 rounded-md hover:bg-white hover:text-softRed hover:ring-2 hover:ring-softRed">
						Login
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
