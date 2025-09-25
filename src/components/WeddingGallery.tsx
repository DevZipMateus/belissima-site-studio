import { Button } from "@/components/ui/button";

const WeddingGallery = () => {
  const images = [
    "/fotos e video/3A239AA76C3F7D922D5B.jpeg",
    "/fotos e video/3A37C9D52F0E5D3387B2.jpeg", 
    "/fotos e video/3A5BD2093A1B4022159E.jpeg",
    "/fotos e video/3A5CA863E3FED356B30B.jpeg",
    "/fotos e video/3A7146261E426C78298C.jpeg",
    "/fotos e video/3AB269B852E67798723A.jpeg",
    "/fotos e video/3ABC2000C95A910CE2C1.jpeg",
    "/fotos e video/3ADFC8971AE317074C29.jpeg",
    "/fotos e video/3AE9F07DE96CFD58338C.jpeg",
    "/fotos e video/3A020AB602112DF14551.jpeg",
    "/fotos e video/3A18C79EB0B9FD18AC71.jpeg",
    "/fotos e video/3AA126DE7E45D3242D42.jpeg"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image}
                alt={`Vestido de casamento ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            className="btn-hero"
            onClick={() => {
              const contactSection = document.getElementById('contato');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Para mais detalhes entre em contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeddingGallery;