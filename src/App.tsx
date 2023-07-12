import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { RootLayout } from "./components/RootLayout/RootLayout.tsx";
import { Homepage } from "./components/Homepage/Homepage.tsx";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<RootLayout />}>
      <Route index element={<Homepage />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className={"app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
