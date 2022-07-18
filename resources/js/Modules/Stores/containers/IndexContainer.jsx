import { Page } from "@/Layouts/App";
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
