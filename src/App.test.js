import { render, screen } from "@testing-library/react";
import App from "./App";

test("Kiểm tra màn hình hiện chữ Kết quả không", () => {
  render(<App />);
  const linkElement = screen.getByText(/kết quả/i);
  expect(linkElement).toBeInTheDocument();
});
