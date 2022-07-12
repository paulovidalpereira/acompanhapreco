import React from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";

export const Form = ({
    data,
    errors,
    processing,
    handleSubmit,
    handleChange,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <Label forInput="name">Loja:</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    value={data.name}
                    handleChange={handleChange}
                />
                {errors.name && (
                    <div className="text-red-500 text-sm">{errors.name}</div>
                )}
            </div>
            <div className="form-field">
                <Label forInput="domain">Dominio:</Label>
                <Input
                    type="text"
                    name="domain"
                    id="domain"
                    value={data.domain}
                    handleChange={handleChange}
                />
                {errors.domain && (
                    <div className="text-red-500 text-sm">{errors.domain}</div>
                )}
            </div>
            <div className="form-field">
                <Label forInput="class">Class:</Label>
                <Input
                    type="text"
                    name="class"
                    id="class"
                    value={data.class}
                    handleChange={handleChange}
                />
                {errors.class && (
                    <div className="text-red-500 text-sm">{errors.class}</div>
                )}
            </div>
            <div className="form-field">
                <Label forInput="status">Status:</Label>
                <select
                    name="status"
                    id="status"
                    className="form-input"
                    value={data.status}
                    onChange={handleChange}
                >
                    <option value="0">Desabilitado</option>
                    <option value="1">Habilitado</option>
                </select>
                {errors.status && (
                    <div className="text-red-500 text-sm">{errors.status}</div>
                )}
            </div>
            <div>
                <Button
                    type="submit"
                    processing={processing}
                    className="btn--primary"
                >
                    Salvar
                </Button>
            </div>
        </form>
    );
};
