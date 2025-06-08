import Book from "./Book";

export default function Home() {
  return (
    <div className="min-h-screen font-lora pt-32 bg-[#272924] text-white">
      {/* Main content */}
      <div className="flex justify-center min-h-screen px-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                Chainless Apps:
              </h1>
              <h2 className="text-xl">
                A Modular Framework for Building Apps with Web2 Capability and
                Web3 Trust
              </h2>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-base">
                Modern blockchain applications are often constrained by a
                trade-off between user experience and trust. Chainless Apps
                present a new paradigm of application architecture that
                separates execution, trust, bridging, and settlement into
                distinct compostable layers. This enables app-specific
                sequencing, verifiable off-chain computation, chain-agnostic
                asset and message routing via Agglayer, and finality on Ethereum
                — resulting in fast Web2-like UX with Web3-grade verifiability.
                Although consensus mechanisms have historically underpinned
                verifiable computation, the advent of zkVMs and decentralized
                validation services opens up new trust models for developers.
                Chainless Apps leverage this evolution to offer modular,
                scalable applications that maintain interoperability with the
                broader blockchain ecosystem while allowing domain-specific
                trade-offs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <a
                  href="https://arxiv.org/pdf/2505.22989"
                  className="group relative w-full text-left max-w-sm border border-white pl-6 duration-200 flex items-center"
                >
                  <span
                    style={{
                      height: 56,
                    }}
                    className="w-1 bg-white absolute left-0 top-0 h-full scale-x-0 group-hover:scale-x-100 transition-transform"
                  />
                  <div className="flex w-full items-center gap-2">
                    <span
                      style={{
                        transformOrigin: 0,
                      }}
                      className="flex w-full items-center gap-2 group-hover:translate-x-1 transition-transform"
                    >
                      Read whitepaper
                    </span>
                    <div className="ml-auto px-2 border-l py-4 bg-[#272924] group-hover:bg-white border-white transition-colors text-white group-hover:text-[#272924]">
                      <span>↗</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Author Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-[60px] h-[1px] bg-white" />
                  <h3 className="text-xl font-bold italic">Authors</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-base leading-relaxed">
                    <strong>Brain Seong</strong> is a Research & DevRel Engineer
                    at Polygon.
                  </p>

                  <div className="flex space-x-4">
                    <a
                      href="https://x.com/BrianSeong99"
                      className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#272924] transition-colors duration-200"
                    >
                      X
                    </a>
                    <a
                      href="https://brian-seong.ghost.io/"
                      className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#272924] transition-colors duration-200"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
