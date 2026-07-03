from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.feedback import Feedback

router = APIRouter(prefix="/analytics", tags=["Analytics"])


@router.get("/")
def analytics(db: Session = Depends(get_db)):
    total = db.query(Feedback).count()

    category_rows = (
        db.query(
            Feedback.category,
            func.count(Feedback.id)
        )
        .group_by(Feedback.category)
        .all()
    )

    categories = [
        {
            "category": row[0],
            "count": row[1]
        }
        for row in category_rows
    ]

    recent_feedback = db.query(Feedback).order_by(
        Feedback.id.desc()
    ).limit(5).all()

    recent = []

    for item in recent_feedback:
        recent.append({
            "id": item.id,
            "name": item.name,
            "email": item.email,
            "category": item.category,
            "comments": item.comments
        })

    return {
        "total": total,
        "categories": categories,
        "recent": recent
    }