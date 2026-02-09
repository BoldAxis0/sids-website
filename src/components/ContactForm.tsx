import { useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("maqdnjwd");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-yellow-50 via-blue-50 to-purple-50"
      >
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="mb-12 text-3xl block w-fit mx-auto relative">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300 rounded-full"></span>
          </h2>
          <p className="text-center text-gray-600 mb-8 text-3xl">
            Thanks for your message! I'll get back to you as soon as I can 🙂
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-yellow-50 via-blue-50 to-purple-50"
    >
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="mb-12 text-3xl block w-fit mx-auto relative">
          Get In Touch
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300 rounded-full"></span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have an idea? Lets talk. Just fill this out, or email at the top of
          the page
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="your.email@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent resize-none"
              placeholder="Your message..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            disabled={state.submitting}
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
