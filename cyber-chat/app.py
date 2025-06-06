from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import ollama

app = FastAPI()

# Разрешаваме CORS от всички домейни (за по-лесно)
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
def chat(msg: Message):
    response = ollama.chat(
        model="gemma:2b",
        messages=[{"role": "user", "content": msg.message}]
    )
    return {"response": response['message']['content']}
