import { Page } from "@/Layouts/App";
import { EditView } from "../views/EditView";
import { FormViewModel } from "../views/FormViewModel";

export const EditContainer = ({ store }) => {
	const { data, errors, processing, onHandleChange, onHandleUpdateSubmit } =
		FormViewModel(store);

	return (
		<Page title="Editar Loja">
			<EditView
				data={data}
				errors={errors}
				processing={processing}
				onHandleChange={onHandleChange}
				onHandleSubmit={onHandleUpdateSubmit}
			/>
		</Page>
	);
};
