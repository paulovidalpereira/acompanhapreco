import { withAppLayout } from "@/hoc/withAppLayout";
import { Page } from "@/Layouts/App";
import { toast } from "react-toastify";

const Dashboard = (props) => {
    const notify = () => toast("Wow so easy !");
    return <Page title="Dashboard">{/*<div></div>*/}</Page>;
};

export default withAppLayout(Dashboard);
