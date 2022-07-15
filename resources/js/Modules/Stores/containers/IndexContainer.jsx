import { Link } from "@inertiajs/inertia-react";
import { Page } from "@/Layouts/App";
import { FiIcon } from "@/Components/FiIcon";
import { IndexView } from "../views/IndexView";

const Actions = () => {
    return (
        <Link
            as="button"
            href={route("stores.create")}
            className="btn btn--primary"
        >
            <FiIcon as="FiPlusSquare" /> <span>Nova Loja</span>
        </Link>
    );
};

export const IndexContainer = ({ stores }) => {
    return (
        <Page title="Gerenciar Lojas" Actions={Actions}>
            <IndexView stores={stores} />
        </Page>
    );
};
