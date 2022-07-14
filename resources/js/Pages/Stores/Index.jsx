import { withAppLayout } from "@/hoc/withAppLayout";
import { IndexContainer } from "@/Modules/Stores/containers/IndexContainer";

const Index = (props) => {
    return <IndexContainer {...props} />;
};

export default withAppLayout(Index);
