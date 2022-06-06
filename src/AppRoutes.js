import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Index from "../src/Pages/Index";
import Home from "../src/Pages/Home";
import NotFound from "../src/Pages/NotFound";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <switch>
        <Route path="/" component={Index} />
        <Route path="/home" component={Home} />
        <Route path="/*" component={NotFound} />
      </switch>
    </HashRouter>
  );
};
