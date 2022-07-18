import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";

export const ViewModel = (INITIAL_STATE) => {
    const { data, setData, processing, errors } = useForm(INITIAL_STATE);

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
        Inertia.put(route("products.update", INITIAL_STATE.id), data, {
            onSuccess: () => {
                console.log("updated");
                toast.success("Produto atualizado com sucesso.");
            },
        });
    };

    const onHandleCreateSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("products.store"), data, {
            onSuccess: () => {
                console.log("created");
                toast.success("Produto criado com sucesso.");
            },
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
