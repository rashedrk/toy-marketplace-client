

const Header = () => {
    return (
        <div className="hero min-h-screen px-8 bg-[#C2E0EB]">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src="headerimg.png" className="max-w-sm mt-6 lg:max-w-3xl" />
                <div>
                    <h1 className="text-5xl font-extrabold">Best Kids Store & Animal toys shop</h1>
                    <p className="py-6 font-semibold">Give your kids the best gift they deserve</p>
                    <button className="btn primary-btn">Shop Now</button> 
                </div>
            </div>
        </div>
    );
};

export default Header;