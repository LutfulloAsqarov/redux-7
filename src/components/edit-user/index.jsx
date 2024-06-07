import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../context/action";
import "./editUser.scss";

const initialState = {
    id: 0,
    name: "",
    profession: "",
    age: "",
    gender: "",
};

const EditUser = ({ data, setClose }) => {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        const { id, name, profession, age, gender } = data;
        setFormData({ id, name, profession, age, gender });
    }, [data]);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditUser = (e) => {
        e.preventDefault();
        dispatch(editUser(formData));
        setClose(null);
    };
    return (
        <>
            <div onClick={() => setClose(null)} className="edit__overlay"></div>
            <div className="edit__user">
                <form
                    className="edit__user-form"
                    onSubmit={handleEditUser}
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
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setClose(null)}>
                        Cancel
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditUser;
