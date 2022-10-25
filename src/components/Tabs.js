import { useState, useEffect } from 'react';
import feature1 from '../assets/illustration-features-tab-1.svg';
import feature2 from '../assets/illustration-features-tab-2.svg';
import feature3 from '../assets/illustration-features-tab-3.svg';
const Tabs = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section>
			<div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
				<div className="flex flex-col justify-center max-w-xl mx-auto mb-6 borded-b md:flex-row md:gap-x-10">
					<div className="flex justify-center text-center  border-b md:border-b-0 hover:text-softRed md:w-1/3">
						<div
							className={toggleState === 1 ? 'active-tab' : 'tabs'}
							onClick={() => toggleTab(1)}>
							Simple Bookmarking
						</div>
					</div>
					<div className="flex justify-center text-center  border-b md:border-b-0 hover:text-softRed md:w-1/3">
						<div
							className={toggleState === 2 ? 'active-tab' : 'tabs'}
							onClick={() => toggleTab(2)}>
							Speedy Searching
						</div>
					</div>
					<div className="flex justify-center text-center  border-b md:border-b-0 hover:text-softRed md:w-1/3">
						<div
							className={toggleState === 3 ? 'active-tab' : 'tabs'}
							onClick={() => toggleTab(3)}>
							Easy sharing
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto">
				<div
					className={
						toggleState === 1 ? 'content' : 'content hidden'
					}>
					<div className="flex justify-center md:w-1/2">
						<img
							src={feature1}
							alt="tab ilustration"
							className="relative z-10"
						/>
					</div>
					<div className="flex flex-col gap-8 md:w-1/2">
						<h3 className="mt-32 text-3xl font-medium text-center md:mt-0 md:text-left">
							Bookmark in one click
						</h3>
						<p className="max-w-md text-center text-grayishBlue md:text-left">
							Organize your bookmarks however you like. Our simple
							drag-and-drop interface gives you complete control over
							how you manage your favourite sites.
						</p>
						<div className="mx-auto md:mx-0">
							<a
								href="#"
								className="px-6 py-3 mt-4 font-semibold outline-none text-white border-2 rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
								More Info
							</a>
						</div>
					</div>
				</div>
				<div
					className={
						toggleState === 2 ? 'content' : 'content hidden'
					}>
					<div className="flex justify-center md:w-1/2">
						<img
							src={feature2}
							alt="tab ilustration"
							className="relative z-10"
						/>
					</div>
					<div className="flex flex-col gap-8 md:w-1/2">
						<h3 className="mt-32 text-3xl font-medium text-center md:mt-0 md:text-left">
							Intelligent search
						</h3>
						<p className="max-w-md text-center text-grayishBlue md:text-left">
							Our powerful search feature will help you find saved
							sites in no time at all. No need to trawl through all of
							your bookmarks.
						</p>
						<div className="mx-auto md:mx-0">
							<a
								href="#"
								className="px-6 py-3 mt-4 font-semibold outline-none text-white border-2 rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
								More Info
							</a>
						</div>
					</div>
				</div>
				<div
					className={
						toggleState === 3 ? 'content' : 'content hidden'
					}>
					<div className="flex justify-center md:w-1/2">
						<img
							src={feature3}
							alt="tab ilustration"
							className="relative z-10"
						/>
					</div>
					<div className="flex flex-col gap-8 md:w-1/2">
						<h3 className="mt-32 text-3xl font-medium text-center md:mt-0 md:text-left">
							Share your bookmarks
						</h3>
						<p className="max-w-md text-center text-grayishBlue md:text-left">
							Easily share your bookmarks and collections with others.
							Create a shareable a link that you can send at the click
							of a button.
						</p>
						<div className="mx-auto md:mx-0">
							<a
								href="#"
								className="px-6 py-3 mt-4 font-semibold outline-none text-white border-2 rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
								More Info
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tabs;
