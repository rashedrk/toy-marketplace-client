import { useForm } from "react-hook-form";

const AddToy = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="grid grid-cols-2 gap-4">
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
                    <input type="text" placeholder="Enter seller name " {...register("seller", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.seller && <span className="text-red-500 text-sm">*required</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" placeholder="Enter seller email " {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <span className="text-red-500 text-sm">*required</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Sub category</span>
                    </label>
                    <select {...register("subCategory")} className="select select-bordered  w-full max-w-xs">
                        <option disabled selected>Pick your Sub Category</option>
                        <option value="Homer">Homer</option>
                        <option value="Marge">Marge</option>
                        <option  value="Bart">Bart</option>
                        <option  value="Lisa">Lisa</option>
                        <option  value="Maggie">Maggie</option>
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

            <input type="submit" className="mt-4 btn btn-success" value="Add Toy" />
        </form>
    );
};

export default AddToy;