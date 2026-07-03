from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models.feedback import Feedback

from app.routers.feedback import router as feedback_router
from app.routers.analytics import router as analytics_router

app = FastAPI(
    title="Acowale CRM API",
    version="1.0.0",
    description="Customer Feedback Platform API"
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(feedback_router)
app.include_router(analytics_router)

@app.get("/")
def root():
    return {
        "message": "Acowale CRM API is running 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }