import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"
import { useEffect, useState } from "react";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    //load toy data by default all toy
    useEffect(() => {
        fetch('https://toy-marketplace-server-orpin.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    // handle search and load data using search 
    const handleSearch = event => {
        // get search value 
        event.preventDefault();
        const searchText = event.target.search.value;
       //data loading
        fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/search/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
    return (
        <div className="">
            <form onSubmit={handleSearch} className="flex justify-center my-5">
                <input type="text" name="search" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                <button type="submit" className="ms-2 btn primary-btn text-3xl"><AiOutlineSearch /></button>
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
                        toys.map((toy, index) => <tr key={toy._id}>
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