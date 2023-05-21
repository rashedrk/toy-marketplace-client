import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    // showing success msg after adding toy
    const showToastMessage = () => {
        toast.success('Toy added Successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    // form submit 
    const onSubmit = toy => {
        fetch('https://toy-marketplace-server-orpin.vercel.app/toys', {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json()
            .then(() => { }))
            showToastMessage();
            reset();

    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
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
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Enter Photo URL " {...register("photo", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.photo && <span className="text-red-500 text-sm">*required</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" value={user?.displayName} placeholder="Enter seller name " {...register("seller", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.seller && <span className="text-red-500 text-sm">*required</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" value={user?.email} placeholder="Enter seller email " {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <span className="text-red-500 text-sm">*required</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Sub category</span>
                    </label>
                    <select {...register("subCategory")} className="select select-bordered  w-full max-w-xs">
                        <option disabled selected>Pick your Sub Category</option>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="teddy">Teddy</option>
                        <option value="dinosaur">Dinosaur</option>
                        <option value="horse">Horse</option>
                        <option value="cow">Cow</option>
                    </select>
                    {errors.subCategory && <span className="text-red-500 text-sm">*required</span>}
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
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Enter Rating " {...register("rating", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.rating && <span className="text-red-500 text-sm">*required</span>}
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

            <input  type="submit" className="mt-4 btn primary-btn" value="Add Toy" />
            <ToastContainer/>
        </form>
        
    );
};

export default AddToy;