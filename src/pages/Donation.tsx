import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Send, Building2, CreditCard, Copy, Check, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguageHook";
import { getTranslation } from "@/lib/translations";
import Layout from "../components/Layout";
import qrCode from "../assets/qr-code.png";
import templeVideo01 from "../assets/Temple_video_01.mp4";
import templeVideo02 from "../assets/Temple_video_02.mp4";
import gallery1 from "../assets/benefits_01.png";
import gallery2 from "../assets/benefits_02.png";
import meal1 from "../assets/Meal_01.jpg";
import meal2 from "../assets/Meal_02.jpg";
import meal3 from "../assets/Meal_03.jpg";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Donation = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", about: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  // carousel control
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // update selected index when carousel moves
  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setSelectedIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    onSelect();
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  // autoplay interval
  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselApi]);

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

  // testimonial data
  const testimonials = [
    { name: getTranslation("testimonialsName1", language), message: getTranslation("testimonialsPara1", language), avatar: null },
    { name: getTranslation("testimonialsName2", language), message: getTranslation("testimonialsPara2", language), avatar: null },
    { name: getTranslation("testimonialsName3", language), message: getTranslation("testimonialsPara3", language), avatar: null },
    { name: getTranslation("testimonialsName4", language), message: getTranslation("testimonialsPara4", language), avatar: null },
    
  ];

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    return parts.map((p) => p[0]).join("").toUpperCase();
  };

  // testimonial carousel control
  const [testCarouselApi, setTestCarouselApi] = useState<CarouselApi | null>(null);
  const [testSelectedIndex, setTestSelectedIndex] = useState(0);

  useEffect(() => {
    if (!testCarouselApi) return;
    const onSelect = () => setTestSelectedIndex(testCarouselApi.selectedScrollSnap());
    testCarouselApi.on("select", onSelect);
    onSelect();
    return () => {
      testCarouselApi.off("select", onSelect);
    };
  }, [testCarouselApi]);

  useEffect(() => {
    if (!testCarouselApi) return;
    const interval = setInterval(() => {
      if (testCarouselApi.canScrollNext()) {
        testCarouselApi.scrollNext();
      } else {
        testCarouselApi.scrollTo(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [testCarouselApi]);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card">
        <div className="container px-0 mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full flex items-center justify-center px-4">
                <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 mt-8 lg:mt-0">
                  {getTranslation("annaprasadam", language)}
                </h1>
                 <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                  {getTranslation("donationDesc", language)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                        <a
                          href="#manual-payment"
                          className="px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity mb-8">
                          {getTranslation("donateNow", language)}
                        </a>
                      </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
              <img src={meal1} alt="Payment QR Code" className="h-auto mx-auto"></img>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section>
  <div className="bg-landing-background py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="space-y-8">
        
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          {getTranslation("donateOnline", language)}
        </h2>

        <div className="border-4 p-4 md:p-7 rounded-xl max-w-4xl mx-auto relative text-landing-primary border-landing-primary">

          <div className="prose prose-sm sm:prose-base prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg max-w-full w-full text-justify font-medium text-sm md:text-base text-landing-primary">
            <p className="text-center font-semibold text-black font-body text-2xl mb-8 max-w-2xl mx-auto pl-8 pr-8">
             “{getTranslation("donateQuote", language)}”
            </p>
            <p className="text-center text-black">
              {getTranslation("donateQuotePara1", language)}
            </p>
            <p className="text-center text-black">
              {getTranslation("donateQuotePara2", language)}
            </p>
          </div>
          {/* Top Quote Icon */}
          <div className="absolute left-4 top-5 text-4xl text-landing-primary bg-[#faf8f5]">
            <svg stroke="currentColor" fill="#e26612" stroke-width="0" viewBox="0 0 24 24" className="text-landing-primary border-landing-primary bg-landing-background" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path></svg>
          </div>

          {/* Bottom Quote Icon */}
          <div className="absolute right-4 bottom-4 rotate-180 text-4xl text-landing-primary bg-[#faf8f5]">
            <svg stroke="currentColor" fill="#e26612" stroke-width="0" viewBox="0 0 24 24" className="text-landing-primary border-landing-primary bg-landing-background" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path></svg>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-card">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="grid grid-cols-1 lg:grid-cols-1">
      <div>
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-700"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-2">
            {getTranslation("annaprasadamSeva", language)}
          </h2>
          <p className="text-muted-foreground font-body">
            {getTranslation("annaprasadamSevaDesc", language)}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {[
            { title: getTranslation("annaprasadamSeva1", language), price: "₹501" },
            { title: getTranslation("annaprasadamSeva2", language), price: "₹3001" },
            { title: getTranslation("annaprasadamSeva3", language), price: "₹6001" },
            { title: getTranslation("annaprasadamSeva4", language), price: "Donate As You Wish" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 border border-amber-200/50 shadow-warm hover:shadow-warm-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center gap-4 justify-between">
  <h3 className="font-body font-bold text-foreground group-hover:text-primary transition-colors max-w-[70%]">
    {item.title}
  </h3>

  <p className="font-display text-lg font-bold text-amber-700 whitespace-nowrap">
    {item.price}
  </p>
</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden shadow-warm">
            <img
              src={meal2}
              alt="Annaprasadam - Food Service"
              className="w-full h-65 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-warm">
            <img
              src={meal3}
              alt="Devotional Offering"
              className="w-full h-65 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-landing-background">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="grid grid-cols-1 lg:grid-cols-1">
  <div>
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-orange-700"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-2">
            {getTranslation("donateForLand", language)}
          </h2>
          <p className="text-muted-foreground font-body">
            {getTranslation("donateForLandDesc", language)}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {[
            { title: getTranslation("donateForLand1", language), price: "₹501" },
            { title: getTranslation("donateForLand2", language), price: "₹5001" },
            { title: getTranslation("donateForLand3", language), price: "Donate As You Wish" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 border border-orange-200/50 shadow-warm hover:shadow-warm-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center gap-4 justify-between">
                <h3 className="font-body font-bold text-foreground group-hover:text-primary transition-colors max-w-[70%]">
                  {item.title}
                </h3>
                <p className="font-display text-lg font-bold text-orange-700">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
  <div className="rounded-xl overflow-hidden shadow-warm h-65">
    <video
      src={templeVideo01}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  </div>

  <div className="rounded-xl overflow-hidden shadow-warm h-65">
    <video
      src={templeVideo02}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
</div>
</div>
</div>
      </div>
</section>
<section className="py-20 bg-card">
  <div className="flex flex-col md:flex-row mx-auto px-4 max-w-5xl">
    
    {/* LEFT COLUMN */}
    <div className="md:w-1/2 w-full flex items-center justify-center relative">
      
      {/* simple carousel with two slides */}
      <Carousel className="max-w-3xl mx-auto" setApi={setCarouselApi}>
        <CarouselContent>
          <CarouselItem>
            <img src={gallery1} alt="Gallery slide 1" className="w-full h-auto rounded-lg" />
          </CarouselItem>
          <CarouselItem>
            <img src={gallery2} alt="Gallery slide 2" className="w-full h-auto rounded-lg" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {[gallery1, gallery2].map((_, i) => (
          <button
            key={i}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300",
              selectedIndex === i
                ? "bg-primary scale-110"
                : "bg-muted-foreground/60"
            )}
            onClick={() => carouselApi?.scrollTo(i)}
          />
        ))}
      </div>

    </div>

    {/* RIGHT COLUMN */}
    <div className="md:w-1/2 w-full flex items-center px-6 mt-10 md:mt-0">
      <div className="md:p-5">
        <h2 className="font-display text-3xl font-bold text-foreground mb-4">
          {getTranslation("donarPrivileges", language)}
        </h2>

        <ul className="list-disc pl-5 space-y-3 marker:text-primary text-lg">
          <li>{getTranslation("donarPrivilegespoint1", language)}</li>
          <li>{getTranslation("donarPrivilegespoint2", language)}</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  <section className="py-20 bg-landing-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-10">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart mx-auto text-primary"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></div>
        <h3 className="font-display text-3xl font-bold mt-2">{getTranslation("testimonials", language)}</h3>
      </div>

      <Carousel className="max-w-3xl mx-auto" setApi={setTestCarouselApi}>
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i}>
              <div className="bg-white rounded-2xl p-8 border border-border shadow-lg flex flex-col items-center text-center space-y-4 m-4">
                <Avatar className="mb-2">
                  {t.avatar ? (
                    <AvatarImage src={t.avatar} alt={t.name} />
                  ) : (
                    <AvatarFallback>{getInitials(t.name)}</AvatarFallback>
                  )}
                </Avatar>
                <p className="text-muted-foreground">{t.message}</p>
                <span className="font-semibold text-foreground">{t.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* dots for testimonials */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={cn(
              "h-3 w-3 rounded-full transition-colors",
              testSelectedIndex === i ? "bg-primary" : "bg-muted-foreground",
            )}
            onClick={() => testCarouselApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  </section>
      {/* Manual Payment / Bank Details */}
      <section id="manual-payment" className="py-20 bg-card">
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
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">{getTranslation("manualPayment", language)}</h2>
            <p className="text-muted-foreground font-body">{getTranslation("transferDesc", language)}</p>
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
      

{/* FAQ section */}
  <section className="py-20 bg-landing-background">
    <div className="container px-4 mx-auto max-w-5xl">
      <div className="text-center mb-10">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help mx-auto text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
        </div>
        <h3 className="font-display text-3xl font-bold mt-2">{getTranslation("faqTitle", language)}</h3>
      </div>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="faq-1">
          <AccordionTrigger className="[&>svg]:h-6 [&>svg]:w-6"><span className="font-body font-bold text-lg text-left">{getTranslation("faqQ1", language)}</span></AccordionTrigger>
          <AccordionContent>
            <p className="font-body text-lg">{getTranslation("faqA1", language)}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger className="[&>svg]:h-6 [&>svg]:w-6"><span className="font-body font-bold text-lg text-left">{getTranslation("faqQ2", language)}</span></AccordionTrigger>
          <AccordionContent>
            <p className="font-body text-lg">{getTranslation("faqA2", language)}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger className="[&>svg]:h-6 [&>svg]:w-6"><span className="font-body font-bold text-lg text-left">{getTranslation("faqQ3", language)}</span></AccordionTrigger>
          <AccordionContent>
            <p className="font-body text-lg">{getTranslation("faqA3", language)}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger className="[&>svg]:h-6 [&>svg]:w-6"><span className="font-body font-bold text-lg text-left">{getTranslation("faqQ4", language)}</span></AccordionTrigger>
          <AccordionContent>
            <p className="font-body text-lg">{getTranslation("faqA4", language)}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
    </Layout>
  );
};

export default Donation;