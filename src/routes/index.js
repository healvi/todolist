import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Details from "../pages/Details";

export const Routers = () => {
  return (
    <Router>
        <Routes>
        <Route
            path="/"
            exact
            element={
                <Home />
            }
          />
        <Route
            path="/detail/:id"
            exact
            element={
                <Details />
            }
          />
          <Route
            path="*"
            element={
                <NotFound />
            }
          />
        </Routes>
    </Router>
  );
};
