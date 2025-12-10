// tests/App.test.js
import { render, screen } from "@testing-library/react";
import MenuItem from "../components/MenuItem";


test("check if target is _blank", () => {
  render(<MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />);
  const elements = screen.getByText("Blog");
  const target = elements.getAttribute("target");

  expect(target).toBe("_blank");
});
test("check if target is ' '", () => {
  render(<MenuItem text="Blog" href="https://adalab.es/blog"  />);
  const elements = screen.getByText("Blog");
  const target = elements.getAttribute("target");

  expect(target).toBe("");
});