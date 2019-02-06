import Examples from "layouts/Examples";
import HelloWorld from "layouts/HelloWorld";

// please notice the sequence & path
const indexRoutes = [
    {
        path: "/examples",
        component: Examples,
    },
    {
        path: "/",
        component: HelloWorld,
    },
];

export default indexRoutes;
