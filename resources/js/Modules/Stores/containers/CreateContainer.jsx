import { Page } from "@/Layouts/App";
import { CreateView } from "../views/CreateView";
import { ViewModel } from "../views/ViewModel";

export const CreateContainer = (props) => {
	const { data, errors, processing, onHandleChange, onHandleCreateSubmit } =
		ViewModel({ name: "", domain: "", class: "", status: 0 });

	return (
		<Page title="Nova Loja">
			<CreateView
				data={data}
				errors={errors}
				processing={processing}
				onHandleChange={onHandleChange}
				onHandleSubmit={onHandleCreateSubmit}
			/>
		</Page>
	);
};
