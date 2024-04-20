import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadUser = useLoaderData();
    const handleUpdate=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name,email);
    }
    return (
        <div>
            <h3>Update Information of {loadUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadUser?.name} id="" />
                <br />
                <input type="email" name="email"  defaultValue={loadUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;