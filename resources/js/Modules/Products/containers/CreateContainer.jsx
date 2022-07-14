import { Page } from "@/Layouts/App";
import { CreateView } from ".../views/CreateView";

export const CreateContainer = (props) => {
	return (
		<Page title="Novo Produto">
			<CreateView {...props} />
		</Page>
	);
};
