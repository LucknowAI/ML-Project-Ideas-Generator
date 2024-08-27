import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers.string import StrOutputParser
from operator import itemgetter
from chain import prompt_template

load_dotenv()


class Wrap:
    def __init__(self, api_key=None):
        api_key = api_key
        llm = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=api_key)
        self.chain = prompt_template | llm | StrOutputParser()

    def generate_text(self, prompt):
        return self.chain.invoke(prompt)
