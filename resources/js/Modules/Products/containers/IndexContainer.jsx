import { Page } from "@/Layouts/App";
import { IndexView } from "../views/IndexView";

const Actions = () => {
	return (
		<button className="btn btn--primary" type="button">
			Novo Produto
		</button>
	);
};

export const IndexContainer = (props) => {
	return (
		<Page title="Gerenciar Produtos" Actions={Actions}>
			<IndexView {...props} />
		</Page>
	);
};
