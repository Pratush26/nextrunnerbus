"use client";
import React, { useState } from "react";

export default function FeedbackForm() {
  const [activeForm, setActiveForm] = useState("complaint"); // State to toggle between forms
  const [complaint, setComplaint] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    console.log({ complaint });
    setComplaint("");
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, feedback });
    setRating(0);
    setFeedback("");
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="flex flex-col items-center justify-center px-8 py-6 bg-gray-900 rounded-2xl sm:w-3/4 w-11/12 my-5 sm:mx-auto">
      <div className="flex gap-5 mb-4">
        <button
          onClick={() => setActiveForm("complaint")}
          className={`px-4 py-2 hover:scale-105 transition duration-200 rounded-lg ${
            activeForm === "complaint" ? "bg-cyan-600 font-bold text-white" : "bg-gray-800"
          }`}
        >
          Complaint
        </button>
        <button
          onClick={() => setActiveForm("rating")}
          className={`px-4 py-2 hover:scale-105 transition duration-200 rounded-lg ${
            activeForm === "rating" ? "bg-cyan-600 font-bold text-white" : "bg-gray-800"
          }`}
        >
          Rating
        </button>
      </div>

      {activeForm === "complaint" && (
        <form onSubmit={handleComplaintSubmit} className="flex flex-col gap-4 w-full">
          <textarea
            placeholder="Your Complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            className="p-2 rounded-md border bg-gray-300 text-black border-gray-800 focus:outline-none focus:ring focus:ring-cyan-800 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-700 text-white font-bold p-2 rounded-md hover:bg-cyan-800 transition duration-200"
          >
            Submit Complaint
          </button>
        </form>
      )}

      {activeForm === "rating" && (
        <form onSubmit={handleRatingSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleStarClick(star)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={star <= rating ? "gold" : "gray"}
                className="w-8 h-8 cursor-pointer"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <textarea
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="p-2 rounded-md border bg-gray-300 text-black border-gray-800 focus:outline-none focus:ring focus:ring-cyan-800 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-700 text-white font-bold p-2 rounded-md hover:bg-cyan-800 transition duration-200"
          >
            Submit Rating
          </button>
        </form>
      )}
    </div>
  );
}