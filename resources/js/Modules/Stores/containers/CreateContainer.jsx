import { Page } from "@/Layouts/App";
import { CreateView } from "../views/CreateView";
import { FormViewModel } from "../views/FormViewModel";

export const CreateContainer = () => {
	const { data, errors, processing, onHandleChange, onHandleCreateSubmit } =
		FormViewModel();

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
