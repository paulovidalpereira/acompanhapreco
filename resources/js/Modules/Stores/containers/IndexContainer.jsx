import { Link } from "@inertiajs/inertia-react";
import { Page } from "@/Layouts/App";
import { FiIcon } from "@/Components/FiIcon";
import { IndexView } from "../views/IndexView";
import { IndexViewModel } from "../views/IndexViewModel";

export const IndexContainer = ({ stores }) => {
    const { columns, lineActions, Actions } = IndexViewModel();

    return (
        <Page title="Gerenciar Lojas" Actions={Actions}>
            <IndexView
                stores={stores}
                columns={columns}
                lineActions={lineActions}
                Actions={Actions}
            />
        </Page>
    );
};
