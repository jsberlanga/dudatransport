import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import "@testing-library/jest-dom/extend-expect"
import Form from "./Form"

expect.extend(toHaveNoViolations)

const mockSuccessResponse = {}
const mockJsonPromise = Promise.resolve(mockSuccessResponse) // 2
const mockFetchPromise = Promise.resolve({
  // 3
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
  it("submits the form", () => {
    const { debug, getByText } = render(<Form {...props} />)
    const button = getByText(/send/i)
    fireEvent.click(button)
    debug()
  })
})
