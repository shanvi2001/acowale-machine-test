import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "../services/api";

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.category ||
      !form.comments
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await api.post("/feedback/", form);

      toast.success("Feedback Submitted Successfully!");

      setForm({
        name: "",
        email: "",
        category: "",
        comments: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Submit Feedback
        </h1>

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-4 mb-4 rounded-lg bg-slate-800 text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 mb-4 rounded-lg bg-slate-800 text-white"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-4 mb-4 rounded-lg bg-slate-800 text-white"
        >
          <option value="">Select Category</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Complaint">Complaint</option>
        </select>

        <textarea
          rows={5}
          name="comments"
          placeholder="Write your feedback..."
          value={form.comments}
          onChange={handleChange}
          className="w-full p-4 mb-6 rounded-lg bg-slate-800 text-white"
        />

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}