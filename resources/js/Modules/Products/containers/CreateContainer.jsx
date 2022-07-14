import { CreateView } from "@/Modules/Products/views/CreateView";
import { Page } from "@/Layouts/App";

export const CreateContainer = (props) => {
	return (
		<Page title="Novo Produto">
			<CreateView {...props} />
		</Page>
	);
};
