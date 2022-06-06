import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Index from "../src/Pages/Index";
import Home from "../src/Pages/Home";
import NotFound from "../src/Pages/NotFound";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/home" component={Home} />
        <Route path="/*" component={NotFound} />
      </switch>
    </HashRouter>
  );
};
