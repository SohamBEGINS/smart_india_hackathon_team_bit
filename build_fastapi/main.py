from fastapi import FastAPI

# app = FastAPI()# created an fastapi instance
my_first_api = FastAPI()
@my_first_api.get("/")
async def root():
    return{"message":"Hello world from FASTAPI"}
