import React, { useEffect, useState, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAgain, setShowAgain] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    feedback: "",
    rating: "",
  });
  const [errors, setErrors] = useState({ email: "", feedback: "", rating: "" });
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);
  const thankYouRef = useRef(null);

  useEffect(() => {
    if (showAgain) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // Show modal after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showAgain]);

  const handleClose = () => {
    setIsOpen(false);
    setShowAgain(false); // Prevent showing again after cancel
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (
      !validationErrors.email &&
      !validationErrors.feedback &&
      !validationErrors.rating
    ) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      // Reset form after submission
      setFormData({ email: "", feedback: "", rating: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const newErrors = { email: "", feedback: "", rating: "" };
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.feedback) newErrors.feedback = "Feedback is required.";
    if (!formData.rating) newErrors.rating = "Please rate your experience.";
    return newErrors; // Return errors to be used in handleSubmit
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (value) => {
    setFormData({ ...formData, rating: value });
    setErrors((prev) => ({ ...prev, rating: "" })); // Clear error for rating
  };

  const handleOutsideClick = (e) => {
    if (
      (modalRef.current && !modalRef.current.contains(e.target)) ||
      (thankYouRef.current && !thankYouRef.current.contains(e.target))
    ) {
      handleClose(); // Hide feedback modal and reset state
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {isOpen && !submitted && (
        <div
          ref={modalRef}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                  We value your feedback!
                </h1>
                <p className="mt-2 text-gray-500">
                  Please let us know how we can improve.
                </p>
              </div>
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="relative mt-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className={`peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out"
                    >
                      Email Address
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div className="relative mt-6">
                    <textarea
                      name="feedback"
                      id="feedback"
                      placeholder="Your Feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      className={`peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none ${
                        errors.feedback ? "border-red-500" : ""
                      }`}
                      rows="4"
                      required
                    />
                    <label
                      htmlFor="feedback"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out"
                    >
                      Your Feedback
                    </label>
                    {errors.feedback && (
                      <p className="text-red-500 text-sm">{errors.feedback}</p>
                    )}
                  </div>
                  <div className="my-6">
                    <label className="block text-sm text-gray-700">
                      Rate your experience:
                    </label>
                    <div className="flex space-x-2 mt-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <label
                          key={value}
                          className="cursor-pointer"
                          onClick={() => handleRatingChange(value)}
                        >
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
                  <div className="my-6">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                    >
                      Submit Feedback
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="text-gray-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div
            ref={thankYouRef}
            className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10"
          >
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Thank You!
              </h1>
              <p className="mt-2 text-gray-500">
                Your feedback has been submitted successfully.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 text-blue-500 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackModal;
