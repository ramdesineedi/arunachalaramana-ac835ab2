import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send } from "lucide-react";
import Layout from "../components/Layout";

const Donation = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", about: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", about: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="text-primary" size={32} />
            </div>
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Support Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Donation</h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Your generous contribution helps us continue our charitable and spiritual activities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-warm-lg"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
              Donation Form
            </h2>
            <p className="text-muted-foreground font-body text-sm text-center mb-8">
              For Indian Currency
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-primary/10 rounded-lg text-primary font-body text-sm text-center">
                Thank you for your generous donation! We will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">Tell Us About Yourself</label>
                <textarea
                  rows={4}
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="A few words about yourself..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-saffron text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send size={18} />
                Submit Donation
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Donation;
