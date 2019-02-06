// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import CastConnected from "@material-ui/icons/CastConnected";
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views
import Typography from "views/Examples/Typography";
import HelloWorld from "views/HelloWorld";

// If you need to find some more icons, please refer to list link:
// https://material.io/tools/icons

const helloWorldRoutes = [
    {
        path: "/hello-world",
        sidebarName: "Hello, World!",
        navbarName: "Hello, World!",
        icon: CastConnected,
        component: HelloWorld,
    },
    {
        path: "/typography",
        sidebarName: "Typography",
        navbarName: "Typography",
        icon: LibraryBooks,
        component: Typography,
    },
    {
        redirect: true,
        path: "/examples",
        to: "/examples",
        sidebarName: "Examples",
        navbarName: "Redirect to Material Dashboard",
        icon: Dashboard,
        display: true,
    },
    { redirect: true, path: "/", to: "/hello-world", navbarName: "Redirect" }
];

export default helloWorldRoutes;
