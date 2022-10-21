import arrow from '../assets/arrow.svg';

const Accordion = () => {
	return (
		<section>
			<div className="container mx-auto px-6 mb-12">
				<div className="max-w-xl m-6 mx-auto overflow-hidden">
					{/* tab-1 */}
					<div
						className="py-1 border-b outline-none group "
						tabIndex={1}>
						<div className="flex items-center justify-between py-3 text-veryDarkBlue transition duration-500 cursor-pointer group ease-in-out">
							<div className="transition duration-500 ease-in-out group-hover:text-softRed">
								What is Bookmark ?
							</div>
							<div className="transition duration-500 ease-in-out group-focus:rotate-180 group-focus:text-softRed">
								<img src={arrow}></img>
							</div>
						</div>
						<div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in">
							<p className="py-2 text-justify text-grayishBlue">
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Integer laoreet facilisis ante non blandit. Ut
								semper dapibus sapien. Pellentesque nec cursus ex.
								Aliquam ac mauris ac lorem viverra porttitor eget a
								lorem. Integer gravida, metus id pretium luctus, arcu
								felis pharetra lacus, sed condimentum tortor massa sit
								amet ligula. Orci varius natoque penatibus et magnis
								dis parturient montes, nascetur ridiculus mus. In hac
								habitasse platea dictumst. Integer elementum orci sed
								purus commodo tempus. Proin tempor varius nunc.
							</p>
						</div>
					</div>
					{/* tab-2 */}
					<div
						className="py-1 border-b outline-none group "
						tabIndex={2}>
						<div className="flex items-center justify-between py-3 text-veryDarkBlue transition duration-500 cursor-pointer group ease-in-out">
							<div className="transition duration-500 ease-in-out group-hover:text-softRed">
								How can I request a new browser?
							</div>
							<div className="transition duration-500 ease-in-out group-focus:rotate-180 group-focus:text-softRed">
								<img src={arrow}></img>
							</div>
						</div>
						<div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in">
							<p className="py-2 text-justify text-grayishBlue">
								Donec pulvinar scelerisque libero eu hendrerit. Nulla
								non ultricies erat, vel suscipit velit. Praesent
								pretium leo a ullamcorper semper. Cras vestibulum
								velit eget quam lobortis facilisis. Aenean eget
								aliquam mi, non rhoncus sem. Morbi in tincidunt dui.
								Proin scelerisque magna et turpis tincidunt dapibus.
								Pellentesque id facilisis ante, sit amet faucibus dui.
								Vestibulum id tincidunt metus, id iaculis urna. Ut
								mollis placerat nunc vel ullamcorper. Nullam convallis
								lectus eget magna pellentesque porta.
							</p>
						</div>
					</div>
					{/* tab-3 */}
					<div
						className="py-1 border-b outline-none group "
						tabIndex={3}>
						<div className="flex items-center justify-between py-3 text-veryDarkBlue transition duration-500 cursor-pointer group ease-in-out">
							<div className="transition duration-500 ease-in-out group-hover:text-softRed">
								What is Bookmark ?
							</div>
							<div className="transition duration-500 ease-in-out group-focus:rotate-180 group-focus:text-softRed">
								<img src={arrow}></img>
							</div>
						</div>
						<div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in">
							<p className="py-2 text-justify text-grayishBlue">
								Cras accumsan, lacus nec varius tempor, justo risus
								gravida velit, eget tincidunt nisl massa vel arcu. In
								volutpat dignissim ante a laoreet. Proin at dapibus
								dui. Duis tempus nunc non porta dapibus. Mauris sem
								nisl, ultrices eget neque nec, tincidunt viverra mi.
								Aenean euismod diam ut tortor egestas mattis. Nam non
								congue nunc. Donec dictum pellentesque accumsan.
								Vivamus faucibus aliquam nulla. Donec tincidunt
								posuere lacus, vel luctus nibh gravida id. Quisque
								molestie turpis et metus consequat, nec vulputate
								lectus eleifend.
							</p>
						</div>
					</div>
					{/* tab-4 */}
					<div
						className="py-1 border-b outline-none group "
						tabIndex={4}>
						<div className="flex items-center justify-between py-3 text-veryDarkBlue transition duration-500 cursor-pointer group ease-in-out">
							<div className="transition duration-500 ease-in-out group-hover:text-softRed">
								What about other Chromium Browsers ?
							</div>
							<div className="transition duration-500 ease-in-out group-focus:rotate-180 group-focus:text-softRed">
								<img src={arrow}></img>
							</div>
						</div>
						<div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in">
							<p className="py-2 text-justify text-grayishBlue">
								Curabitur orci lacus, viverra vel turpis quis,
								scelerisque cursus magna. Vestibulum pulvinar
								facilisis nunc ac cursus. Duis nec commodo mauris.
								Orci varius natoque penatibus et magnis dis parturient
								montes, nascetur ridiculus mus. In dignissim placerat
								laoreet. Etiam quis eros nunc. Sed magna velit,
								lobortis at elit a, vulputate tristique massa.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Accordion;
