import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ramanaMaharshi from "@/assets/ramana-maharshi.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = [
  {
    title: "Self",
    content: [
      'Ramana Maharshi used various terms to denote the Self. The most frequently used terms were sat-chit-ananda, which translates into English as "truth-consciousness-bliss"; God, Brahman and Siva and the Heart, which was rather to indicate that "the Self was the source from which all appearances manifested."',
      'Ramana Maharshi considered the Self to be permanent and enduring, surviving physical death. "The sleep, dream and waking states are mere phenomena appearing on the Self," as is the "I"-thought. Our "true nature" is "simple Being, free from thoughts."',
    ],
  },
  {
    title: "Silence",
    content: [
      "Ramana Maharshi's main means of instruction to his devotees in order to remove ignorance and abide in Self-awareness was through silently sitting together with his visitors, using words only sparingly. His method of instruction has been compared to Dakshinamurti – Shiva in the ascetic appearance of the Guru, who teaches through silence.",
      '"Silence is the true upadesa. It is the perfect upadesa. It is suited only for the most advanced seeker. The others are unable to draw full inspiration from it. Therefore, they require words to explain the truth. But truth is beyond words; it does not warrant explanation. All that is possible is to indicate It."',
    ],
  },
  {
    title: "Bhakti",
    content: [
      '"There are only two ways to conquer destiny or to be independent of it. One is to inquire whose this destiny is and discover that only the ego is bound by it and not the Self and that the ego is non-existent."',
      '"The other way is to kill the ego by completely surrendering to the Lord, realizing one\'s helplessness and saying all the time: Not I, but Thou, oh Lord, giving up all sense of I and mine and leaving it to the Lord to do what He likes with you."',
      '"True surrender is the love of God for the sake of love and nothing else, not even for the sake of salvation."',
    ],
  },
];

const Teachings = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Wisdom</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Teachings</h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto italic">
              Ramana Maharshi provided upadesa by providing darshan and sitting silently together with devotees and visitors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teachings Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`mb-16 ${i % 2 === 0 ? "" : ""}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-border" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{section.title}</h2>
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
              src={ramanaMaharshi}
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
  );
};

export default Teachings;
