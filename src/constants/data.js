import { icons } from "../components";

const { DashIcon, InventoryIcon, SettingsIcon, DocumentsIcon } = icons;

const navItems = [
  {
    title: "Dashboard",
    icon: <DashIcon />,
    route: "/",
  },
  {
    title: "Inventory",
    icon: <InventoryIcon />,
    route: "/inventory",
  },
  {
    title: "Documents",
    icon: <DocumentsIcon />,
    route: "/documents",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    route: "/settings",
  },
];

const dashBoardData = [
  {
    title: "Summary",
    icon: <InventoryIcon />,
    text_1: "$2,12,200.10",
    text_2: "100",
  },
  {
    title: "Total out of stock",
    icon: <InventoryIcon />,
    text_1: "30",
  },
  {
    title: "Order made",
    icon: <InventoryIcon />,
    text_1: "$2030.10",
    text_2: "10",
  },
];

export default { navItems, dashBoardData };
