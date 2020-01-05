import React from "react"
import ServicesPage from "./ServicesPage"
import languageVariants from "./languageVariants.json"
import { styles as globalStyles } from "../../utils"
import * as componentStyles from "./ServicesStyles"

const Services = () => {
  return (
    <ServicesPage
      languageVariants={languageVariants}
      globalStyles={globalStyles}
      componentStyles={componentStyles}
    />
  )
}

export default Services
