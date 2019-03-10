import React from 'react';
import Loadable from "react-loadable";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
// import DashboardPage from "views/Examples/Dashboard";
import UserProfile from "views/Examples/UserProfile";
import TableList from "views/Examples/TableList";
import Typography from "views/Examples/Typography";
import Icons from "views/Examples/Icons";
import Maps from "views/Examples/Maps";
import NotificationsPage from "views/Examples/Notifications";
import UpgradeToPro from "views/Examples/UpgradeToPro";

const DashboardPage = Loadable({
  loader: () => import("views/Examples/Dashboard"),
  loading() {
    return <div></div>
  }
})

const dashboardRoutes = [
  {
    path: "/info",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile,
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList,
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography,
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons,
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps,
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    sink: false,
  },
  {
    path: "/try-redirect",
    sidebarName: "[[Redirect]]",
    navbarName: "[[Redirect]]",
    icon: Notifications,
    component: NotificationsPage,
    sink: false,
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    sink: true,
  },
  { redirect: true, path: "/", to: "/info", navbarName: "Redirect" }
];

export default dashboardRoutes;
