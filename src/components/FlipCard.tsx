import { useState } from "react";
import { motion } from "motion/react";
import cardImage from "figma:asset/03ee6a2ffe32426ab85ec7f645e3fdef4297666d.png";
import ServiceProviderCardCombo from "../imports/ServiceProviderCardCombo-3-4085";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: "2000px" }}
      onClick={handleFlip}
    >
      <motion.div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          overflow: "visible",
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          width: isFlipped ? "360px" : "160px",
          height: isFlipped ? "560px" : "190px",
        }}
        transition={{
          duration: 0.7,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        {/* Front Card - Small teaser */}
        <motion.div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src={cardImage}
            alt="Card"
            className="size-full object-cover rounded-[20px]"
          />
        </motion.div>

        {/* Back Card - Large detailed card */}
        <motion.div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <ServiceProviderCardCombo />
        </motion.div>
      </motion.div>
    </div>
  );
}