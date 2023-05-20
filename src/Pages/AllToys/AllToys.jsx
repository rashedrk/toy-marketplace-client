import { useLoaderData } from "react-router-dom";


const AllToys = () => {
    const loadedToys = useLoaderData();
    
    return (
        <div className="overflow-x-auto">
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
                        loadedToys.map(toy => <tr key={toy._id}>
                            <th></th>
                            <td>{toy.toyName}</td>
                            <td>{toy.seller}</td>
                            <td>{toy.price}</td>
                            <td>{toy.subCategory}</td>
                            <td>{toy.quantity}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;