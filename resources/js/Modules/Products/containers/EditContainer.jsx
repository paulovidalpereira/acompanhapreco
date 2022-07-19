import { Page } from "@/Layouts/App";
import { EditView } from "../views/EditView";
import { FormViewModel } from "../views/FormViewModel";

export const EditContainer = ({ product, stores }) => {
	const { data, errors, processing, onHandleChange, onHandleUpdateSubmit } =
		FormViewModel(product);

	return (
		<Page title="Editar Produto">
			<EditView
				data={data}
				errors={errors}
				processing={processing}
				onHandleChange={onHandleChange}
				onHandleSubmit={onHandleUpdateSubmit}
				stores={stores}
			/>
		</Page>
	);
};
