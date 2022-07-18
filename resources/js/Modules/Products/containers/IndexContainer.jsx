import { Page } from "@/Layouts/App";
import { IndexView } from "../views/IndexView";
import { IndexViewModel } from "../views/IndexViewModel";

export const IndexContainer = ({ products }) => {
	const { columns, lineActions, Actions } = IndexViewModel();

	return (
		<Page title="Gerenciar Produtos" Actions={Actions}>
			<IndexView
				products={products}
				columns={columns}
				lineActions={lineActions}
				Actions={Actions}
			/>
		</Page>
	);
};
