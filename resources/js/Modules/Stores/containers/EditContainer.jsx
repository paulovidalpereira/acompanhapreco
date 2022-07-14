import { Page } from "@/Layouts/App";
import { EditView } from "../views/EditView";

export const EditContainer = (props) => {
	return (
		<Page title="Editar Loja">
			<EditView {...props} />
		</Page>
	);
};
