import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "@/app/login/page";

describe("Login", () => {
  it("renders a form with email and password inputs", () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(<Login />);

    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
  });

  it("renders an error message when the form is submitted with an invalid email", () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    // Submit the form with an invalid email
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword123" } });
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText("Invalid email or password");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders an error message when the form is submitted with an invalid password", () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    // Submit the form with an invalid password
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText("Invalid email or password");
    expect(errorMessage).toBeInTheDocument();
  });
});
