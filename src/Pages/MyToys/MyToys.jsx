import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import {AiOutlineEdit} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/user/${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Sub-Category</th>
                        <th>Quantity</th>
                        <th>Details</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <tr key={toy._id}>
                            <th></th>
                            <td>{toy.toyName}</td>
                            <td>{toy.price}</td>
                            <td>{toy.subCategory}</td>
                            <td>{toy.quantity}</td>
                            <td>{toy.description}</td>
                            <td><button className="btn btn-primary"><AiOutlineEdit/></button>
                            <button className="ms-3 btn btn-error"><RiDeleteBin6Line/></button></td>
                            
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;