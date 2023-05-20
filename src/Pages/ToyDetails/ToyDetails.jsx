import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";

const ToyDetails = () => {
    const toy = useLoaderData();
    const { toyName, seller, price, subCategory, quantity, rating, photo, email, details } = toy;
    return (
        <div className="grid p-8 justify-center lg:grid-cols-3">
            <img src={photo}/>
            <div className="col-span-2">
                <h1 className="text-4xl font-bold">{toyName}</h1>
                <p className="pt-3 text-sm text-gray-500">by: {seller}</p>
                <p className="text-sm mb-3 text-gray-500">{email}</p>
                <p className="text-2xl font-bold mb-3 text-[#F379A7]
                        ">${price}-<span className="text-[#f47ba992] line-through text-xl">${price * 1.7}</span></p>
                <Rating
                    placeholderRating={rating}
                    emptySymbol={<BsStar className="text-yellow-400" />}
                    placeholderSymbol={<BsStarFill className="text-yellow-400" />}
                    fullSymbol={<BsStarFill className="text-yellow-400" />}
                    readonly
                />
                <span>{rating}</span>
                <br />
                <p className="text-md mt-2">Available: <span className="text-gray-400">{quantity}</span></p>
                <p className="text-md">Sub Category: {subCategory}</p>
                <p className="text-md mb-3">Details: {details}</p>

                <button className="btn primary-btn">Order Now</button>
            </div>
        </div>
    );
};

export default ToyDetails;