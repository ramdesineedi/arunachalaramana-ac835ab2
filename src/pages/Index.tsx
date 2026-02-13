import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, Utensils, Home as HomeIcon } from "lucide-react";
import Layout from "../components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import ramanaMaharshi from "@/assets/ramana-maharshi.jpg";
import templeImg from "@/assets/temple.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <p className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4">
            ॐ Sri Arunachalaramana Charitable Trust
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Bhagavan Sri Ramana Maharshi
          </h1>
          <p className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed italic">
            "When a Mantra is Repeated, if Attention be directed to the Source whence the Mantra-Sound Emanates, the Mind will get Absorbed in that. That is Tapas."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/teachings"
              className="px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Teachings
            </Link>
            <Link
              to="/donation"
              className="px-8 py-3 border-2 border-primary-foreground/40 text-primary-foreground font-body font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Birthday Celebrations Banner */}
      <section className="bg-gradient-saffron py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground font-display text-xl md:text-2xl font-semibold">
            🪔 Bhagavan Sri Ramana Maharshi 146th Birthday Celebrations 🪔
          </p>
          <p className="text-primary-foreground/80 font-body text-sm mt-1">
            30th December, 2025 @ Opp. GAIL Office, A.V. Apparao Road, Rajamahendravam
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <img
                src={ramanaMaharshi}
                alt="Bhagavan Sri Ramana Maharshi"
                className="rounded-2xl shadow-warm-lg w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
                About Bhagavan
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bhagavan Sri Ramana Maharshi
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Arudra Darshanam, a festival that commemorates the manifestation of Lord Siva as Nataraja, 
                was being celebrated with great ardor in the Bhuminatha temple in Tiruchuzhi, South India, 
                on December 29, 1879. Just as the Deity re-entered the temple past midnight on December 30th 
                at 1:00AM, the first cry of a baby boy was heard in a house adjacent to the temple.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                The fortunate parents were Sundaram Iyer and his wife Alagammal. The newborn child received 
                the name Venkataraman and was later known as Bhagavan Sri Ramana Maharshi. As the child was 
                being born, a lady with poor eye-sight exclaimed that the new born was enveloped in light.
              </p>
              <Link
                to="/teachings"
                className="inline-flex items-center gap-2 text-primary font-body font-medium hover:underline"
              >
                Read His Teachings →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pournami Food Donation Banner */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pournami Food Donation Campaign
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              Participate in Every Month's Pournami Food Donation Campaign. "Food is equal to Almighty" — 
              Nithya Annaprasadham.
            </p>
            <Link
              to="/donation"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
              Our Purpose
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mission & Vision
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-body max-w-2xl mx-auto">
              With the blessings of Guru Sri Ramana Maharshi, we have taken the initiative to serve the community through spiritual and charitable activities.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: HomeIcon,
                title: "Temple Construction",
                desc: "Unveil the temple of Goddess Sri Apita Kuchalambika Devi & Lord Sri Arunachaleswara at Rajamahendravaram.",
              },
              {
                icon: BookOpen,
                title: "Vedic Education",
                desc: "A University of Vedic Education to provide the next generation the values of Indian traditions and culture.",
              },
              {
                icon: Utensils,
                title: "Food Donation",
                desc: '"Food is equal to Almighty" — providing food as Nithya Annaprasadham scheme to those in need.',
              },
              {
                icon: Users,
                title: "Ramana Ashram",
                desc: "Construct an Ashram in the name of Guru Sri Ramana Maharshi, guiding us towards the right path.",
              },
              {
                icon: Heart,
                title: "Gosala (Cow Shelter)",
                desc: "Service to the magnificent Go-matas (cows) by constructing a spacious Gosala (cow shed).",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Temple Image Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${templeImg})` }}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary-foreground font-display text-2xl md:text-4xl font-bold max-w-3xl leading-relaxed">
              Om Sri Arunachaleswaraya Namah
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
