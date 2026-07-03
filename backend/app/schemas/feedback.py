from pydantic import BaseModel


class FeedbackCreate(BaseModel):
    name: str
    email: str
    category: str
    comments: str


class FeedbackResponse(FeedbackCreate):
    id: int

    class Config:
        from_attributes = True