import React from "react"
import { render } from "@testing-library/react"
import About from "."

describe("<About />", () => {
  it("renders correctly", () => {
    const { container } = render(<About />)

    expect(container).toMatchSnapshot()
  })
})
