import { useState } from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    Dropdown,
    DropdownButton,
    DropdownContent,
    DropdownItem,
} from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppHeader = () => {
    const { auth } = usePage().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="app-header">
            <div className="mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                            </Link>
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                href={route("products.index")}
                                active={route().current("products.index")}
                            >
                                Produtos
                            </NavLink>
                            <NavLink
                                href={route("stores.index")}
                                active={route().current("stores.index")}
                            >
                                Lojas
                            </NavLink>
                        </div>
                        <form>
                            <input type="teste" />
                        </form>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <NavLink>Sistema</NavLink>
                        <div className="ml-3 relative">
                            <Dropdown>
                                <DropdownButton>
                                    {auth.user.name}
                                </DropdownButton>
                                <DropdownContent>
                                    <DropdownItem
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">
                            {auth.user.name}
                        </div>
                        <div className="font-medium text-sm text-gray-500">
                            {auth.user.email}
                        </div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export const Page = ({ title, Sidebar, Actions, children }) => {
    return (
        <div className="page">
            {Sidebar && <div className="page-sidebar">page-sidebar</div>}
            <div className="page-wrapper">
                {title && (
                    <header className="page-header">
                        <Head title={title} />
                        <h1 className="page-title">{title}</h1>
                        {Actions && (
                            <div className="page-actions">
                                <Actions />
                            </div>
                        )}
                    </header>
                )}
                <main className="page-content p-0">{children}</main>
            </div>
        </div>
    );
};

export const App = ({ title, Sidebar, Actions, children }) => {
    return (
        <>
            <div className="app">
                <AppHeader />
                <div className="app-wrapper">
                    <div className="app-main">{children}</div>
                </div>
            </div>
            <ToastContainer
                position="bottom-center"
                // theme="colored"
                // hideProgressBar
                pauseOnFocusLoss={false}
                transition={Slide}
            />
        </>
    );
};
