import { useState } from "react";
import { contactContent } from "../../data/contact";

// ── Icons ──────────────────────────────────────────────────────────────────

const icons = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .82h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
};

// ── Input Field ────────────────────────────────────────────────────────────

interface InputProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

function InputField({ label, type = "text", placeholder, value, onChange, required }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}{required && <span className="text-[#6B4EC6] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#151528] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#6B4EC6] focus:ring-2 focus:ring-[#6B4EC6]/20 transition-all duration-200 text-sm"
      />
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function ContactSection() {
  const { eyebrow, headlinePlain, headlineAccent, headlineEnd, subtext, contactItems, form } = contactContent;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${form.submitEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="bg-[#F3F0FB] dark:bg-[#0D0D1A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: Info ────────────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[#6B4EC6]" />
                <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
              </div>
              <span className="text-[#6B4EC6] text-sm font-semibold tracking-widest uppercase">
                {eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {headlinePlain}{" "}
              <span className="text-[#6B4EC6]">{headlineAccent}</span>{" "}
              {headlineEnd}
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-12">
              {subtext}
            </p>

            {/* Contact items */}
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-3 group"
                  >
                    {/* <span className="w-10 h-10 rounded-full bg-[#6B4EC6] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#5A3EAD] transition-colors duration-200 shadow-lg shadow-purple-500/20">
                      {icons[item.icon]}
                    </span> */}
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-base group-hover:text-[#6B4EC6] transition-colors duration-200">
                      {item.value}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ───────────────────────────────────────────── */}
          <div className="bg-white dark:bg-[#151528] rounded-2xl p-8 shadow-xl shadow-purple-900/10 border border-gray-100 dark:border-white/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#6B4EC6]/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#6B4EC6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <InputField
                  label="Full Name"
                  placeholder="Your full name"
                  value={name}
                  onChange={setName}
                  required
                />
                <InputField
                  label="Telephone"
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={setPhone}
                  required
                />
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={setEmail}
                  required
                />

                {/* Message textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message<span className="text-[#6B4EC6] ml-0.5">*</span>
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#151528] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#6B4EC6] focus:ring-2 focus:ring-[#6B4EC6]/20 transition-all duration-200 text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#6B4EC6] hover:bg-[#5A3EAD] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 active:scale-95 text-base"
                >
                  {form.buttonLabel}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}