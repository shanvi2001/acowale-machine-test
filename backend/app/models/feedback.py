from sqlalchemy import Column, Integer, String, Text
from app.database import Base


class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(150))
    category = Column(String(50))
    comments = Column(Text)