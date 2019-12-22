import React from "react"
import userEvent from "@testing-library/user-event"
import { render, fireEvent, wait } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import "@testing-library/jest-dom/extend-expect"
import Form from "./Form"

expect.extend(toHaveNoViolations)

const mockSuccessResponse = {}
const mockJsonPromise = Promise.resolve(mockSuccessResponse) // 2
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
})
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
window.___navigate = jest.fn()

const props = {
  title: "Test Title",
  subtitle: "Test Subtitle",
}

describe("Form", () => {
  it("does not have violations", async () => {
    const { container } = render(<Form {...props} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
  it("shows alert if fields are missing", () => {
    const { getByRole } = render(<Form {...props} />)
    userEvent.click(getByRole("button"))

    expect(getByRole("alert")).toBeInTheDocument()
  })
  it("submits the form", async () => {
    const { getByLabelText, queryByRole, getByRole } = render(
      <Form {...props} />
    )
    userEvent.type(getByLabelText("name"), "test name")
    expect(getByLabelText("name").value).toBe("test name")

    userEvent.type(getByLabelText("email"), "test@email.com")
    expect(getByLabelText("email").value).toBe("test@email.com")

    userEvent.type(getByLabelText("message"), "test message")
    expect(getByLabelText("message").value).toBe("test message")

    userEvent.click(getByRole("button"))
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(queryByRole("alert")).not.toBeInTheDocument()
  })
})
