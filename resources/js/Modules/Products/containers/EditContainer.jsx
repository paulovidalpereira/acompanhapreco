import { Page } from "@/Layouts/App";
import { EditView } from "../views/EditView";

export const EditContainer = (props) => {
	return (
		<Page title="Editar Produto">
			<EditView {...props} />
		</Page>
	);
};
