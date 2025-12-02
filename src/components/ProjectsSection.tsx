import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "🚀",
    technologies: ["React", "Typscript", "PostgreSQL", "Django"],
     <a href="https://github.com/mdbadhon07/glow-and-gadget-express" target="_blank" rel="noopener noreferrer">
      
    liveUrl: "https://glow-and-gadget-express.vercel.app/",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Coming Soon",
    description: "Data visualization platform with machine learning insights and predictive analytics.",
    image: "🤖",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-green-500 to-blue-500"
  },
  {
    title: "Coming Soon",
    description: "Real-time social platform with messaging, posts, and interactive features.",
    image: "💬",
    technologies: ["Vue.js", "Firebase", "WebRTC", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Coming Soon",
    description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.",
    image: "⛓️",
    technologies: ["React", "Web3.js", "Solidity", "MetaMask"],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-yellow-500 to-red-500"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="transform-3d"
    >
      <Card className="glass h-full group transition-all duration-300 hover:shadow-glow">
        <CardHeader className="pb-4">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {project.image}
          </div>
          <CardTitle className="text-xl glow-text-accent">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              size="sm"
              variant="outline"
              className="glass border-primary/30 text-primary hover:bg-primary/10 flex-1"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:shadow-glow flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of my latest work combining creativity with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
