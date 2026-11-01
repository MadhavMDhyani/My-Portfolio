const BackgroundBlobs = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Radial Base Gradient */}
      <div className="absolute inset-0 bg-indigo-page" />

      {/* Liquid Blurred Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-indigo-brand/40 blur-[120px] md:blur-[140px] animate-blob-slow-1 will-change-transform" />
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-400/25 blur-[120px] md:blur-[150px] animate-blob-slow-2 will-change-transform" />
      <div className="absolute bottom-[-15%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/60 blur-[130px] md:blur-[160px] animate-blob-slow-3 will-change-transform" />
      <div className="absolute top-[60%] left-[-5%] w-[35vw] h-[35vw] rounded-full bg-ghost/[0.04] blur-[100px] animate-blob-slow-1 will-change-transform" />

      {/* Subtle Noise Grain Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-60 mix-blend-overlay" />
    </div>
  );
};

export default BackgroundBlobs;
