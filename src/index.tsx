import form from "./form";
import { TextArea, TextField } from "./form/input";
import { PasswordField } from "./form/password";
import { CheckBox } from "./form/checkbox";
import { FileGeneric,FileImage } from "./form/fileUpload";
import { Container } from "./form/container"
import { Submit } from "./form/btn";


type IForm = typeof form;
export interface Iprops extends IForm{
    TextField:typeof TextField;
    TextArea:typeof TextArea;
    PasswordField:typeof PasswordField;
    CheckBox: typeof CheckBox;
    FileGeneric: typeof FileGeneric;
    FileImage: typeof FileImage;
    Container: typeof Container;
    Submit:typeof Submit;
}

export const Form:Iprops = Object.assign(form,{
    TextField,
    TextArea,
    PasswordField,
    CheckBox,
    FileGeneric,
    FileImage,
    Container,
    Submit,
});

export default Form;