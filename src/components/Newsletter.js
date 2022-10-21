const Newsletter = () => {
	return (
		<section className="bg-softBlue">
			<div className="max-w-xl mx-auto py-24 text-gray-100">
				<p className="text-xl text-center mb-12 uppercase tracking-widest">
					35,000+ Already Joined
				</p>
				<h3 className="text-4xl text-center font-medium mb-12 px-10 ">
					Stay up-to-date with what we're doing
				</h3>

				<form className="flex flex-col justify-center items-center mx-auto gap-4 md:flex-row ">
					<input
						className="w-4/5 py-4 px-6 pr-32 rounded-md placeholder-grayishBlue"
						type="text"
						placeholder="Enter your email address"
					/>
					<input
						className="w-4/5 flex-1 text-white font-medium bg-softRed py-4 px-6 rounded-md"
						type="submit"
						value="Contact Us"
					/>
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
