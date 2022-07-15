import { Page } from "@/Layouts/App";
import { CreateView } from "../views/CreateView";
import { ViewModel } from "../views/ViewModel";

export const CreateContainer = (props) => {
	const { data, errors, processing, onHandleSubmit, onHandleChange } =
		ViewModel({ name: "", domain: "", class: "", status: 0 });

	return (
		<Page title="Novo Produto">
			<CreateView
				data={data}
				errors={errors}
				processing={processing}
				onHandleSubmit={onHandleChange}
				onHandleChange={onHandleChange}
			/>
		</Page>
	);
};
