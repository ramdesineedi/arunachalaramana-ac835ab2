import { motion } from "framer-motion";
import Layout from "../components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const projects = [
  {
    title: "Celebration On the Occasion of the Full Moon",
    image: "https://static.wixstatic.com/media/6898b2_c12620e6886c4b899d0134dfbf0a1659~mv2.jpeg/v1/fill/w_600,h_440,al_c,q_80,enc_avif,quality_auto/Occasion%20of%20the%20Full%20Moon7.jpeg",
  },
  {
    title: "Water & Buttermilk Distribution",
    image: "https://static.wixstatic.com/media/6898b2_4167e78d05de4d45b93124d1d2722692~mv2.jpg/v1/fill/w_600,h_440,al_c,q_80,enc_avif,quality_auto/Buttermilk%20distribution10.jpg",
  },
  {
    title: "140th Birth Anniversary of Bhagavan Ramana Maharshi",
    image: "https://static.wixstatic.com/media/6898b2_9303f0875b634c0bb9f64b6b7d7b600d~mv2.jpg/v1/fill/w_600,h_440,al_c,q_80,enc_avif,quality_auto/00072_MTS_20200502_161703_354.jpg",
  },
  {
    title: "Feeding Dogs #COVID-19",
    image: "https://static.wixstatic.com/media/6898b2_1e92e56097e147218f87741834ec9b2f~mv2.jpeg/v1/fill/w_600,h_440,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202020-04-25%20at%208_58_59%20PM_.jpeg",
  },
  {
    title: "Cheque Distribution",
    image: "https://static.wixstatic.com/media/6898b2_b72a78d4b6ee499a8d38b5615aa3da7f~mv2.jpeg/v1/fill/w_600,h_440,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202020-11-10%20at%2011_42_33%20AM.jpeg",
  },
  {
    title: "Punarvasa Nakshatram Pooja",
    image: "https://static.wixstatic.com/media/6898b2_28b716065d6c4612aef1a1a778c66155~mv2.jpg/v1/fill/w_600,h_440,al_c,q_80,enc_avif,quality_auto/Capture_edited.jpg",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Our Work</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Our charitable activities and community service initiatives.
            </p>
          </motion.div>
        </div>
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
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
