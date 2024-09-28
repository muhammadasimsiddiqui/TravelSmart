import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import feedbackIcon from "/img/banner/feedback.png"; // Adjust your image path as necessary

const FeedBack = () => {
  const [formData, setFormData] = useState({
    email: "",
    feedback: "",
    rating: "",
  });
  const [errors, setErrors] = useState({ email: "", feedback: "", rating: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (
      !validationErrors.email &&
      !validationErrors.feedback &&
      !validationErrors.rating
    ) {
      console.log("Form submitted:", formData);
      localStorage.setItem("feedback", JSON.stringify(formData));
      setSubmitted(true);
      setFormData({ email: "", feedback: "", rating: "" });
      setErrors({ email: "", feedback: "", rating: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const newErrors = { email: "", feedback: "", rating: "" };
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.feedback) newErrors.feedback = "Feedback is required.";
    if (!formData.rating) newErrors.rating = "Please rate your experience.";
    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear corresponding error message
    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    if (name === "feedback") {
      setErrors((prev) => ({ ...prev, feedback: "" }));
    }
    if (name === "rating") {
      setErrors((prev) => ({ ...prev, rating: "" }));
    }
  };

  const handleRatingChange = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
    setErrors((prev) => ({ ...prev, rating: "" })); // Clear error message
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gray-50 mt-16">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-4">
          We value your feedback!
        </h1>
        <p className="mt-2 text-gray-500 text-center mb-6">
          Please let us know how we can improve.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              className={`peer w-full border-b-2 px-0 py-2 placeholder:text-transparent focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              autoComplete="off"
              required
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute top-0 left-0 transform -translate-y-4 scale-75 text-gray-600 transition-all duration-200 ease-in-out"
            >
              Email Address
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="relative">
            <textarea
              name="feedback"
              id="feedback"
              placeholder=" "
              value={formData.feedback}
              onChange={handleChange}
              className={`peer w-full border-b-2 px-0 py-2 placeholder:text-transparent focus:outline-none ${
                errors.feedback ? "border-red-500" : "border-gray-300"
              }`}
              rows="4"
              required
            />
            <label
              htmlFor="feedback"
              className="pointer-events-none absolute top-0 left-0 transform -translate-y-4 scale-75 text-gray-600 transition-all duration-200 ease-in-out"
            >
              Your Feedback
            </label>
            {errors.feedback && (
              <p className="text-red-500 text-sm">{errors.feedback}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Rate your experience:
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    onChange={() => handleRatingChange(value)}
                    className="hidden"
                  />
                  <i
                    className={`fas fa-star text-2xl ${
                      formData.rating >= value
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  ></i>
                </label>
              ))}
            </div>
            {errors.rating && (
              <p className="text-red-500 text-sm">{errors.rating}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition duration-200"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
      <div className="hidden md:block w-1/2 p-6">
        <img
          src={feedbackIcon}
          alt="Feedback Icon"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      {submitted && (
        <div className="mt-6 w-full max-w-lg bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Thank You!</h1>
          <p className="mt-2 text-gray-500">
            Your feedback has been submitted successfully.
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
