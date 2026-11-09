export function NetworkBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 80% 70%, #0a1f33 0%, #07131e 60%, #040b12 100%)",
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <filter id="blue-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur1" />
            <feGaussianBlur stdDeviation="10" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connecting Lines */}
        <g stroke="#38bdf8" strokeWidth="1" opacity="0.35">
          {/* Upper cluster */}
          <line x1="780" y1="200" x2="1000" y2="80" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="780" y1="200" x2="1000" y2="150" />
          <line x1="780" y1="200" x2="1000" y2="240" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="780" y1="200" x2="930" y2="350" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="930" y1="350" x2="1000" y2="240" />
          <line x1="930" y1="350" x2="1000" y2="480" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />

          {/* Middle cluster */}
          <line x1="850" y1="490" x2="1000" y2="480" />
          <line x1="850" y1="490" x2="1000" y2="570" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="850" y1="490" x2="840" y2="620" />
          <line x1="840" y1="620" x2="1000" y2="570" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="840" y1="620" x2="1000" y2="700" />

          {/* Lower cluster */}
          <line x1="840" y1="620" x2="770" y2="740" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="600" y1="680" x2="770" y2="740" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="600" y1="680" x2="430" y2="860" />
          <line x1="770" y1="740" x2="500" y2="825" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="770" y1="740" x2="960" y2="850" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="770" y1="740" x2="1000" y2="700" />
          <line x1="500" y1="825" x2="430" y2="860" />
          <line x1="500" y1="825" x2="960" y2="850" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="500" y1="825" x2="670" y2="950" />
          <line x1="430" y1="860" x2="670" y2="950" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="670" y1="950" x2="960" y2="850" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="670" y1="950" x2="1000" y2="980" />
          <line x1="960" y1="850" x2="1000" y2="840" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.65" />
          <line x1="960" y1="850" x2="1000" y2="980" />
        </g>

        {/* Glowing Nodes */}
        <g fill="#e0f2fe" filter="url(#blue-glow)">
          <circle cx="780" cy="200" r="3.5" className="animate-pulse" />
          <circle cx="930" cy="350" r="2.5" />
          <circle cx="850" cy="490" r="3.5" className="animate-pulse" />
          <circle cx="840" cy="620" r="2.5" />
          <circle cx="600" cy="680" r="2.5" />
          <circle cx="770" cy="740" r="4" className="animate-pulse" />
          <circle cx="500" cy="825" r="3" />
          <circle cx="670" cy="950" r="3.5" className="animate-pulse" />
          <circle cx="960" cy="850" r="3.5" />
        </g>
      </svg>
    </div>
  );
}
