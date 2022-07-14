import { App } from "@/Layouts/App";

export const withAppLayout = (Page) => {
	Page.layout = (page) => <App>{page}</App>;

	return Page;
};
