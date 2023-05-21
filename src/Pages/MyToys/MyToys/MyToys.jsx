import { useContext, useEffect, useState } from "react";

import { AiOutlineEdit } from "react-icons/ai"
import { RiDeleteBin6Line } from "react-icons/ri"
import Modal from "../Modal/Modal";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/user/${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

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
                                {/* modal start / edit button  */}
                                <label htmlFor="my-modal" className="btn btn-primary"><AiOutlineEdit /></label>
                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my-modal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <form className="p-6" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label">
                                                        <span className="label-text">Toy name</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Toy Name " {...register("toyName", { required: true })} className="input input-bordered w-full max-w-xs" />
                                                    {errors.toyName && <span className="text-red-500 text-sm">*required</span>}
                                                </div>
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label">
                                                        <span className="label-text">Price</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Price " {...register("price", { required: true })} className="input input-bordered w-full max-w-xs" />
                                                    {errors.price && <span className="text-red-500 text-sm">*required</span>}
                                                </div>
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label">
                                                        <span className="label-text">Quantity</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Available Quantity " {...register("quantity", { required: true })} className="input input-bordered w-full max-w-xs" />
                                                    {errors.quantity && <span className="text-red-500 text-sm">*required</span>}
                                                </div>
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label">
                                                        <span className="label-text">Description</span>
                                                    </label>
                                                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered" placeholder="Short Description"></textarea>
                                                    {errors.description && <span className="text-red-500 text-sm">*required</span>}
                                                </div>
                                            </div>
                                            <div className="modal-action">
                                                <label htmlFor="my-modal">
                                                    <input type="submit" className="mt-4 btn primary-btn" value="Add Toy" />
                                                </label>
                                            </div>
                                        </form>

                                        {/* <div className="modal-action">
                                            <label htmlFor="my-modal" className="btn">Yay!</label>
                                        </div> */}
                                    </div>
                                </div>
                                {/* modal end  */}
                                <button className="ms-3 btn btn-error"><RiDeleteBin6Line /></button></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;