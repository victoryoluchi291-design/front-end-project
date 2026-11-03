import { useParams, Link } from "react-router-dom";
import { Avatar, Typography, Rating, Button} from "@mui/material";
import cardimg from "../assets/images36.jpg";
import "./ReviewPage.css";

const sampleReviews = [
  {
    id: "1",
    firstName: "John",
    lastName: "Smith",
    rating: 5,
    review:
      "I have had a wonderful experience using this platform. The surveys are easy to understand, and I enjoy sharing my opinions. It is a great way to spend my free time productively.",
  },
  {
    id: "2",
    firstName: "Sarah",
    lastName: "Johnson",
    rating: 5,
    review:
      "This platform has made earning extra money more interesting for me. I like how simple it is to explore available surveys and participate whenever I have free time.",
  },
  {
    id: "3",
    firstName: "Michael",
    lastName: "Brown",
    rating: 4,
    review:
      "I enjoy using this platform because it gives me an opportunity to share my opinions on different topics. The experience is straightforward, and the website is easy to navigate.",
  },
  {
    id: "4",
    firstName: "Grace",
    lastName: "Williams",
    rating: 5,
    review:
      "I appreciate how easy it is to get started. The platform offers an interesting way to participate in surveys, and I look forward to exploring more opportunities.",
  },
];

const ReviewPage = () => {
  const { id } = useParams();

 const reviewIndex = Number(id);
const review = sampleReviews[reviewIndex % sampleReviews.length];

  if (!review) {
    return <p>Review not found.</p>;
  }

  return (
    <section className="review-page">
      <div className="review-details">
        <Avatar
          src={cardimg}
          alt={`${review.firstName} profile`}
          className="review-avatar"
        />

        <Typography variant="h4">
          {review.firstName} {review.lastName}
        </Typography>

        <Rating value={review.rating} readOnly />

        <Typography className="review-writeup">
          {review.review}
        </Typography>
        <Button variant="contained"
            component={ Link } to="/"
            sx={{ mt: 3 }} 
            >
                Back to User Reviews
        </Button>

           
       
      </div>
    </section>
  );
};

export default ReviewPage;