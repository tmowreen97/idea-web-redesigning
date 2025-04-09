import { motion } from "framer-motion";

export default function AnimatedText({text, specialClass}){

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
        style={{ overflow: "hidden", display:"marginRight", fontSize: "2rem" }}
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="text-primary_text flex text-center justify-center"
      >
        {words.map((word, index) => (
          <motion.p
            variants={letter}
            key={index}
            className={specialClass}
          >
            {word}
          </motion.p>
        ))}
      </motion.div>
    )
}