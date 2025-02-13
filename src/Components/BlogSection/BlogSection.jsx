import { useState } from "react";

const BlogSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      // Example: Simulating API call to save email
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscribed successfully!");
        setEmail(""); // Clear input field
      } else {
        setMessage("Subscription failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Try again.");
    }
  };

  return (
    <div className="blog-section">
      <h3>Pest Prevention Tips</h3>
      <p>Stay ahead of pests with our expert advice. Read our latest blog articles on effective pest prevention.</p>
      <form onSubmit={handleSubscribe} className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="subscribe-message">{message}</p>}
    </div>
  );
};

export default BlogSection;
