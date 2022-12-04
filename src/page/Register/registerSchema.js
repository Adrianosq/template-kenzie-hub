import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O e-mail é obrigatório").email("O e-mail digitado é inválido."),
    password: yup.string().required("Senha obrigatória").matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula").matches(/(?=.*?[a-z])/, "É necessário uma letra minúsculo.").matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.").matches(/(?=.*?[#?!@$%^&*-])/, "É necessário uma caracter especial").min(8, "A senha precisa ter pelo menos 8 caracteres"),
    confirmPassword: yup.string().when("password", (password, field) => password ? field.required().oneOf([yup.ref("password")], "Senhas não combinam") : field),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Meio de contato obrigatório"),
    course_module: yup.string().required("Modulo obrigatório")
})