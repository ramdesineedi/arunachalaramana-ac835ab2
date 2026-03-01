import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Building2, CreditCard, Copy, Check, Utensils, Home } from "lucide-react";
import Layout from "../components/Layout";
import { useLanguage } from "@/hooks/useLanguageHook";
import { getTranslation } from "@/lib/translations";
import qrCode from "../assets/qr-code.png";
import templeImg from "../assets/temple.jpg";
import meal1 from "../assets/Meal_01.jpg";
import meal2 from "../assets/Meal_02.jpg";
import thiruvannamalaiTemple from "../assets/thiruvannamalai-temple.jpg";

const Donation = () => {
  const { language } = useLanguage();
  // form-related state removed since the manual donation form has been taken out
  const [copied, setCopied] = useState<string | null>(null);


  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const bankDetails = [
    { label: "Bank", value: "Axis Bank" },
    { label: "Account Name", value: "Sri Arunachalaramana Charitable Trust" },
    { label: "Current A/C No.", value: "919020079691878", copyable: true },
    { label: "IFSC Code", value: "UTIB0002978", copyable: true },
    { label: "MICR Code", value: "533211104", copyable: true },
    { label: "Branch", value: "Tilak Road Branch" },
    { label: "UPI ID", value: "MAB.037244029780059@axisbank", copyable: true },
  ];

  return (
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
            {getTranslation("supportUs", language)}
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {getTranslation("donation", language)}
          </h1>
          <p className="text-white font-body text-lg max-w-2xl mx-auto italic">{getTranslation("donationDesc", language)}</p>
        </motion.div>
      </section>

      {/* Temple Donation Sections - Two Column Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Annaprasadam Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <Utensils className="text-amber-700" size={24} />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  Annaprasadam Seva
                </h2>
                <p className="text-muted-foreground font-body">
                  Provide food seva offerings for devotees.
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="space-y-4 mb-8">
                {[
                  { title: "Annaprasadam for 2 People", price: "₹500" },
                  { title: "Monthly Annaprasadam", price: "₹10,000" },
                  { title: "Yearly Annaprasadam", price: "₹51,000" },
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-xl p-5 border border-amber-200/50 shadow-warm hover:shadow-warm-lg transition-shadow cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      <p className="font-display text-lg font-bold text-amber-700">{card.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Devotional Images */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden shadow-warm"
                >
                  <img src={meal1} alt="Annadanam - Food Service" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden shadow-warm"
                >
                  <img src={meal2} alt="Devotional Offering" className="w-full h-48 object-cover" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Temple Land Donation Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Home className="text-orange-700" size={24} />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  Donate for Temple Land
                </h2>
                <p className="text-muted-foreground font-body">
                  Support temple land development and expansion.
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="space-y-4 mb-8">
                {[
                  { title: "Donate 1 feet Land", price: "₹500" },
                  { title: "Donate 10 feet Land", price: "₹5000" },
                  { title: "Custom Donation", price: "Donate As You Wish" },
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-xl p-5 border border-orange-200/50 shadow-warm hover:shadow-warm-lg transition-shadow cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      <p className="font-display text-lg font-bold text-orange-700">{card.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Temple Images */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden shadow-warm"
                >
                  <img src={templeImg} alt="Temple Land" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden shadow-warm"
                >
                  <img src={thiruvannamalaiTemple} alt="Temple Construction" className="w-full h-48 object-cover" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manual Payment / Bank Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Building2 className="text-primary" size={28} />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              {getTranslation("manualPayment", language)}
            </h2>
            <p className="text-muted-foreground font-body">
              {getTranslation("transferDesc", language)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Bank Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-warm-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-primary" size={24} />
                <h3 className="font-display text-xl font-bold text-foreground">
                  {getTranslation("bankDetails", language)}
                </h3>
              </div>
              <div className="space-y-4">
                {bankDetails.map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-muted-foreground font-body text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-foreground font-body font-medium break-all">{item.value}</p>
                    </div>
                    {item.copyable && (
                      <button
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className="shrink-0 p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        title={`Copy ${item.label}`}
                      >
                        {copied === item.label ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 bg-primary/5 rounded-lg">
                <p className="text-xs font-body text-muted-foreground text-center">
                  📌 All Donations Are Exempted U/S 80G Of Income Tax
                </p>
              </div>
            </motion.div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-warm-lg text-center"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {getTranslation("qrCode", language)}
              </h3>
              <div className="bg-background rounded-xl p-4 inline-block border border-border">
                <img src={qrCode} alt="Payment QR Code" className="w-56 h-auto mx-auto" />
              </div>
              <p className="text-muted-foreground font-body text-sm mt-4">
                Scan this QR code with any UPI app to make a donation
              </p>
            </motion.div>
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default Donation;
