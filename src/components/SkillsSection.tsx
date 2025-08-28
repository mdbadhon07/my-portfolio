import { motion } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", level: 95, color: "#092E20" },
  { name: "Django", level: 90, color: "#3776AB" },
  { name: "CSS", level: 88, color: "#1572B6" },
  { name: "HTML", level: 85, color: "#E34F26" },
  { name: "PostgreSQL", level: 82, color: "#336791" },
  { name: "Docker", level: 80, color: "#2496ED" }
];

// Interactive 2D skill cards instead of 3D
const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateY(${Math.random() * 360}deg)`;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      onClick={handleClick}
      className="glass ring-1 ring-primary/15 p-6 text-center group hover:shadow-glow transition-all duration-300 cursor-pointer transform-3d"
      style={{ backgroundColor: `${skill.color}20` }}
    >
      <div 
        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
        style={{ backgroundColor: skill.color, color: 'white' }}
      >
        {skill.name.charAt(0)}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.name}</h3>
      <div className="text-2xl font-bold" style={{ color: skill.color }}>
        {skill.level}%
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text-accent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive visualization of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {["N8N", "GraphQL", "SQL", "Tensorflow", "MongoDB", "Pytorch", "Loveble", "Chatgpt"].map((tech, index) => (
            <motion.div
              key={tech}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="glass ring-1 ring-primary/15 p-4 text-center group hover:shadow-glow transition-all duration-300"
            >
              <span className="text-primary group-hover:glow-text transition-all duration-300">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;