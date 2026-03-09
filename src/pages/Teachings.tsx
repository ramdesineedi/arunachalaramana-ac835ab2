import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { useLanguage } from "@/hooks/useLanguageHook";
import { getTranslation } from "@/lib/translations";
import ramanaMaharshi from "@/assets/ramana-maharshi.jpg";
import ramanaMaharshi2 from "@/assets/ramana-maharshi-meditation.png";
import { get } from "http";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Teachings = () => {
  const { language } = useLanguage();

  const sections = [
    {
      titleKey: "self" as const,
      content: [
        `${getTranslation("selfPara1", language)}`,
        `${getTranslation("selfPara2", language)}`,
      ],
    },
    {
      titleKey: "silence" as const,
      content: [
        `${getTranslation("silencePara1", language)}`,
        `${getTranslation("silencePara2", language)}`,
      ],
    },
    {
      titleKey: "bhakti" as const,
      content: [
        `${getTranslation("bhaktiPara1", language)}`,
        `${getTranslation("bhaktiPara2", language)}`,
        `${getTranslation("bhaktiPara3", language)}`,
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Teachings of Bhagavan Sri Ramana Maharshi - Sri Arunachalaramana Charitable Trust</title>
        <meta name="description" content="Explore the profound teachings of Bhagavan Sri Ramana Maharshi on self-enquiry, silence, and bhakti. Discover spiritual wisdom and guidance for seekers of truth." />
        <meta name="keywords" content="Ramana Maharshi teachings, self-enquiry, spiritual wisdom, meditation, silence, bhakti, Arunachala" />
        <link rel="canonical" href="https://arunachalaramana.org/teachings" />
        <meta property="og:title" content="Teachings of Bhagavan Sri Ramana Maharshi" />
        <meta property="og:description" content="Explore the profound teachings of Bhagavan Sri Ramana Maharshi on self-enquiry, silence, and bhakti." />
        <meta property="og:url" content="https://arunachalaramana.org/teachings" />
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
            {getTranslation("wisdom", language)}
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {getTranslation("teachings", language)}
          </h1>
          <p className="text-white font-body text-lg max-w-2xl mx-auto italic">{getTranslation("teachingsDesc", language)}</p>
        </motion.div>
      </section>

      {/* Teachings Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {sections.map((section, i) => (
            <motion.div
              key={section.titleKey}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`mb-16 ${i % 2 === 0 ? "" : ""}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-border" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{getTranslation(section.titleKey, language)}</h2>
                <div className="h-px flex-1 bg-border" />
              </div>
              {section.content.map((para, j) => (
                <p key={j} className="text-muted-foreground font-body leading-relaxed mb-4 text-lg">
                  {para}
                </p>
              ))}
            </motion.div>
          ))}

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <img
              src={ramanaMaharshi2}
              alt="Sri Ramana Maharshi"
              className="rounded-2xl shadow-warm-lg max-w-sm mx-auto w-full"
            />
            <p className="text-muted-foreground font-body text-sm mt-4 italic">
              Sri Ramana Maharshi in meditation
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Teachings;
