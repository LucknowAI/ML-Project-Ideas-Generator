from langchain_core.prompts import PromptTemplate

prompt_template = PromptTemplate.from_template(
    "Suggest a final a year project a student having these details: Student name: {name}, Study year: {year}, university: {university}, python: {python}, java: {java}, webdev: {webdev}, ml: {ml}, projectType: {projectType}, projectArea: {projectArea}, projectDescription: {projectDescription}"
)
