import { IAction } from "./reducer";
interface Dictionary{
    [Key: string]: number | string | boolean;
}

export const reducer = (state: Dictionary, action:IAction ):Dictionary => {
    switch (action.type) {
        case "SET_PROP":
            return {
                ...state,
                [action.payload.name] : action.payload.value,
            };
        case "SET_EMPTY":
            return {}
        default:
            return state;
    }
}