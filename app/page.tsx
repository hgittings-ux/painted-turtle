import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen watercolor-bg bg-cream text-olive font-body">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-cream border-b border-goldenrod/40">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex flex-row items-center justify-center mb-4">
            <Image
              src="/images/Painted Turtle Logo_Stacked_High DPI.png"
              alt="Painted Turtle logo"
              width={378}
              height={252}
              className="h-[252px] w-auto object-contain mx-auto"
              priority
            />
          </div>
          <p className="text-2xl md:text-3xl text-olive/80 font-light mb-8">
            Hand-painted art inspired by the wild beauty of Northern Michigan
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 md:py-24 bg-sand border-b border-goldenrod/40">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-forest mb-6">About Penelope</h2>
          <div className="text-lg md:text-xl text-olive leading-relaxed mb-4 space-y-4">
            <p>
              My name is Penelope Gittings, and I am the nature loving artist who started Painted Turtle LLC. Much of Michigan's natural beauty and wonder, including wildlife, forests, and sand dunes, are threatened by climate change, development, and invasive species.
            </p>
            <p>
              The goal of Painted Turtle is to help share the beauty of nature with your friends and family, as well as raise awareness for wildlife. Every card design was hand painted in the hopes of helping conservation efforts in Michigan.
            </p>
            <p>
              I would like to thank everyone for supporting not only my art, but plants and animals across the beautiful state of Michigan.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16 md:py-24 bg-goldenrod/10 border-b border-goldenrod/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-olive mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end justify-center mb-8">
            {/* Blue Jay */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/blue-jay-greeting-card.jpeg"
                alt="Blue Jay Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Blue Jay Greeting Card</div>
            </div>
            {/* Painted Turtle */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/painted-turtle-greeting-card.jpeg"
                alt="Painted Turtle Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Painted Turtle Greeting Card</div>
            </div>
                        {/* Martin */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/martin-greeting-card.jpeg"
                alt="Martin Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Martin Greeting Card</div>
            </div>
            {/* Cardinal */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/cardinal-PT.jpg"
                alt="Cardinal Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Cardinal Greeting Card</div>
            </div> 
            {/* Black Bear Cub */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/black-bear-cub-PT.jpg"
                alt="Black Bear Cub Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Black Bear Cub Greeting Card</div>
            </div>
            {/* Red Tailed Hawk */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/red-tailed-hawk-PT.jpg"
                alt="Red Tailed Hawk Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Red Tailed Hawk Greeting Card</div>
            </div>
            {/* Great Horned Owl */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/great-horned-owl-PT.jpg"
                alt="Great Horned Owl Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Great Horned Owl Greeting Card</div>
            </div>
            {/* Gold Finch */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/gold-finch-PT.jpg"
                alt="Gold Finch Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Gold Finch Greeting Card</div>
            </div>
            {/* Robin */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/robin-PT.jpg"
                alt="Robin Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Robin Greeting Card</div>
            </div>
            {/* Spring Peeper */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/spring-peeper-PT.jpg"
                alt="Spring Peeper Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Spring Peeper Greeting Card</div>
            </div>
            {/* Indiana Bat */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/indiana-bat-PT.jpg"
                alt="Indiana Bat Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Indiana Bat Greeting Card</div>
            </div>
            {/* Indigo Bunting */}
            <div className="bg-cream rounded-2xl shadow-lg p-4 flex flex-col items-center h-80 justify-center">
              <Image
                src="/images/indigo-bunting-PT.jpg"
                alt="Indigo Bunting Greeting Card"
                width={320}
                height={240}
                className="rounded-xl object-contain mx-auto h-56 w-auto"
              />
              <div className="mt-4 text-olive text-lg font-medium">Indigo Bunting Greeting Card</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Contact CTA Section */}
      <section className="w-full py-16 md:py-24 bg-forest/10 border-b border-forest/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-forest mb-6">Support Conservation</h2>
          <p className="text-lg text-olive mb-6">Join us in protecting Michigan's wildlife and natural beauty. Every purchase supports local conservation efforts.</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-full border border-forest/40 focus:outline-none focus:ring-2 focus:ring-forest/50 bg-white/80 w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-forest text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Stay Connected
            </button>
          </form>
          <div className="mt-4 text-olive/60 text-sm">
            Thank you for supporting Michigan's wildlife and my art! <a href="mailto:hello@paintedturtle.com" className="underline text-forest">Contact me</a> directly.
          </div>
        </div>
      </section>
    </div>
  );
}