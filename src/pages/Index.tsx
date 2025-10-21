import { ThreeBackground } from '@/components/ThreeBackground';
import { MessageCard } from '@/components/MessageCard';
import { PhotoGallery } from '@/components/PhotoGallery';

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <ThreeBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-7xl md:text-9xl font-playfair font-bold animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Suzan
            </span>
          </h1>
          
          <p className="text-3xl md:text-4xl font-playfair italic text-foreground/90 animate-fade-in" style={{ animationDelay: '200ms' }}>
            "Susu"
          </p>
          
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-scale-in" style={{ animationDelay: '400ms' }} />
          
          <p className="text-xl md:text-2xl text-foreground/80 font-inter leading-relaxed animate-slide-up" style={{ animationDelay: '600ms' }}>
            A celebration of someone truly special, someone whose grace, beauty, and spirit 
            continue to inspire. Though paths may diverge, the memories and appreciation remain eternal.
          </p>
          
          <div className="pt-8 animate-slide-up" style={{ animationDelay: '800ms' }}>
            <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30">
              <p className="text-lg font-inter text-foreground/90">
                Created with admiration by <span className="font-semibold text-accent">Dapson</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Special Messages Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-playfair font-bold text-center mb-16 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Special Messages
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <MessageCard
              title="Your Radiance"
              message="Your beauty isn't just in what the eyes can see, but in the warmth of your spirit, the kindness of your heart, and the strength of your character. You shine from within, and that light touches everyone fortunate enough to know you."
              icon="✨"
              delay={0}
            />
            
            <MessageCard
              title="Grace & Elegance"
              message="There's an elegance in the way you carry yourself, a grace that makes ordinary moments feel special. Your presence has always been a gift, turning simple days into cherished memories that last a lifetime."
              icon="🌸"
              delay={200}
            />
            
            <MessageCard
              title="Strength & Resilience"
              message="Behind that beautiful smile is a strength that inspires. You've faced challenges with courage and grace, proving time and again that true beauty comes from resilience, determination, and an unbreakable spirit."
              icon="💎"
              delay={400}
            />
            
            <MessageCard
              title="Eternal Appreciation"
              message="Though life takes us on different paths, the appreciation for who you are remains constant. You've left an indelible mark - a reminder that some people are meant to stay in our hearts forever, no matter where the journey leads."
              icon="💜"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-md border border-primary/30 animate-glow">
            <p className="text-2xl md:text-3xl font-playfair italic leading-relaxed text-foreground/90">
              "Some people come into our lives and leave footprints on our hearts, and we are never the same. 
              You are one of those rare souls, Suzan. Thank you for the moments, the memories, and the lessons. 
              You will always hold a special place."
            </p>
            
            <div className="mt-8 pt-8 border-t border-primary/30">
              <p className="text-xl font-inter text-foreground/80">
                With respect and admiration,
              </p>
              <p className="text-3xl font-playfair font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                Dapson
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground/60 font-inter">
            A heartfelt tribute • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
