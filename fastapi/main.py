from fastapi import FastAPI, Form
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers.string import StrOutputParser


from typing import Optional, List
from wp import Wrap

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to allow only specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from typing import List


class FormData(BaseModel):
    key: str
    name: str
    year: str
    university: str
    gpa: str
    internships: str
    interestAreas: str
    specializedCourses: str
    python: str
    java: str
    webdev: str
    ml: str
    proficiency: str
    challengingProject: str
    openSource: str
    methodologies: str
    aiMlTechniques: str
    bigDataTech: str
    testing: str
    aiMlInterest: List[str] = Field(default_factory=list)
    aiMlProjects: str
    mlAlgorithms: str
    deepLearning: str
    researchInterest: str
    challenges: str
    competitions: str
    toolsPlatforms: str
    postGradRole: str
    companiesIndustries: str
    furtherStudies: str
    careerVision: str
    aiMlExcitement: str
    projectSize: str
    teamOrIndividual: str
    startupInterest: str
    projectFocus: str
    projectIndustry: str
    dataType: str
    hardwareSoftware: str
    publicationImportance: str
    problemSolving: str
    challengingTasks: str
    learningMethod: str
    comfortAmbiguity: str
    goalPreference: str
    setbacks: str
    thinkingStyle: str
    workLifeBalance: str
    otherFields: str
    globalIssues: str
    hobbies: str
    interdisciplinaryProjects: str
    inspiringCourses: str
    emergingTech: str


level = {"1": "Beginner", "2": "Intermediate", "3": "Advanced"}
course = {
    "ai": "Artificial Intelligence",
    "webApp": "Web Application",
    "mobile": "Mobile App Development",
    "dataScience": "Data Science",
    "security": "Cyber Security",
}


@app.post("/process-form/")
async def process_form(data: FormData):
    # llm = Wrap(apikey)
    # Process the data (e.g., save to database, perform analysis)
    # For simplicity, we'll just return the received data
    # data.python = level[data.python]
    # data.java = level[data.java]
    # data.webdev = level[data.webdev]
    # data.ml = level[data.ml]
    # data.projectArea = course[data.projectArea]
    # output = llm.generate_text(
    #     {
    #         "name": data.name,
    #         "year": data.year,
    #         "university": data.university,
    #         "python": data.python,
    #         "java": data.java,
    #         "webdev": data.webdev,
    #         "ml": data.ml,
    #         "projectType": data.projectType,
    #         "projectArea": data.projectArea,
    #         "projectDescription": data.projectDescription,
    #     },
    # )
    print(data)
    return data
