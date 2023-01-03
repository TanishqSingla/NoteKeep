import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, test, vitest } from "vitest";
import CreateNote from "../components/CreateNote/CreateNote";

/* @vitest-environment jsdom */

describe("Create Note", () => {
  const mockedOnAdd = vitest.fn();
  test("Able to type input",async () => {
    render(<CreateNote onAdd={mockedOnAdd} />);
    const inputElement = screen.getByPlaceholderText("Title") as HTMLInputElement;
    fireEvent.change(inputElement, {target: {value: "Test title"}});
    expect(inputElement.value).toBe("Test title");
  });
});