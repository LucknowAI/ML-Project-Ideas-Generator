from langchain_google_genai import ChatGoogleGenerativeAI

llm = ChatGoogleGenerativeAI(model="gemini-pro")
a = llm.invoke("Sing a ballad of LangChain.")
print(a)
