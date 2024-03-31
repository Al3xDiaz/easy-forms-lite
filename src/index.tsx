import form from "./form";
import { TextArea, TextField } from "./form/input";
import { RangeField } from "./form/range";
import {DatePicker,DatePickerFull} from "./form/datepicker";
import { PasswordField } from "./form/password";
import { CheckBox } from "./form/checkbox";
import { FileGeneric,FileImage } from "./form/fileUpload";
import { SelectField,Option } from "./form/select";
import { Container } from "./form/container"
import { Submit } from "./form/btn";


type IForm = typeof form;
export interface Iprops extends IForm{
    TextField:typeof TextField;
    TextArea:typeof TextArea;
    RangeField: typeof RangeField;
    DatePicker: typeof DatePicker;
    DatePickerFull: typeof DatePickerFull;
    PasswordField:typeof PasswordField;
    CheckBox: typeof CheckBox;
    FileGeneric: typeof FileGeneric;
    FileImage: typeof FileImage;
    SelectField: typeof SelectField;
    Option: typeof Option;

    Container: typeof Container;
    Submit:typeof Submit;
}

export const Form:Iprops = Object.assign(form,{
    TextField,
    TextArea,
    RangeField,
    DatePicker,
    DatePickerFull,
    PasswordField,
    CheckBox,
    FileGeneric,
    FileImage,
    SelectField,
    Option,
    Container,
    Submit,
});

export {useData} from "./hooks"
export default Form;