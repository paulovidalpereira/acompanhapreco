import { withAppLayout } from "@/hoc/withAppLayout";
import { CreateContainer } from "@/Modules/Products/containers/CreateContainer";

const Create = (props) => {
    return <CreateContainer {...props} />;
};

export default withAppLayout(Create);
