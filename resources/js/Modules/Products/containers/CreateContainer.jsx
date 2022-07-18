import { Page } from "@/Layouts/App";
import { CreateView } from "../views/CreateView";
import { ViewModel } from "../views/ViewModel";

export const CreateContainer = ({ stores }) => {
	const { data, errors, processing, onHandleChange, onHandleCreateSubmit } =
		ViewModel({ name: "", domain: "", class: "", status: 0 });

	return (
		<Page title="Novo Produto">
			<CreateView
				data={data}
				errors={errors}
				processing={processing}
				onHandleChange={onHandleChange}
				onHandleSubmit={onHandleCreateSubmit}
				stores={stores}
			/>
		</Page>
	);
};
