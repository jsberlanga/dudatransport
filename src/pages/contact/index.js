import React from "react"
import ContactPage from "./ContactPage"
import languageVariants from "./languageVariants.json"
import { styles as globalStyles } from "../../utils"
import * as componentStyles from "./ContactStyles"

const Contact = () => {
  return (
    <ContactPage
      languageVariants={languageVariants}
      globalStyles={globalStyles}
      componentStyles={componentStyles}
    />
  )
}

export default Contact
