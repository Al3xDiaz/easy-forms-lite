export interface IState {
    name: string;
    value: string | number | Date ;
}

interface ISetAction {
    type: "SET_PROP";
    payload: IState;
}

interface ISetActionEmpty{
    type: "SET_EMPTY";
}

export type IAction = ISetAction | ISetActionEmpty;
export default IAction;