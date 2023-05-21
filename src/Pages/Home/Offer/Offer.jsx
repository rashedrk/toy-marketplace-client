
const Offer = () => {
    return (
        <div>
            <h2 className="font-bold mt-10 text-center text-3xl">Offers</h2>
            <div className="grid gap-4 mt-12 lg:grid-cols-2">
            <div className="card bg-base-500 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/7NnRgsF/5-1.webp" alt="" /></figure>
                <div className=" items-end card-body">
                    <h2 className="card-title">Collection</h2>
                    <p>Flat <span className="text-lg">20%</span> off</p>
                    <div className="card-actions justify-end">
                        <button className="btn primary-btn">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-500 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/qjsHJgY/4-1.webp" alt="" /></figure>
                <div className="items-end  card-body">
                    <h2 className="card-title">Collection</h2>
                    <p>Flat <span className="text-lg">20%</span> off</p>
                    <div className="card-actions justify-end">
                        <button className="btn primary-btn">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Offer;