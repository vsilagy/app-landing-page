import { useState } from 'react';
import logo from '../assets/logo-bookmark.svg';
import whiteLogo from '../assets/logo-bookmark-footer.svg';
import hamburger from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';
import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';

const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<header className="container relative mx-auto p-6">
				<div className="hidden md:flex justify-between items-center gap-10 my-6">
					<div>
						<img src={logo} />
					</div>

					<div className="hidden md:flex items-center gap-10 uppercase text-veryDarkBlue md:mr-12">
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
				<div className="relative container z-50 flex justify-between items-center py-6 md:hidden">
					<img src={open ? whiteLogo : logo} className="h-7" />
					<button onClick={() => setOpen(!open)}>
						<img
							src={open ? close : hamburger}
							className="h-5 transition duration-500 ease-in"
						/>
					</button>
				</div>

				{open && (
					<nav className="fixed inset-0 z-30 flex flex-col justify-between item-center w-full h-full bg-veryDarkBlue opacity-95 pt-32 active:overflow-y-hidden md:hidden">
						<div className="text-gray-100 text-xl tracking-widest uppercase px-10 divide-y divide-gray-700">
							<div className="w-full py-5 border-t border-gray-700 text-center">
								<a href="#" className="block hover:text-softRed">
									Features
								</a>
							</div>
							<div className="w-full py-4 text-center">
								<a href="#" className="block hover:text-softRed">
									Pricing
								</a>
							</div>
							<div className="w-full py-4 text-center">
								<a href="#" className="block hover:text-softRed">
									Contact
								</a>
							</div>
							<div className="w-full py-4 text-center">
								<a
									href="#"
									className="block py-4 mt-4 rounded border-2 border-gray-100 hover:text-softRed">
									Login
								</a>
							</div>
						</div>
						<div className="flex justify-center items-center gap-10 mb-20">
							<img src={facebook} />
							<img src={twitter} />
						</div>
					</nav>
				)}
			</header>
		</>
	);
};

export default Nav;
