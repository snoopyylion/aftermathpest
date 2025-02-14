import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { assets } from "../../assets/assets";

const media = [
  assets.work1, assets.work2, assets.work3, assets.work4, assets.work5,
  assets.work6, assets.work7, assets.work8, assets.work9, assets.work10,
  assets.work11, assets.work12, assets.work13, assets.work14, assets.work15,
  assets.work16, assets.work17, assets.work18, assets.work19, assets.work20,
  assets.work21, assets.work22, assets.work23, assets.work24
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, media.length));
  };

  const handleShowLess = () => {
    setVisibleCount(8);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : media.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < media.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="gallery">
      <h2 className="gallery-title">OUR WORK <span>IN ACTION</span></h2>
      <p className="gallery-description">See how we transform spaces with expert pest control solutions.</p>
      
      <div className="gallery-grid">
        {media.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedIndex(index)}>
            {item.endsWith(".mp4") ? (
              <video src={item} className="gallery-video" muted />
            ) : (
              <img src={item} alt={`Gallery ${index}`} className="gallery-image" />
            )}
          </div>
        ))}
      </div>

      <div className="gallery-controls">
        {visibleCount < media.length && (
          <button className="gallery-button show-more" onClick={handleShowMore}>Show More</button>
        )}
        {visibleCount > 8 && (
          <button className="gallery-button show-less" onClick={handleShowLess}>Show Less</button>
        )}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <button className="lightbox-close" onClick={() => setSelectedIndex(null)}>
            <FaTimes />
          </button>
          <button className="lightbox-nav left" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
            <FaChevronLeft />
          </button>
          <div className="lightbox-content">
            {media[selectedIndex].endsWith(".mp4") ? (
              <video src={media[selectedIndex]} controls autoPlay className="lightbox-video" />
            ) : (
              <img src={media[selectedIndex]} alt="Enlarged view" className="lightbox-image" />
            )}
          </div>
          <button className="lightbox-nav right" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
