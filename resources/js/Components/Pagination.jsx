import { Link } from '@inertiajs/inertia-react';
import classNames from 'classnames';

export const Pagination = ({ page }) => {
    const { links } = page;
    return (
        <div className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px gap-1">
            {links.map(link => {
                const btnClass = classNames({
                    'inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 select-none': true,
                    'hover:bg-gray-50': link.url,
                    'z-10 relative bg-indigo-50 border-indigo-500 text-indigo-600': link.active,
                });
                return (
                    <>
                        
                        {link.url === null ? (
                            <div className={btnClass} key={link.label}>{link.label}</div>
                        ) : (
                            <Link href={link.url}  key={link.label} method="get" className={btnClass}>{link.label}</Link>
                        )}
                    </>
                )
            })}
        </div>
    );
}
