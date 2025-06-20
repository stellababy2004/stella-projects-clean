from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import ollama

app = FastAPI()

# Позволяваме заявки от всички сайтове (за тестове)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str

@app.post("/chat")
def chat_api(msg: Message):
    response = ollama.chat(
        model="gemma:2b",  # или друг модел, който имаш
        messages=[{"role": "user", "content": msg.message}]
    )
    return {"response": response['message']['content']}