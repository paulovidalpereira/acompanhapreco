import { Input, Label } from "@/Components/Form";
import { Button } from "@/Components/Button";

export const ProductForm = ({
    data,
    errors,
    processing,
    handleSubmit,
    handleChange,
    sources,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <Label forInput="name">Produto:</Label>
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
                <Label forInput="url">URL:</Label>
                <Input
                    type="text"
                    name="url"
                    id="url"
                    value={data.url}
                    handleChange={handleChange}
                />
                {errors.url && (
                    <div className="text-red-500 text-sm">{errors.url}</div>
                )}
            </div>
            <div className="form-field">
                <Label forInput="store_id">Loja:</Label>
                <select
                    name="store_id"
                    id="store_id"
                    className="form-input"
                    value={data.store_id || ""}
                    onChange={handleChange}
                >
                    <option value=""></option>
                    {sources.stores.map((store) => (
                        <option value={store.id} key={store.id}>
                            {store.name}
                        </option>
                    ))}
                </select>
                {errors.status && (
                    <div className="text-red-500 text-sm">{errors.status}</div>
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
