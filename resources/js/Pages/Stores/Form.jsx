import React from "react";
import Input from "@/Components/Input";

export const Form = ({ formData, errors, handleSubmit, handleChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label className="form-label">Loja:</label>
                <Input
                    type="text"
                    className="form-input"
                    handleChange={handleChange}
                />
                {errors.name && (
                    <div class="text-red-500 text-sm">{errors.name}</div>
                )}
            </div>
            <div className="form-field">
                <label className="form-label">Url:</label>
                <input
                    type="text"
                    name="url"
                    id="url"
                    className="form-input"
                    value={formData.url}
                    onChange={handleChange}
                />
                {errors.url && (
                    <div class="text-red-500 text-sm">{errors.url}</div>
                )}
            </div>
            <div className="form-field">
                <label className="form-label">Class:</label>
                <input
                    type="text"
                    name="class"
                    id="class"
                    className="form-input"
                    value={formData.class}
                    onChange={handleChange}
                />
                {errors.class && (
                    <div class="text-red-500 text-sm">{errors.class}</div>
                )}
            </div>
            <div>
                <button type="submit" className="btn">
                    Salvar
                </button>
            </div>
        </form>
    );
};
