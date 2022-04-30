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

export default { navItems };
