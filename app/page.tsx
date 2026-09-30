import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Discover Our Products",
  description:
    "Discover our collection of products and explore our latest products.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <AnnouncementBar />
      <Header />

      <main>
        <Hero />
        <Catalog />
      </main>

      <Footer />
    </>
  );
}