import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
    message:Yup.string().required(" Message is Required"),
    fullNames:Yup.string().required("Names are Required"),
    phone:Yup.string().required(" Phone number is Required"),
    email:Yup.string().email("E-mail must be valid").required(" E-mail is Required")
});