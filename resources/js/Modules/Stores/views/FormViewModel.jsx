import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";

export const FormViewModel = (store) => {
    const INITIAL_STATE = {
        name: "",
        domain: "",
        class: "",
        status: 0,
        ...store,
    };

    const { data, setData, post, put, processing, errors } =
        useForm(INITIAL_STATE);

    const onHandleChange = (e) => {
        setData((values) => ({
            ...values,
            [e.target.name]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
        }));
    };

    const onHandleUpdateSubmit = (e) => {
        e.preventDefault();
        put(route("stores.update", INITIAL_STATE.id), {
            data,
            onSuccess: () => {
                console.log("updated");
                toast.success("Loja atualizada com sucesso.");
            },
            only: ["stores"],
        });
    };

    const onHandleCreateSubmit = (e) => {
        e.preventDefault();
        post(route("stores.store"), {
            data,
            onSuccess: () => {
                console.log("created");
                toast.success("Loja criada com sucesso.");
            },
            only: ["stores"],
        });
    };

    return {
        data,
        setData,
        processing,
        errors,
        onHandleChange,
        onHandleUpdateSubmit,
        onHandleCreateSubmit,
    };
};
