import { Page } from "@/Layouts/App";
import { IndexView } from "../views/IndexView";

const Actions = () => {
	return (
		<button className="btn btn--primary" type="button">
			Nova Loja
		</button>
	);
};

export const IndexContainer = (props) => {
	return (
		<Page title="Gerenciar Lojas" Actions={Actions}>
			<IndexView {...props} />
		</Page>
	);
};
