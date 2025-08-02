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
            Meet the artist behind Painted Turtle LLC
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pt-6 pb-16 md:pt-6 md:pb-24">
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
                <div className="space-y-4 text-olive/80 leading-relaxed font-body">
                  <p className="text-lg">
                    My name is Penelope Gittings, and I am the nature loving artist who started Painted Turtle LLC. Much of Michigan's natural beauty and wonder, including wildlife, forests, and sand dunes, are threatened by climate change, development, and invasive species.
                  </p>
                  <p className="text-lg">
                    The goal of Painted Turtle is to help share the beauty of nature with your friends and family, as well as raise awareness for wildlife. Every card design was hand painted in the hopes of helping conservation efforts in Michigan.
                  </p>
                  <p className="text-lg">
                    I would like to thank everyone for supporting not only my art, but plants and animals across the beautiful state of Michigan.
                  </p>
                </div>
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
              Three core values that guide Painted Turtle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-sky/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
                             <h3 className="font-heading text-xl font-semibold text-olive mb-4">Artistic Expression</h3>
               <p className="text-olive/70">
                 Improving my own artistic abilities while sharing the beauty of nature with others
               </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-turtle/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-olive mb-4">Environmental Stewardship</h3>
              <p className="text-olive/70">
                Raising awareness for threatened wildlife and protective conservation efforts in Northern Michigan
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-olive mb-4">Community Impact</h3>
              <p className="text-olive/70">
                Connecting people through art and a shared love of the world
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 