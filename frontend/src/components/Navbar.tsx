import { Link } from "react-router-dom";
import { FaChartPie } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold"
        >
          <FaChartPie className="text-cyan-400 text-3xl" />

          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            Acowale CRM
          </span>
        </Link>

        <div className="flex gap-8 text-slate-300">

          <Link
            className="hover:text-cyan-400 transition"
            to="/"
          >
            Home
          </Link>

          <Link
            className="hover:text-cyan-400 transition"
            to="/feedback"
          >
            Feedback
          </Link>

          <Link
            className="hover:text-cyan-400 transition"
            to="/dashboard"
          >
            Dashboard
          </Link>

          <Link
            className="hover:text-cyan-400 transition"
            to="/login"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}