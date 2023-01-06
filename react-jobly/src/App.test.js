import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

test("renders", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});
