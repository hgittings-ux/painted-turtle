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

      {/* Portrait Section */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-gradient-to-br from-sky/20 to-lake/20 rounded-3xl">
            <Image 
              src="/images/penelope.JPG" 
              alt="Penelope Gittings portrait" 
              width={300} 
              height={300} 
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="card p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-olive mb-8 text-center">
              My Story
            </h2>
            <div className="space-y-6 text-olive/80 leading-relaxed font-body max-w-4xl mx-auto">
              <p className="text-lg md:text-xl">
                I, Penelope Gittings, am the founder of Painted Turtle. Since I was young, I always had a concern for nature and its wellbeing. When I was in third grade, my friends and I tried to start a lemonade stand to donate to endangered species, but alas, coordinating the schedules of four kids with ages in the single digits is no easy task, and that plan had to be abandoned. During the summer of 2025, finding myself drawing birds, I returned to the concept of a business to support nature. Hence, Painted Turtle was born! To make my products, I create a design on a 5.5 x 8.7 piece of watercolor paper, then copy and print my art to sell as stickers or cards. After business expenses, I donate the profits to the Grand Traverse Regional Land Conservancy, or GTRLC for short. For more information of the work of GTRLC, visit their website linked below, but the sparknotes summary is that they buy land or make agreements with landowners in Northern Michigan to preserve nature and have sustainable development. I choose to donate profits to GTRLC because their work will last for centuries, and it encompasses many aspects of nature. If you have any questions about me, my business, or anything else, contact me at the email provided below.
              </p>
              <p className="text-lg md:text-xl">
                I would like to thank everyone for supporting not only my art, but plants and animals across the beautiful state of Michigan.
              </p>
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
              Core values that guide Painted Turtle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-sky/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
                             <h3 className="font-heading text-xl font-semibold text-olive mb-4">Artistic Expression</h3>
               <p className="text-olive/70">
               The process of creating art is soothing, and I especially love to things I find beautiful or inspiring. It's so rewarding when people appreciate or admire your work. Any creator can tell you about the self doubt, but Painted Turtle has helped me find more confidence in my own abilities, so I thank you for supporting my journey.

               </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-turtle/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-olive mb-4">Supporting Nature</h3>
              <p className="text-olive/70">
              Nature is the ultimate inspiration for my work. It's the purest thing on Earth, and I aim to capture its beauty in every brushstroke. If I can help preserve the beauty of nature through awareness or financial means, I will be satisfied.
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