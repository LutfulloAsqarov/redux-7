import { ADD_USER, EDIT_USER, REMOVE_USER } from "../action";

const initialState = JSON.parse(localStorage.getItem("user")) || [];

const saveUserData = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
};

export const user = (state = initialState, { type, payload }) => {
    let newState;
    switch (type) {
        case ADD_USER:
            newState = [...state, payload];
            saveUserData(newState);
            return newState;
        case REMOVE_USER:
            newState = state.filter((el) => el.id !== payload.id);
            saveUserData(newState);
            return newState;
        case EDIT_USER:
            newState = state.map((el) => (el.id === payload.id ? payload : el));
            saveUserData(newState);
            return newState;
        default:
            return state;
    }
};
