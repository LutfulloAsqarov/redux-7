import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../context/action";
import EditUser from "../edit-user";

function Users() {
    const [editUser, setEditUser] = useState(null);
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <>
            <div className="users__wrapper">
                {userData
                    ?.map((user) => (
                        <div key={user.id} className="users__card">
                            <img
                                src={user.gender === "male" ? male : female}
                                alt="img"
                            />
                            <h2>{user.name}</h2>
                            <p>{user.profession}</p>
                            <p>{user.age} years old</p>
                            <button onClick={() => dispatch(removeUser(user))}>
                                Remove
                            </button>
                            <button onClick={() => setEditUser(user)}>
                                Edit
                            </button>
                        </div>
                    ))
                    .reverse()}
            </div>
            {editUser ? (
                <EditUser data={editUser} setClose={setEditUser} />
            ) : (
                <></>
            )}
        </>
    );
}

export default Users;
