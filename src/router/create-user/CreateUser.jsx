import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../context/action";

const initialState = {
    id: 0,
    name: "",
    profession: "",
    age: "",
    gender: "",
};

function CreateUser() {
    const [formData, setFormData] = useState(initialState);
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCreateUser = (e) => {
        e.preventDefault();
        const userId = new Date().getTime();
        formData.id = userId;
        dispatch(addUser(formData));
        setFormData(initialState);
    };

    return (
        <div className="create__user">
            <h2>Create User</h2>
            <form
                className="create__user-form"
                onSubmit={handleCreateUser}
                action=""
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="name"
                />
                <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="profession"
                />
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="age"
                />
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    id=""
                >
                    <option value="">gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateUser;
