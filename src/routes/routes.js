import FormSearch from "../components/Form";
import Search from "../components/Search";
const routes = [
	{
		layout: "/search/:type/:document",
		component: Search
	},
	{
		layout: "/",
		component: FormSearch
	}
];

export default routes;
