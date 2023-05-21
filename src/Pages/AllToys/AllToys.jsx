import { Link, useLoaderData } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"

const AllToys = () => {
    const loadedToys = useLoaderData();
    const handleSearch = event => {
        event.preventDefault();
        const searchText = event.target.search.value;
        console.log(searchText); 
    }
    return (
        <div className="">
            <form onSubmit={handleSearch}  className="flex justify-center my-5">
                <input type="text" name="search" placeholder="Search" className="input input-bordered w-full max-w-xs" /> 
                <button type="submit" className="ms-2 btn primary-btn text-3xl"><AiOutlineSearch  /></button>
            </form>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Name</th>
                        <th>seller</th>
                        <th>Price</th>
                        <th>Sub-Category</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loadedToys.map((toy, index) => <tr key={toy._id}>
                            <th>{index + 1}</th>
                            <td>{toy.toyName}</td>
                            <td>{toy.seller}</td>
                            <td>{toy.price}</td>
                            <td>{toy.subCategory}</td>
                            <td>{toy.quantity}</td>
                            <td><Link to={`/toys/${toy._id}`} className="btn primary-btn">Show Details</Link></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;