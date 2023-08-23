import { motion } from "framer-motion";

export default function AnimatedText({text}){

  const words = text.split(" ")
  const sentence = {
    hidden:{ opacity:1 },
    visible: {
      opacity: 1,
      
      transition: {
        delay: 2,
        staggerChildren: 0.08,
        duration: 4,


      }
    }
  }

  const letter ={
    hidden: { opacity:0, y:[0, 50, 50, 0] },
    visible: {
      opacity :1,
      y: 2,
      transition: {
        repeat: Infinity,
        duration: 1.5,
        repeatType: 'reverse',
        repeatDelay: 1
      }
      
      
    }
  }

  return(
      <motion.div
        style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="text-primary_text"
      >
        {words.map((word, index) => (
          <motion.span
            variants={letter}
            style={{ marginRight: "5px" }}
            key={index}
            className="text-6xl font-thin py-5 tracking-wider"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
}