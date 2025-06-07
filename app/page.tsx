import Book from "./Book";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#272924] text-white">
      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - 3D Book */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full">
              <Book />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                The Scaling Era: An Oral History of AI, 2019–2025
              </h1>
              <p className="text-xl text-blue-200 italic">
                Dwarkesh Patel with Gavin Leech
              </p>
            </div>

            <div className="inline-block">
              <button className="border border-white px-6 py-3 text-white hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Living cover
              </button>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                How did we build large language models? How do they think,{" "}
                <em>if</em> they think? What will the world look like if we have
                billions of AIs that are as smart as humans, or even smarter? In
                a series of in-depth interviews with leading AI researchers and
                company founders—including Anthropic CEO Dario Amodei, DeepMind
                cofounder Denis Hassabis, OpenAI cofounder Ilya Sutskever, MIRI
                cofounder Eliezer Yudkowsky, and Meta CEO Mark
                Zuckerberg—Dwarkesh Patel provides the first comprehensive and
                contemporary portrait of the technology that is transforming our
                world. Drawn from his interviews on the{" "}
                <em>Dwarkesh Podcast</em>, these curated excerpts range from the
                technical details of how LLMs work to the possibility of an AI
                takeover or explosive economic growth. It also includes 170+
                definitions and visualizations, classic essays on the theme, and
                previously unpublished interviews. <em>The Scaling Era</em>{" "}
                offers readers unprecedented insight into a transformative
                moment in AI&apos;s development—and a vision of what comes next.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xl italic mb-4">
                  Preorder the hardcover from Stripe Press to receive a PDF
                  version now
                </p>
              </div>

              <div className="space-y-3">
                <button className="w-full max-w-sm border border-white px-6 py-4 text-left hover:bg-white hover:text-blue-900 transition-colors duration-200 flex justify-between items-center">
                  <span>Preorder on Stripe (US) $35</span>
                  <span>↗</span>
                </button>
                <button className="w-full max-w-sm border border-white px-6 py-4 text-left hover:bg-white hover:text-blue-900 transition-colors duration-200 flex justify-between items-center">
                  <span>Preorder on Stripe (non-US) $35</span>
                  <span>↗</span>
                </button>
              </div>

              <div className="pt-4">
                <p className="text-xl italic">Buy the ebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-8 left-8">
        <div className="flex flex-col space-y-2">
          <div className="w-6 h-6 border border-white/50 flex items-center justify-center">
            <span className="text-xs">?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
