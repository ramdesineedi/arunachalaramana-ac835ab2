import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, Utensils, Home as HomeIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { useLanguage } from "@/hooks/useLanguageHook";
import { getTranslation } from "@/lib/translations";
// hero background replaced with video
import heroVideo from "@/assets/homepage-hero-video.mp4";
import ramanaMaharshi from "@/assets/ramana-maharshi.jpg";
import templeImg from "@/assets/temple.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import logoIcon from "../assets/logo-icon.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Sri Arunachalaramana Charitable Trust - Home</title>
        <meta name="description" content="Welcome to Sri Arunachalaramana Charitable Trust. Discover the teachings of Bhagavan Sri Ramana Maharshi and support our charitable activities including temple construction, food donation, and spiritual education in Rajahmundry." />
        <meta name="keywords" content="Sri Arunachalaramana Charitable Trust, Ramana Maharshi, spiritual teachings, charity, temple construction, food donation, Rajahmundry" />
        <link rel="canonical" href="https://arunachalaramana.org/" />
        <meta property="og:title" content="Sri Arunachalaramana Charitable Trust - Home" />
        <meta property="og:description" content="Welcome to Sri Arunachalaramana Charitable Trust. Discover the teachings of Bhagavan Sri Ramana Maharshi and support our charitable activities." />
        <meta property="og:url" content="https://arunachalaramana.org/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sri Arunachalaramana Charitable Trust",
            "url": "https://arunachalaramana.org",
            "logo": "https://arunachalaramana.org/assets/logo-icon.png",
            "description": "Charitable Trust dedicated to the teachings of Bhagavan Sri Ramana Maharshi. Serving the community through spiritual education, food donation, and charitable activities.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "D.No.5-408, Police Quarters Back Side, Swaroop Nagar",
              "addressLocality": "Rajahmahendravaram",
              "postalCode": "533 106",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>
      <Layout>
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* video background */}
        <video
          className="absolute inset-0 object-cover w-full h-full"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <p className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4">
            {getTranslation("SriArunachalaramanaCharitableTrust", language)}
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            {getTranslation("BhagavanSriRamanaMaharshi", language)}
          </h1>
          <p className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed italic">
            {getTranslation("heroCopy", language)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/teachings"
              className="px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {getTranslation("exploreTeachings", language)}
            </Link>
            <Link
              to="/donation"
              className="px-8 py-3 border-2 border-primary-foreground/40 text-primary-foreground font-body font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              {getTranslation("donateNow", language)}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Birthday Celebrations Banner */}
      <section className="bg-gradient-saffron py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground font-display text-xl md:text-2xl font-semibold">
            {getTranslation("birthdayCelebrations", language)}
          </p>
          <p className="text-primary-foreground/80 font-body text-sm mt-1">
            {getTranslation("celebrationDate", language)}
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
                {getTranslation("aboutBhagavan", language)}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {getTranslation("bhagavanTitle", language)}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                {getTranslation("aboutBhagavanPara1", language)}
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {getTranslation("aboutBhagavanPara2", language)}
              </p>
              <Link
                to="/teachings"
                className="inline-flex items-center gap-2 text-primary font-body font-medium hover:underline"
              >
                {getTranslation("readHisTeachings", language)}
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
              {getTranslation("pournamisectionTitle", language)}
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              {getTranslation("pournamisectionDesc", language)}
            </p>
            <Link
              to="/donation"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {getTranslation("donateNow", language)}
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
              {getTranslation("ourPurpose", language)}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {getTranslation("missionVision", language)}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-body max-w-2xl mx-auto">
              {getTranslation("missionVisionDesc", language)}
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
                icon: Utensils,
                titleKey: "foodDonation" as const,
                descKey: "foodDonationDesc" as const,
              },
              {
                icon: HomeIcon,
                titleKey: "templeConstruction" as const,
                descKey: "templeConstructionDesc" as const,
              },
              {
                icon: BookOpen,
                titleKey: "vedicEducation" as const,
                descKey: "vedicEducationDesc" as const,
              },
              {
                icon: Users,
                titleKey: "ramanaAshram" as const,
                descKey: "ramanaAshramDesc" as const,
              },
              {
                icon: Heart,
                titleKey: "gosala" as const,
                descKey: "gosalaDesc" as const,
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
                  {getTranslation(item.titleKey, language)}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {getTranslation(item.descKey, language)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donate for Land Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
                {getTranslation("donateForLandSectionTitle", language)}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {getTranslation("donateForLandTitle", language)}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                {getTranslation("donateForLandSubtitle", language)}
              </p>
              <Link
                to="/donation"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity "
              >
                {getTranslation("donateNow", language)}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Temple Image Section */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={logoIcon}
              alt="Sri Arunachaleswarar Temple logo"
              className="w-auto mb-5 mx-auto"
            />
            <p className="text-primary-foreground font-display text-2xl md:text-4xl font-bold max-w-3xl leading-relaxed">
              {getTranslation("OmSriArunachaleswarayaNamah", language)}
            </p>
            
          </motion.div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Index;
