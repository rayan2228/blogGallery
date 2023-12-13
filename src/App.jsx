import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/blog/:blogid" element={<SingleBlog />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
