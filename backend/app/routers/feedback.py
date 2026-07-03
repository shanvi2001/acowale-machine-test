from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.feedback import Feedback
from app.schemas.feedback import FeedbackCreate

router = APIRouter(prefix="/feedback", tags=["Feedback"])


@router.post("/")
def create_feedback(data: FeedbackCreate, db: Session = Depends(get_db)):
    feedback = Feedback(
        name=data.name,
        email=data.email,
        category=data.category,
        comments=data.comments
    )

    db.add(feedback)
    db.commit()
    db.refresh(feedback)

    return {
        "message": "Feedback submitted successfully",
        "id": feedback.id
    }


@router.get("/")
def get_feedback(db: Session = Depends(get_db)):
    return db.query(Feedback).all()