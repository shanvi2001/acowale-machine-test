import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-black text-center bg-gradient-to-r from-violet-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Acowale CRM
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-2xl text-slate-300"
      >
        Customer Feedback Platform
      </motion.p>

      <p className="mt-5 max-w-3xl text-center text-slate-400 leading-8">
        Collect customer feedback, analyze trends and manage everything
        through one beautiful dashboard.
      </p>

      <div className="mt-12 flex gap-6">
        <Link
          to="/feedback"
          className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition"
        >
          Submit Feedback
        </Link>

        <Link
          to="/dashboard"
          className="px-8 py-4 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          Dashboard
        </Link>
      </div>
    </section>
  );
}