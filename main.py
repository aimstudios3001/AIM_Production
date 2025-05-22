from fastapi import FastAPI
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.responses import FileResponse

app = FastAPI()

# Set css and js file for all web pages
app.mount("/static", StaticFiles(directory="static"), name="static")

# Index page View
@app.get("/")
async def read_root():
    return FileResponse("templates/index.html")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# EasySoft page Link
@app.get("/EasySoft")
async def read_root():
    return FileResponse("templates/EasySoft.html")

@app.get("/EasySoft", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("EasySoft.html", {"request": request})

# NPKShehan page Link 
@app.get("/NPKShehan")
async def read_root():
    return FileResponse("templates/NPKShehan.html")

@app.get("/NPKShehan", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("NPKShehan.html", {"request": request})

# GPlusStudio page Link 
@app.get("/GPlusStudio")
async def read_root():
    return FileResponse("templates/GPlusStudio.html")

@app.get("/GPlusStudio", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("GPlusStudio.html", {"request": request})

# GamingBuddy page Link 
@app.get("/GamingBuddy")
async def read_root():
    return FileResponse("templates/GamingBuddy.html")

@app.get("/GamingBuddy", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("GamingBuddy.html", {"request": request})