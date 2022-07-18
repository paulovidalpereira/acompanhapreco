import { withAppLayout } from "@/hoc/withAppLayout";
import { Page } from "@/Layouts/App";
import { toast } from "react-toastify";

const Dashboard = (props) => {
    const notify = () => toast("Wow so easy !");
    return (
        <Page title="Dashboard 123">
            <button onClick={notify}>Notify !</button>
        </Page>
    );
};

export default withAppLayout(Dashboard);
