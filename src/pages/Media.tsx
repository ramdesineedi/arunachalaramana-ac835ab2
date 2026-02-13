import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Camera, Video, Play, X } from "lucide-react";
import Layout from "../components/Layout";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const photos = [
  { src: gallery1, alt: "Ramana Maharshi sitting in meditation" },
  { src: gallery2, alt: "Temple puja ceremony" },
  { src: gallery3, alt: "Ramana Maharshi portrait" },
];

const videoCategories = [
  {
    year: "2025",
    title: "On Occasion of 145th Birth Anniversary",
    link: "https://sriarunachalaramana.wixsite.com/mysite-1/copy-of-2023",
  },
  {
    year: "2024",
    title: "On Occasion of 144th Birth Anniversary",
    link: "https://sriarunachalaramana.wixsite.com/mysite-1/copy-of-occasion-of-143-birth-anniver",
  },
  {
    year: "2023",
    title: "On Occasion of 143rd Birth Anniversary",
    link: "https://sriarunachalaramana.wixsite.com/mysite-1/copy-of-occasion-of-142-birth-anniver",
  },
  {
    year: "2022",
    title: "On Occasion of 142nd Birth Anniversary",
    link: "https://sriarunachalaramana.wixsite.com/mysite-1/occasion-of-142-birth-anniversary",
  },
  {
    year: "2021",
    title: "On Occasion of 141st Birth Anniversary",
    link: "https://sriarunachalaramana.wixsite.com/mysite-1/copy-of-occasion-of-140th-birth-ann-1",
  },
  {
    year: "2019-2020",
    title: "Events & Celebrations",
    link: "https://sriarunachalaramana.wixsite.com/mysite-1/2019-2020",
  },
];

const Media = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

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

      {/* Photo Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Camera className="text-primary" size={28} />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">Photos</h2>
            <p className="text-muted-foreground font-body">Moments from our spiritual journey and events</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
                className="cursor-pointer group overflow-hidden rounded-xl border border-border"
                onClick={() => setLightbox(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://sriarunachalaramana.wixsite.com/mysite-1/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-saffron text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              View All Photos <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Video className="text-primary" size={28} />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">Videos</h2>
            <p className="text-muted-foreground font-body">Watch our event recordings organized by year</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoCategories.map((cat, i) => (
              <motion.a
                key={i}
                href={cat.link}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { duration: 0.6, delay: i * 0.08 } } }}
                className="group bg-background rounded-2xl p-8 text-center border border-border hover:shadow-warm-lg transition-all hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Play className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">{cat.year}</h3>
                <p className="text-muted-foreground font-body text-sm mb-3">{cat.title}</p>
                <span className="inline-flex items-center gap-1 text-primary font-body text-sm font-medium">
                  Watch <ExternalLink size={14} />
                </span>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.youtube.com/channel/UCLMqQvtUNxmmAkoJEpQNlKw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-body font-medium hover:underline"
            >
              Visit our YouTube Channel <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Media;
