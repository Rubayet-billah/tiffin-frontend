import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <div data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
