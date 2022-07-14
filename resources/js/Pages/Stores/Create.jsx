import { withAppLayout } from "@/hoc/withAppLayout";
import { CreateView } from "@/Modules/Stores/views/CreateView";

const Create = (props) => {
    return <CreateView {...props} />;
};

export default withAppLayout(Create, "Nova Loja");
