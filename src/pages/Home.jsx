export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          Build. Innovate. Win.
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          A reusable hackathon starter built with React and Tailwind CSS.
        </p>

        <button className="mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-20">
        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">⚡ Fast</h2>
          <p className="mt-3 text-gray-300">
            Built using React + Vite for speed.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">🎨 Modern</h2>
          <p className="mt-3 text-gray-300">
            Clean responsive UI using Tailwind CSS.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">🚀 Ready</h2>
          <p className="mt-3 text-gray-300">
            Easy to adapt to any hackathon theme.
          </p>
        </div>
      </section>
    </div>
  );
}