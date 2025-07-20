export default function GivingBack() {
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
            Giving Back
          </h1>
          <p className="text-xl text-olive/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transparency in how we protect Northern Michigan's wildlife
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-olive mb-8">
              Our Commitment
            </h2>
                         <p className="text-xl text-olive/80 leading-relaxed mb-8">
               Painted Turtle LLC is committed to complete transparency. <strong>100% of profits</strong> from hand-painted cards and prints are donated to protect wildlife in Northern Michigan.
             </p>
            <div className="bg-gradient-to-br from-forest/10 to-goldenrod/10 rounded-2xl p-6">
              <p className="text-lg text-olive font-semibold mb-2">
                🚧 Detailed Reports Coming Soon! 🚧
              </p>
              <p className="text-olive/70">
                We're working on detailed donation breakdowns and regular updates to show exactly where your support goes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-sand via-white to-sand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-olive mb-6">
              Where Your Support Goes
            </h2>
            <p className="text-xl text-olive/70 max-w-2xl mx-auto">
              Three key areas where we're making a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🐢</span>
              </div>
              <h3 className="text-xl font-semibold text-olive mb-4">Turtle Conservation</h3>
              <p className="text-olive/70 mb-4">
                Supporting local turtle and bird conservation groups working to protect native species
              </p>
              <ul className="text-sm text-olive/60 space-y-1">
                <li>• Blanding's Turtle protection</li>
                <li>• Painted Turtle habitat restoration</li>
                <li>• Bird migration corridor preservation</li>
              </ul>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌲</span>
              </div>
              <h3 className="text-xl font-semibold text-olive mb-4">Bird Protection</h3>
              <p className="text-olive/70 mb-4">
                Preserving bird habitats and migration routes
              </p>
              <ul className="text-sm text-olive/60 space-y-1">
                <li>• Wetland restoration</li>
                <li>• Forest corridor creation</li>
                <li>• Native plant restoration</li>
              </ul>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-olive mb-4">Habitat Preservation</h3>
              <p className="text-olive/70 mb-4">
                Maintaining wild spaces for future generations
              </p>
              <ul className="text-sm text-olive/60 space-y-1">
                <li>• School nature programs</li>
                <li>• Community workshops</li>
                <li>• Wildlife awareness campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-sky/30 via-lake/20 to-forest/10 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl border border-white/20">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl text-olive mb-8">
                Our Impact
              </h2>
              <p className="text-xl text-olive/80 leading-relaxed mb-12">
                While we're just getting started, we're committed to making a real difference in Northern Michigan's wildlife conservation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-olive mb-2">100%</div>
                  <p className="text-olive/70">Of profits donated</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-olive mb-2">Local</div>
                  <p className="text-olive/70">Northern Michigan focus</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-olive mb-2">Transparent</div>
                  <p className="text-olive/70">Regular updates coming</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6">
                <p className="text-olive/80">
                  <strong>Coming Soon:</strong> Quarterly reports showing exactly how much we've donated and where it went. 
                  We believe in complete transparency so you can see the real impact of your support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 