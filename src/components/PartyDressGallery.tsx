import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const PartyDressGallery = () => {
  const images = [
    "/fotos e video/festa1.jpeg",
    "/fotos e video/festa2.jpeg", 
    "/fotos e video/festa3.jpeg",
    "/fotos e video/festa4.jpeg"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="section-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-12">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <img
                    src={image}
                    alt={`Vestido de festa ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-4xl w-full p-0 bg-transparent border-none">
                <DialogTitle className="sr-only">Vestido de festa {index + 1}</DialogTitle>
                <img
                  src={image}
                  alt={`Vestido de festa ${index + 1}`}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              </DialogContent>
            </Dialog>
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
            Para saber mais detalhes e modelos entre em contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartyDressGallery;