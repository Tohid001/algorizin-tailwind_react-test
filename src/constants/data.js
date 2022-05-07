import { icons } from "../components";

const { DashIcon, InventoryIcon, SettingsIcon, DocumentsIcon } = icons;

const today = new Date();

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

const inventoryData = [
  {
    date: "6 May 2022",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: { text: "Allright", green: true },
    quantity: "200/300",
    unitPrice: "$10",
    Amount: "$10000.00",
  },
  {
    date: "6 May 2022",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: { text: "Allright", green: true },
    quantity: "200/300",
    unitPrice: "$10",
    Amount: "$1000.00",
  },
  {
    date: "6 May 2022",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: { text: "In Progress ", green: false },
    quantity: "200/300",
    unitPrice: "$10",
    Amount: "$10000.00",
  },
  {
    date: "6 May 2022",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: { text: "Allright", green: true },
    quantity: "200/300",
    unitPrice: "$10",
    Amount: "$10000.00",
  },
  {
    date: "6 May 2022",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: { text: "In Progress ", green: false },
    quantity: "200/300",
    unitPrice: "$10",
    Amount: "$10000.00",
  },
  {
    date: "6 May 2022",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: { text: "Allright", green: true },
    quantity: "200/300",
    unitPrice: "$10",
    Amount: "$1300.00",
  },
  {
    date: "6 May 2022",
    title: "Hammer",
    details: null,
    status: { text: "Out of Stock", green: null },
    quantity: "0/300",
    unitPrice: "$0.00",
    Amount: "$10000.00",
  },
  {
    date: "6 May 2022",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: { text: "Allright", green: true },
    quantity: "200/300",
    unitPrice: "$10",
    Amount: "$1000.00",
  },
  {
    date: "6 May 2022",
    title: "Hammer",
    details: null,
    status: { text: "Out of Stock", green: null },
    quantity: "0/300",
    unitPrice: "$0.00",
    Amount: "$10000.00",
  },
  {
    date: "6 May 2022",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: { text: "Allright", green: true },
    quantity: "200/300",
    unitPrice: "$10",
    Amount: "$150.00",
  },
];

export default { navItems, dashBoardData, inventoryData };
