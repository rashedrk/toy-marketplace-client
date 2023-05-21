import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ToyCards = ({toy}) => {
    const {_id, toyName, price, photo, rating} =toy;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <Rating
                    placeholderRating={rating}
                    emptySymbol={<BsStar className="text-yellow-400" />}
                    placeholderSymbol={<BsStarFill className="text-yellow-400" />}
                    fullSymbol={<BsStarFill className="text-yellow-400" />}
                    readonly
                />
                <span>{rating}</span>
                
                <p><span className="text-2xl font-bold text-[#F379A7]">${price}</span></p>
                <Link to={`/toys/${_id}`} className="card-actions">
                    <button className="btn primary-btn">Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ToyCards;