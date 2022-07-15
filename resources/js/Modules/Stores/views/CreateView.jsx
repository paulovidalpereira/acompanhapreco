import { Form } from "../components/Form";

export const CreateView = ({
    data,
    errors,
    processing,
    onHandleSubmit,
    onHandleChange,
}) => {
    return (
        <div>
            <Form
                data={data}
                errors={errors}
                processing={processing}
                handleSubmit={onHandleSubmit}
                handleChange={onHandleChange}
            />
        </div>
    );
};
