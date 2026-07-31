export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-slate-900 text-white">
      <h1 className="text-2xl font-bold text-cyan-400">
        🧠 CivicMind AI
      </h1>

      <ul className="hidden md:flex gap-8 text-lg">
        <li className="hover:text-cyan-400 cursor-pointer">Home</li>
        <li className="hover:text-cyan-400 cursor-pointer">Features</li>
        <li className="hover:text-cyan-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-cyan-400 cursor-pointer">About</li>
      </ul>
    </nav>
  );
}