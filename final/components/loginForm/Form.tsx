import { FC } from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import { FormData, LoginSchema } from "./Type";
import { zodResolver } from "@hookform/resolvers/zod";

const Form: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = async (data: FormData) => {
        console.log("SUCCESS", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Staff Register</h1>
                <FormField
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={register}
                    error={errors.email}
                    required
                />
                <FormField
                    type="number"
                    placeholder="Exp year(s)"
                    name="exp"
                    register={register}
                    error={errors.exp}
                    required
                    valueAsNumber
                />
                <FormField
                    type="password"
                    placeholder="Password"
                    name="password"
                    register={register}
                    error={errors.password}
                    required
                />
                <FormField
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmpass"
                    register={register}
                    error={errors.confirmpass}
                    required
                />
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Form;
