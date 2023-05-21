import { useContext, useEffect, useState } from "react";

import { AiOutlineEdit } from "react-icons/ai"
import { RiDeleteBin6Line } from "react-icons/ri"
import Modal from "../Modal/Modal";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/user/${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, toys);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = toy => {
        console.log(toy);
        fetch('https://toy-marketplace-server-orpin.vercel.app/toys', {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json()
                .then(data => console.log(data)))
    };

    //handle delete toys 
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                    })

            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    'Your toy is safe :)',
                    'error'
                )
            }
        })
    }
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
                            <td>
                                <button  className="btn btn-primary"><AiOutlineEdit /></button>
                                <button onClick={() => handleDelete(toy._id)} className="ms-3 btn btn-error"><RiDeleteBin6Line /></button></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;