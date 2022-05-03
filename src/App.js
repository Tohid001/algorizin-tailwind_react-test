import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import vhAdjustment from "./vhAdjustment.js";

import {
  Layout,
  Dashboard,
  Inventory,
  Documents,
  Settings,
} from "./containers";

function App() {
  useEffect(vhAdjustment, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="documents" element={<Documents />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
