import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

function App() {

  return (
    <>
      <MantineProvider>
      <RouterProvider router={routes} />
    </MantineProvider>
    </>
  );
}

export default App;
