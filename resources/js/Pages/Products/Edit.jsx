import { withAppLayout } from "@/hoc/withAppLayout";
import { EditContainer } from "@/Modules/Products/containers/EditContainer";

const Edit = (props) => {
    return <EditContainer {...props} />;
};

export default withAppLayout(Edit);
