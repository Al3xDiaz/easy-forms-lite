import form from "./form";
import { TextArea, TextField } from "./form/input";
import { PasswordField } from "./form/password";
import { CheckBox } from "./form/checkbox";
import { Submit } from "./form/btn";


type IForm = typeof form;
export interface Iprops extends IForm{
    TextField:typeof TextField;
    TextArea:typeof TextArea;
    PasswordField:typeof PasswordField;
    CheckBox: typeof CheckBox;
    Submit:typeof Submit;
}

export const Form:Iprops = Object.assign(form,{
    TextField,
    TextArea,
    PasswordField,
    CheckBox,
    Submit,
});

export default Form;