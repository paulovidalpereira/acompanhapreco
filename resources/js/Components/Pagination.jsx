import { Link } from "@inertiajs/inertia-react";
import classNames from "classnames";

export const Pagination = ({ page }) => {
    const { links } = page;
    return (
        <div className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px gap-1">
            {links.map((link) => {
                const btnClass = classNames({
                    btn: true,
                    "hover:bg-gray-50": link.url,
                    "btn--active": link.active,
                });
                return (
                    <Link
                        href={link.url}
                        key={link.label}
                        method="get"
                        only={["stores"]}
                        className={btnClass}
                        disabled={link.url === null ? true : false}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
};
