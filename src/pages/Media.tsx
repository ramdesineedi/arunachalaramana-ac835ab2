import { motion } from "framer-motion";
import { ExternalLink, Camera, Video } from "lucide-react";
import Layout from "../components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Media = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Media</h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Explore our collection of photos and videos from events and celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.a
              href="https://sriarunachalaramana.wixsite.com/mysite-1/photos"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group bg-card rounded-2xl p-12 text-center border border-border hover:shadow-warm-lg transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Camera className="text-primary" size={32} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Photos</h2>
              <p className="text-muted-foreground font-body mb-4">Browse our photo gallery of events and celebrations</p>
              <span className="inline-flex items-center gap-2 text-primary font-body font-medium">
                View Photos <ExternalLink size={16} />
              </span>
            </motion.a>

            <motion.a
              href="https://www.youtube.com/channel/UCLMqQvtUNxmmAkoJEpQNlKw"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group bg-card rounded-2xl p-12 text-center border border-border hover:shadow-warm-lg transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Video className="text-primary" size={32} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Videos</h2>
              <p className="text-muted-foreground font-body mb-4">Watch our videos on YouTube</p>
              <span className="inline-flex items-center gap-2 text-primary font-body font-medium">
                Watch Videos <ExternalLink size={16} />
              </span>
            </motion.a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
