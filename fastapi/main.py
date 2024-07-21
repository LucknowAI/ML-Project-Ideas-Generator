from fastapi import FastAPI, Form
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to allow only specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class FormData(BaseModel):
    name: str
    year: str
    university: str
    python: str
    java: str
    webdev: str
    ml: str
    projectType: str
    projectArea: str
    projectDescription: str


@app.post("/process-form/")
async def process_form(data: FormData):
    # Process the data (e.g., save to database, perform analysis)
    # For simplicity, we'll just return the received data
    print(data)
    return data
