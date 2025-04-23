import React from "react";
import "../assets/styles/feedback.css"
import {IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5"
import { FaRegUser } from "react-icons/fa6";

const reviews = [
  {
    name: "Ayesha K.",
    comment: "Loved the quality and delivery was super fast!",
    rating: 4.5
  },
  {
    name: "Zain R.",
    comment: "Amazing collection. Will definitely shop again!",
    rating: 4
  },
  {
    name: "Fatima N.",
    comment: "The fabric and fit are just perfect.",
    rating: 5
  }
]

function StarRating({rating}){
  const stars=[]
  for(let i=1;i <= 5;i++){
    if(rating >= i){
      stars.push(<IoStar color="gold" key={i}/>)
    }
    else if(rating >= i-0.5){
      stars.push(<IoStarHalf color="gold" key={i}/>)
    }
    else{
      stars.push(<IoStarOutline color="gold" key={i} />)
    }
  }

  return <>{stars}</>
}

function ReviewSection() {
  return(
    <div className="review-section">
      <h2> What Our Customer Says</h2>
      <div className="review-container">
        {reviews.map((review,index) => (
          <div className="review-box">
            <div className="username"> 
              <FaRegUser className="profile-pic"/>
              <p className="review-name"> {review.name} </p>
            </div>
            
            <div className="review-stars">
              <StarRating rating = {review.rating}/>
            </div>
            <p className="review-comment"> {review.comment}</p>
            
          </div>
        ))}
      </div>
    </div>
  )
}



export default ReviewSection
