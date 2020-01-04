import React from "react"
import NotFoundPage from "./NotFoundPage"
import languageVariants from "./languageVariants.json"
import { styles as globalStyles } from "../../utils"
import * as componentStyles from "./NotFoundStyles"

const NotFound = () => {
  return (
    <NotFoundPage
      languageVariants={languageVariants}
      globalStyles={globalStyles}
      componentStyles={componentStyles}
    />
  )
}

export default NotFound
