import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateToy = () => {
    const {_id,toyName, price, quantity,description,photo} = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();

    // showing success msg after updating toy
    const showToastMessage = () => {
        toast.success('Toy updated Successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    // handle form submit 
    const onSubmit = updatedInfo => {
        fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json()
            .then(() => { }))
        showToastMessage();
        
    }
    return (
        <div className="flex" >
            <img className="w-96" src={photo} alt="" />
            <form className="p-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2  gap-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Toy name</span>
                        </label>
                        <input type="text" value={toyName} placeholder="Enter Toy Name " {...register("toyName", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.toyName && <span className="text-red-500 text-sm">*required</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price} placeholder="Enter Price " {...register("price", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <span className="text-red-500 text-sm">*required</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity}  placeholder="Enter Available Quantity " {...register("quantity", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.quantity && <span className="text-red-500 text-sm">*required</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea defaultValue={description}  {...register("description", { required: true })} className="textarea textarea-bordered" placeholder="Short Description"></textarea>
                        {errors.description && <span className="text-red-500 text-sm">*required</span>}
                    </div>
                </div>

                <input type="submit" className="mt-4 btn primary-btn" value="Add Toy" />
                <ToastContainer />
            </form>
        </div>
    );
};

export default UpdateToy;