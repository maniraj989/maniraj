"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error || "Failed to send message. Please email manirajsharma193@gmail.com directly."
        );
      }

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please email manirajsharma193@gmail.com directly.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Huge Headline */}
          <div className="lg:col-span-8">
            <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-4">
              08 // Let&apos;s Connect
            </span>

            <h2 className="font-editorial-serif text-[clamp(3.2rem,7vw,7rem)] font-normal tracking-tight text-theme-text leading-[0.92] mb-8 select-none">
              LET&apos;S BUILD <br />
              <span className="italic text-[var(--accent-color)]">SOMETHING</span> <br />
              USEFUL.
            </h2>

            <p className="text-theme-muted text-lg sm:text-xl font-normal leading-relaxed max-w-xl mb-10">
              Have an idea, project or opportunity? I am open to discussing engineering roles, web applications, and technical consulting.
            </p>

            {/* Conversation Trigger Button */}
            {!showForm ? (
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white shadow-lg transition-all duration-150 active:scale-95"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : null}

            {/* Interactive Contact Form */}
            {showForm && (
              <div className="p-8 rounded-2xl bg-theme-surface border border-theme-border max-w-xl shadow-xl animate-in fade-in duration-200">
                {isSent ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div>
                      <div className="font-bold text-sm text-theme-text">Message received!</div>
                      <div className="text-xs text-theme-muted mt-0.5">
                        Thanks for getting in touch. I will respond to your email shortly.
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="user-name" className="block text-xs font-mono text-theme-muted mb-1.5">
                          Name
                        </label>
                        <input
                          id="user-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-lg border border-theme-border bg-theme-elevated text-sm text-theme-text placeholder:text-theme-muted/50 focus:outline-none focus:border-[var(--accent-color)]"
                        />
                      </div>

                      <div>
                        <label htmlFor="user-email" className="block text-xs font-mono text-theme-muted mb-1.5">
                          Email
                        </label>
                        <input
                          id="user-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-theme-border bg-theme-elevated text-sm text-theme-text placeholder:text-theme-muted/50 focus:outline-none focus:border-[var(--accent-color)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="user-message" className="block text-xs font-mono text-theme-muted mb-1.5">
                        Project Brief / Message
                      </label>
                      <textarea
                        id="user-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about what you are looking to build..."
                        className="w-full px-4 py-2.5 rounded-lg border border-theme-border bg-theme-elevated text-sm text-theme-text placeholder:text-theme-muted/50 focus:outline-none focus:border-[var(--accent-color)] resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white transition-colors disabled:opacity-50"
                      >
                        <span>{isSubmitting ? "Dispatching..." : "Send Message"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="text-xs font-mono text-theme-muted hover:text-theme-text"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Direct Channels */}
          <div className="lg:col-span-4 lg:pt-16 flex flex-col space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-theme-muted block mb-3">
                Direct Contact
              </span>
              <a
                href="mailto:manirajsharma193@gmail.com"
                className="text-base sm:text-lg font-mono font-medium text-theme-text hover:text-[var(--accent-color)] transition-colors break-all"
              >
                manirajsharma193@gmail.com
              </a>
            </div>

            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-theme-muted block mb-3">
                Network &amp; Profiles
              </span>
              <div className="flex flex-col space-y-3 font-mono text-sm">
                <a
                  href="https://github.com/maniraj989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-theme-muted hover:text-[var(--accent-color)] transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>github.com/maniraj989</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/maniraj-sharmma-221b69355/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-theme-muted hover:text-[var(--accent-color)] transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>linkedin.com/in/maniraj-sharmma-221b69355</span>
                </a>
                <a
                  href="https://manirajsharma.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-theme-muted hover:text-[var(--accent-color)] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>manirajsharma.com.np</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
