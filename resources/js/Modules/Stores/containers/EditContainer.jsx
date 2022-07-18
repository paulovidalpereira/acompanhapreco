import { Page } from "@/Layouts/App";
import { EditView } from "../views/EditView";
import { ViewModel } from "../views/ViewModel";

export const EditContainer = ({ store }) => {
	const { data, errors, processing, onHandleChange, onHandleUpdateSubmit } =
		ViewModel(store);

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
