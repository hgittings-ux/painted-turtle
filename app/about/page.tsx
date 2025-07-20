import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-cream text-olive font-body">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-forest/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-goldenrod/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl text-olive mb-8">
            About Penelope
          </h1>
          <p className="text-xl text-olive/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Meet the teenage artist behind Painted Turtle LLC
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="text-center lg:text-left">
              <div className="inline-block p-4 bg-gradient-to-br from-sky/20 to-lake/20 rounded-3xl">
                <Image 
                  src="/file.svg" 
                  alt="Penelope portrait placeholder" 
                  width={300} 
                  height={300} 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
            
            {/* Story */}
            <div className="space-y-6">
              <div className="card p-8">
                <h2 className="font-heading text-3xl text-olive mb-6">
                  My Story
                </h2>
                <div className="space-y-4 text-olive/80 leading-relaxed">
                  <p className="text-lg">
                    Hi! I'm Penelope, a teenage artist from Northern Michigan. I started Painted Turtle LLC to share my love of watercolor and the outdoors, and to help protect the wildlife that inspires my art.
                  </p>
                                     <p>
                     My cards and prints are inspired by the lakes, forests, and animals of my home. Every card is hand-painted by me with care, and every purchase helps support local conservation efforts.
                   </p>
                  <p>
                    When I'm not painting, you can find me exploring the woods, watching birds, or learning about local wildlife. The natural beauty of Northern Michigan is what drives my creativity.
                  </p>
                </div>
              </div>
              
              <div className="card p-8">
                <h3 className="font-heading text-2xl text-olive mb-4">
                  My Mission
                </h3>
                <p className="text-olive/80 leading-relaxed">
                  Thank you for supporting my art and helping protect the wild places and creatures I love! Together, we can make a difference for Northern Michigan's wildlife.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-sand via-white to-sand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-olive mb-6">
              What Drives Me
            </h2>
            <p className="text-xl text-olive/70 max-w-2xl mx-auto">
              Three core values that guide everything I create
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-sky/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
                             <h3 className="font-heading text-xl font-semibold text-olive mb-4">Artistic Expression</h3>
               <p className="text-olive/70">
                 Creating beautiful hand-painted watercolor art that captures the essence of Northern Michigan's natural beauty
               </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-turtle/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-olive mb-4">Environmental Stewardship</h3>
              <p className="text-olive/70">
                Using eco-friendly materials and donating all profits to protect local wildlife and habitats
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-olive mb-4">Community Impact</h3>
              <p className="text-olive/70">
                Building connections through art while supporting conservation efforts in our local community
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 