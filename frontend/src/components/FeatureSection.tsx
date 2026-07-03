import { FaChartLine, FaComments, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaComments size={35} />,
    title: "Collect Feedback",
    desc: "Allow customers to submit valuable feedback with categories and comments."
  },
  {
    icon: <FaChartLine size={35} />,
    title: "Analytics Dashboard",
    desc: "Track trends, category distribution and recent submissions in real time."
  },
  {
    icon: <FaShieldAlt size={35} />,
    title: "Secure & Reliable",
    desc: "Production-ready APIs with validation, logging and authentication."
  }
];

export default function FeatureSection() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Why Choose Acowale CRM?
        </h2>

        <p className="text-center text-slate-400 mt-5 mb-16">
          Everything you need to collect and analyze customer feedback.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-8 hover:border-cyan-400 transition"
            >
              <div className="text-cyan-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl text-white font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}