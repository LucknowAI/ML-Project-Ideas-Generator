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
    try:
        llm = Wrap(data.key)
        # Process the data (e.g., save to database, perform analysis)
        # For simplicity, we'll just return the received data
        data.python = level[data.python]
        data.java = level[data.java]
        data.webdev = level[data.webdev]
        data.ml = level[data.ml]

        output = llm.generate_text(
            {
                "name": data.name,
                "year": data.year,
                "university": data.university,
                "gpa": data.gpa,
                "internships": data.internships,
                "interestAreas": data.interestAreas,
                "specializedCourses": data.specializedCourses,
                "python": data.python,
                "java": data.java,
                "webdev": data.webdev,
                "ml": data.ml,
                "proficiency": data.proficiency,
                "challengingProject": data.challengingProject,
                "openSource": data.openSource,
                "methodologies": data.methodologies,
                "aiMlTechniques": data.aiMlTechniques,
                "bigDataTech": data.bigDataTech,
                "testing": data.testing,
                "aiMlInterest": data.aiMlInterest,
                "aiMlProjects": data.aiMlProjects,
                "mlAlgorithms": data.mlAlgorithms,
                "deepLearning": data.deepLearning,
                "researchInterest": data.researchInterest,
                "challenges": data.challenges,
                "competitions": data.competitions,
                "toolsPlatforms": data.toolsPlatforms,
                "postGradRole": data.postGradRole,
                "companiesIndustries": data.companiesIndustries,
                "furtherStudies": data.furtherStudies,
                "careerVision": data.careerVision,
                "aiMlExcitement": data.aiMlExcitement,
                "projectSize": data.projectSize,
                "teamOrIndividual": data.teamOrIndividual,
                "startupInterest": data.startupInterest,
                "projectFocus": data.projectFocus,
                "projectIndustry": data.projectIndustry,
                "dataType": data.dataType,
                "hardwareSoftware": data.hardwareSoftware,
                "publicationImportance": data.publicationImportance,
                "problemSolving": data.problemSolving,
                "challengingTasks": data.challengingTasks,
                "learningMethod": data.learningMethod,
                "comfortAmbiguity": data.comfortAmbiguity,
                "goalPreference": data.goalPreference,
                "setbacks": data.setbacks,
                "thinkingStyle": data.thinkingStyle,
                "workLifeBalance": data.workLifeBalance,
                "otherFields": data.otherFields,
                "globalIssues": data.globalIssues,
                "hobbies": data.hobbies,
                "interdisciplinaryProjects": data.interdisciplinaryProjects,
                "inspiringCourses": data.inspiringCourses,
                "emergingTech": data.emergingTech,
            }
        )

        print(output)
        return output
    except Exception as e:
        return {"error": str(e)}
