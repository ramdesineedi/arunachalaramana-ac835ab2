import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Camera, Video, Play, X, ChevronDown } from "lucide-react";
import Layout from "../components/Layout";
import { useLanguage } from "@/hooks/useLanguageHook";
import { getTranslation } from "@/lib/translations";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import gallery7 from "../assets/gallery-7.jpg";
import gallery8 from "../assets/gallery-8.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const photos = [
  { src: gallery1, alt: "Ramana Maharshi sitting in meditation" },
  { src: gallery2, alt: "Temple puja ceremony" },
  { src: gallery3, alt: "Ramana Maharshi portrait" },
  { src: gallery4, alt: "Ramana Maharshi standing" },
  { src: gallery5, alt: "Ramana Maharshi on bed" },
  { src: gallery6, alt: "Ramana Maharshi with elephant" },
  { src: gallery7, alt: "Ramana Maharshi sleeping" },
  { src: gallery8, alt: "Ramana Maharshi portrait in meditation" },
];

type VideoItem = {
  id: string;
  title: string;
  date: string;
};

type VideoYear = {
  year: string;
  subtitle: string;
  videos: VideoItem[];
};

const videosByYear: VideoYear[] = [
  {
    year: "2024",
    subtitle: "On Occasion of 145th Birth Anniversary",
    videos: [
      { id: "2Qa8bNKMltA", title: "పౌర్ణమి అన్నప్రసాద వితరణ - కార్తీకపౌర్ణమి", date: "15/11/2024" },
      { id: "iKGAyrgJNpk", title: "తిరుత్తని సుబ్రహ్మణ్యేశ్వర స్వామి - అన్నప్రసాద వితరణ", date: "29/10/2024" },
      { id: "tJexZN6W-qw", title: "పౌర్ణమి సేవా వెలుగులు - అన్నప్రసాద వితరణ", date: "17/10/2024" },
      { id: "h0GmglPH6to", title: "నవరాత్రులు కుంకుమ పూజలు", date: "12/10/2024" },
      { id: "1aXrBIxI5RE", title: "స్వామిమలై సుబ్రహ్మణ్యేశ్వర స్వామి - అన్నప్రసాద వితరణ", date: "23/09/2024" },
      { id: "RSGwh_8tuJw", title: "పౌర్ణమి అన్నప్రసాద వితరణ - రాజమహేంద్రవరం", date: "18/09/2024" },
      { id: "AhnpGyQQXB8", title: "పునర్వసు రమణుల జన్మ నక్షత్రం - పుష్కర ఘాట్", date: "30/08/2024" },
      { id: "n_kJe6mh3XA", title: "పౌర్ణమి అన్నప్రసాద వితరణ - పీఠం & గెయిల్ ఆఫీస్", date: "19/08/2024" },
      { id: "luopl68LUf8", title: "తిరుచెందూర్ సుబ్రహ్మణ్యస్వామి - అన్నప్రసాద వితరణ", date: "10/08/2024" },
    ],
  },
  {
    year: "2023",
    subtitle: "On Occasion of 143rd Birth Anniversary",
    videos: [
      { id: "paldG3yp_r8", title: "భగవాన్ రమణుల 143వ పుణ్యతిధి వేడుకలు", date: "30/12/2022" },
    ],
  },
  {
    year: "2022",
    subtitle: "On Occasion of 142nd Birth Anniversary",
    videos: [
      { id: "t2NkP0db9Fk", title: "భగవాన్ రమణుల 142వ పుణ్యతిధి జయంతి వేడుకలు", date: "30/12/2021" },
    ],
  },
  {
    year: "2021",
    subtitle: "On Occasion of 141st Birth Anniversary",
    videos: [
      { id: "dv0iKLBXARU", title: "భగవాన్ రమణులు 141వ పుణ్యతిధి జయంతి వేడుకలు", date: "30/12/2020" },
    ],
  },
  {
    year: "2019-2020",
    subtitle: "Events & Celebrations",
    videos: [
      { id: "XdWQQEIFINE", title: "అన్న ప్రసాద వితరణ - కడప జిల్లా", date: "30/11/2020" },
      { id: "pzrwgaN80cE", title: "పౌర్ణమి అన్నప్రసాద వితరణ", date: "01/10/2020" },
      { id: "mbM6OSi8nLQ", title: "కరోనా కాలం - అన్నార్తుల సేవ", date: "02/09/2020" },
    ],
  },
];

const Media = () => {
  const { language } = useLanguage();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [expandedYear, setExpandedYear] = useState<string>("2024");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Media Gallery - Photos and Videos - Sri Arunachalaramana Charitable Trust</title>
        <meta name="description" content="Explore our media gallery featuring photos and videos from spiritual events, charitable activities, and celebrations at Sri Arunachalaramana Charitable Trust." />
        <meta name="keywords" content="media gallery, photos, videos, spiritual events, charitable activities, Ramana Maharshi celebrations" />
        <link rel="canonical" href="https://arunachalaramana.org/media" />
        <meta property="og:title" content="Media Gallery - Sri Arunachalaramana Charitable Trust" />
        <meta property="og:description" content="Explore our media gallery featuring photos and videos from spiritual events and charitable activities." />
        <meta property="og:url" content="https://arunachalaramana.org/media" />
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
            Gallery
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {getTranslation("media", language)}
          </h1>
          <p className="text-white font-body text-lg max-w-2xl mx-auto">{getTranslation("mediaDesc", language)}</p>
        </motion.div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Camera className="text-primary" size={28} />
            
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              {getTranslation("photosGallery", language)}
            </h2>
            <p className="text-muted-foreground font-body">
              {getTranslation("photosGalleryDesc", language)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Video className="text-primary" size={28} />
            
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              {getTranslation("videosGallery", language)}
            </h2>
            <p className="text-muted-foreground font-body">{getTranslation("videosGalleryDesc", language)}</p>
          </motion.div>

          <div className="space-y-4">
            {videosByYear.map((yearGroup) => (
              <motion.div
                key={yearGroup.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background rounded-2xl border border-border overflow-hidden"
              >
                {/* Year Header */}
                <button
                  onClick={() => setExpandedYear(expandedYear === yearGroup.year ? "" : yearGroup.year)}
                  className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="font-display text-2xl font-bold text-foreground">{yearGroup.year}</h3>
                    <p className="text-muted-foreground font-body text-sm">{yearGroup.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-body text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {yearGroup.videos.length} video{yearGroup.videos.length > 1 ? "s" : ""}
                    </span>
                    <ChevronDown
                      className={`text-muted-foreground transition-transform duration-300 ${
                        expandedYear === yearGroup.year ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                  </div>
                </button>

                {/* Videos Grid */}
                {expandedYear === yearGroup.year && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {yearGroup.videos.map((video) => (
                        <div key={video.id} className="rounded-xl overflow-hidden border border-border bg-card">
                          {playingVideo === video.id ? (
                            <div className="aspect-video">
                              <iframe
                                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                              />
                            </div>
                          ) : (
                            <div
                              className="aspect-video relative cursor-pointer group"
                              onClick={() => setPlayingVideo(video.id)}
                            >
                              <img
                                src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                  <Play className="text-primary-foreground ml-1" size={24} />
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="p-3">
                            <p className="text-xs text-muted-foreground font-body mb-1">{video.date}</p>
                            <p className="text-sm font-body text-foreground line-clamp-2">{video.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
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
    </>
  );
};

export default Media;
