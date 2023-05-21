import { useForm } from "react-hook-form";

const Modal = () => {
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
        <>
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
            </form>
            <div className="modal-action">
                <input  type="submit" className="mt-4 btn primary-btn" value="Add Toy" />
            </div>
        </>


    );
};

export default Modal;