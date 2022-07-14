import { withAppLayout } from "@/hoc/withAppLayout";
import { EditView } from "@/Modules/Stores/views/EditView";

const Edit = (props) => {
    return <EditView {...props} />;
};

export default withAppLayout(Edit, "Editar Loja");
