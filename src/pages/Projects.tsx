import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { useLanguage } from "@/hooks/useLanguageHook";
import { getTranslation } from "@/lib/translations";
import project1 from "../assets/project_1.avif";
import project2 from "../assets/project_2.avif";
import project3 from "../assets/project_3.avif";
import project4 from "../assets/project_4.avif";
import project5 from "../assets/project_5.avif";
import project6 from "../assets/project_6.avif";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const projects = [
  {
    title: "projectTitle1" as const,
    image: project1,
  },
  {
    title: "projectTitle2" as const,
    image: project2,
  },
  {
    title: "projectTitle3" as const,
    image: project3,
  },
  {
    title: "projectTitle4" as const,
    image: project4,
  },
  {
    title: "projectTitle5" as const,
    image: project5,
  },
  {
    title: "projectTitle6" as const,
    image: project6,
  },
];

const Projects = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Projects & Charitable Activities - Sri Arunachalaramana Charitable Trust</title>
        <meta name="description" content="Discover our charitable projects including temple construction, food donation campaigns, spiritual education, and community service initiatives." />
        <meta name="keywords" content="charitable projects, temple construction, food donation, spiritual education, community service, Ramana Maharshi" />
        <link rel="canonical" href="https://arunachalaramana.org/projects" />
        <meta property="og:title" content="Projects & Charitable Activities - Sri Arunachalaramana Charitable Trust" />
        <meta property="og:description" content="Discover our charitable projects including temple construction, food donation campaigns, and community service initiatives." />
        <meta property="og:url" content="https://arunachalaramana.org/projects" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Layout>
      {/* Hero Banner */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#e26612]/90 via-[#d45511]/80 to-[#a63d08]/80">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4 max-w-4xl"
        >
          <p className="text-white/90 font-body text-sm tracking-[0.3em] uppercase mb-4">
            {getTranslation("impact", language)}
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {getTranslation("projects", language)}
          </h1>
          <p className="text-white font-body text-lg max-w-2xl mx-auto italic">{getTranslation("projectsDesc", language)}</p>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-warm-lg transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={getTranslation(project.title, language)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {getTranslation(project.title, language)}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Projects;
