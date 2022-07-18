import { Page } from "@/Layouts/App";
import { CreateView } from "../views/CreateView";
import { FormViewModel } from "../views/FormViewModel";

export const CreateContainer = (props) => {
	const { data, errors, processing, onHandleChange, onHandleCreateSubmit } =
		FormViewModel({ name: "", domain: "", class: "", status: 0 });

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
