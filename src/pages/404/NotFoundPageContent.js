import React from "react"

const languageVariants = {
  ENGLISH: {
    title: "Sorry, not found",
    body: "You just hit a route that doesn't exist...",
  },
  POLISH: {
    title: "Przepraszam, nie ma",
    body: "Tego route nie ma...",
  },
}

const NotFoundPageContent = ({ language }) => {
  const selectedLanguage =
    language === "ENGLISH" ? languageVariants.ENGLISH : languageVariants.POLISH
  return (
    <>
      <h1>{selectedLanguage.title}</h1>
      <p>{selectedLanguage.body}</p>
    </>
  )
}

export default NotFoundPageContent
