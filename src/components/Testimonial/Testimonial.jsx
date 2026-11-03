import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "./Testimonial.css";
import images10 from "../../assets/images10.jpg";
import images12 from "../../assets/images12.jpg";
import images35 from "../../assets/images35.jpg";
import images36 from "../../assets/images36.jpg";
const testimonialImages = [
  images10,
  images12,
  images35,
  images36,
];
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Rating,
  Button,
} from "@mui/material";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedReviews, setExpandedReviews] = useState({});

  const getReviews = async () => {
    try {
       const response = await axios.get(
        "https://students-learning-api.onrender.com/api/auth"
      );

      setReviews(
        Array.isArray(response.data)
          ? response.data
          : response.data.reviews || response.data.data || []
      );
    } catch (error) {
      console.log(error);
      setError("Unable to load reviews. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const toggleReview = (id) => {
    setExpandedReviews((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  return (
    <section className="testimonials">
      <h2 className="testimonial-heading">Reviews From Our Members</h2>

      {loading && <p>Loading reviews...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && reviews.length === 0 && (
        <p>No reviews available yet.</p>
      )}

      <div className="Testimonial-container">
        {reviews.slice(0, 4).map((review, index) => {
          const reviewId = review._id || review.id || index;

          return (
            <Card className="testimonial-card" key={reviewId}>
              <CardContent>
                <Avatar
                    className="testimonial-avatar"
                    src={review.profileImage || testimonialImages[index]}
                       alt={`${review.firstName || "Member"} profile`}
/>

                <Typography variant="h6" className="member-name">
                  {review.firstName} {review.lastName}
                </Typography>

                <Rating
                  value={Math.min(
                    5,
                    Math.max(0, Number(review.rating) || 0)
                  )}
                  readOnly
                />

                {expandedReviews[reviewId] && (
                  <Typography variant="body2" className="review-comment">
                    {review.comment || review.review}
                  </Typography>
                )}
{/* 
                <Button
                  variant="outlined"
                  onClick={() => toggleReview(reviewId)}
                >
                  {expandedReviews[reviewId] ? "Hide Review" : "Read Review"}
                </Button> */}
                <Button
                 variant="contained"
                component={Link} to={`/reviews/${index}`}
                sx={{ ml: 2 }}
                  >
                View Review
              </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;