import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const goToTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-8 right-8 cursor-pointer"
          onClick={goToTopButton}
        >
          <div className="p-3 bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
            <FaArrowUp className="text-white text-xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
