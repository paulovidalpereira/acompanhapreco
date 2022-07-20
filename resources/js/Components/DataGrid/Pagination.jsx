import { Link } from "@inertiajs/inertia-react";
import classNames from "classnames";
import { FiIcon } from "@/Components/FiIcon";

export const Pagination = ({ page, dataKey, perPage = 20 }) => {
    const { links } = page;
    return (
        <div>
            Página{" "}
            <Link
                as="button"
                href={page.prev_page_url}
                className="btn btn--small"
                disabled={page.current_page === 1}
                only={[dataKey]}
            >
                <FiIcon as="FiChevronLeft" />
            </Link>{" "}
            {page.current_page}{" "}
            <Link
                as="button"
                href={page.next_page_url}
                className="btn btn--small"
                disabled={page.current_page === page.last_page}
                only={[dataKey]}
            >
                <FiIcon as="FiChevronRight" />
            </Link>{" "}
            de {page.last_page} páginas
            {" | "}
            Exibir {perPage} por página
            {" | "}
            Total de {page.total} registros encontrados
        </div>
    );
};
