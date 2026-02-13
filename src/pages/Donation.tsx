import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send, Building2, CreditCard, Copy, Check } from "lucide-react";
import Layout from "../components/Layout";
import qrCode from "../assets/qr-code.png";

const Donation = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", about: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", about: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

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
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">Manual Payment</h2>
            <p className="text-muted-foreground font-body">Transfer directly to our bank account or scan the QR code</p>
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
                <h3 className="font-display text-xl font-bold text-foreground">Bank Details</h3>
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
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Scan to Pay</h3>
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

      {/* Donation Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-warm-lg"
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
                  className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">Tell Us About Yourself</label>
                <textarea
                  rows={4}
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
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
