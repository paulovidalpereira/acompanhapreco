import { withAppLayout } from "@/hoc/withAppLayout";
import { IndexView } from "@/Modules/Stores/views/IndexView";

const Index = (props) => {
    return <IndexView {...props} />;
};

export default withAppLayout(Index, "Gerenciar Lojas");
