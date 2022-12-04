import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().required("O nome é obrigatório"),
    password: yup.string().required("Senha obrigatória")  
})