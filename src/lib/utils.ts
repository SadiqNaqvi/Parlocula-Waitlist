import { emailPattern } from "./constant"

export const validateNameAndEmail = ({ email, name }: { name: string | undefined, email: string | undefined }) => {
    if (!email) return {
        success: false,
        message: "Email is required"
    }

    else if (!emailPattern.test(email) || email.length < 10 || email.length > 50) return {
        success: false,
        message: "Invalid Email! Please provide a valid email."
    }

    else if (name && name.length > 25) return {
        success: false,
        message: "Name is too long"
    }

    else return { success: true }

}