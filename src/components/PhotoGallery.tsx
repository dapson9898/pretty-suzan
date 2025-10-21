import suzan1 from '@/assets/suzan1.jpg';
import suzan2 from '@/assets/suzan2.jpg';
import suzan3 from '@/assets/suzan3.jpg';

export const PhotoGallery = () => {
  const photos = [
    { src: suzan1, alt: "Suzan in purple", caption: "Elegance in Purple" },
    { src: suzan2, alt: "Suzan in traditional attire", caption: "Grace & Beauty" },
    { src: suzan3, alt: "Suzan in red dress", caption: "Radiant in Red" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-playfair font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
          Capturing Beautiful Moments
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-2xl font-playfair font-semibold text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {photo.caption}
                </p>
              </div>
              
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
