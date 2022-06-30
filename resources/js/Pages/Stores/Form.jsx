import React from 'react'

export const Form = ({formData, errors, handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label className="form-label">Loja:</label>
                <input name="name" id="name" className="form-input" value={formData.name} onChange={handleChange} />
                {errors.name && <div class="text-red-500 text-sm">{errors.name}</div>}
            </div>
            <div className="form-field">
                <label className="form-label">Url:</label>
                <input name="url" id="url" className="form-input" value={formData.url} onChange={handleChange} />
                {errors.url && <div class="text-red-500 text-sm">{errors.url}</div>}
            </div>
            <div className="form-field">
                <label className="form-label">Class:</label>
                <input name="class" id="class" className="form-input" value={formData.class} onChange={handleChange} />
                {errors.class && <div class="text-red-500 text-sm">{errors.class}</div>}
            </div>
            <div>
                <button type="submit" className="btn">Salvar</button>
            </div>
        </form>
    )
}
