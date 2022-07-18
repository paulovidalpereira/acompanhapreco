import { Page } from "@/Layouts/App";
import { EditView } from "../views/EditView";
import { ViewModel } from "../views/ViewModel";

export const EditContainer = ({ product, stores }) => {
	const { data, errors, processing, onHandleChange, onHandleUpdateSubmit } =
		ViewModel(product);

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
