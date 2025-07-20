export default function Contact() {
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
            Contact Us
          </h1>
          <p className="text-xl text-olive/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have questions about our art or conservation efforts? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 md:p-12">
            <h2 className="font-heading text-3xl text-olive mb-8 text-center">
              Get in Touch
            </h2>
            
            <form className="space-y-6" action="mailto:hello@paintedturtle.com" method="POST" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-olive font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-olive/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors bg-white/80 backdrop-blur-sm"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-olive font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-olive/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors bg-white/80 backdrop-blur-sm"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-olive font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="w-full px-4 py-3 border border-olive/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors bg-white/80 backdrop-blur-sm resize-vertical"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn-primary text-lg py-4"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-olive/20 text-center">
              <p className="text-olive/70 mb-4">
                Or email us directly at:
              </p>
              <a 
                href="mailto:hello@paintedturtle.com" 
                className="text-olive font-semibold hover:text-forest transition-colors text-lg"
              >
                hello@paintedturtle.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-sand via-white to-sand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-olive mb-6">
              What We'd Love to Hear About
            </h2>
            <p className="text-xl text-olive/70 max-w-2xl mx-auto">
              Ideas, questions, or just want to say hello
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💭</span>
              </div>
              <h3 className="text-xl font-semibold text-olive mb-4">Art Ideas</h3>
              <p className="text-olive/70">
                Suggestions for new card designs or prints you'd like to see
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-olive mb-4">Conservation</h3>
              <p className="text-olive/70">
                Questions about our wildlife protection efforts and partnerships
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-olive mb-4">Partnerships</h3>
              <p className="text-olive/70">
                Ideas for collaborations or ways to support local conservation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 