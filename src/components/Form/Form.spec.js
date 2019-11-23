import React from "react"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import "@testing-library/jest-dom/extend-expect"
import Form from "./Form"

expect.extend(toHaveNoViolations)

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
})
