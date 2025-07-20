import './globals.css';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Painted Turtle LLC',
  description: 'Watercolor art inspired by Northern Michigan. 100% of profits donated to protect local wildlife.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for handwritten and sans fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Lato&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col watercolor-bg bg-cream text-olive font-body antialiased">
        <Navigation />
        
        {/* Main content with top padding for fixed nav */}
        <main className="flex-1 pt-16">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-forest text-cream font-body text-center py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-2 flex justify-center">
              <img src="/images/Painted Turtle Logo_Stacked_High Res Standard.png" alt="Painted Turtle stacked logo" className="h-10 w-auto" style={{ maxHeight: '2.5rem' }} />
            </div>
            <p className="text-sm opacity-90 mb-2">
              100% of profits from hand-painted cards donated to protect Northern Michigan wildlife
            </p>
            <p className="text-xs opacity-75">
              &copy; {new Date().getFullYear()} Painted Turtle LLC. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
