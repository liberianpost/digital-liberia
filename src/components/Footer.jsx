import React from "react";

export default function Footer() {
  return (
    <>
      {/* Let's Connect (contact strip) */}
      <section className="relative py-16 md:py-20 px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8 rounded-full"></div>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
              <a
                href="mailto:info@digitalliberia.com"
                className="flex items-center justify-center gap-3 text-white/70 hover:text-red-400 transition-all duration-300 group"
              >
                <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  ✉️
                </span>
                <span className="text-base md:text-lg font-semibold">
                  info@digitalliberia.com
                </span>
              </a>
              <a
                href="https://wa.me/231888001077"
                className="flex items-center justify-center gap-3 text-white/70 hover:text-red-400 transition-all duration-300 group"
              >
                <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  📱
                </span>
                <span className="text-base md:text-lg font-semibold">
                  WhatsApp: +231 888 001 077
                </span>
              </a>
              <a
                href="tel:+231775055817"
                className="flex items-center justify-center gap-3 text-white/70 hover:text-blue-400 transition-all duration-300 group"
              >
                <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  📞
                </span>
                <span className="text-base md:text-lg font-semibold">
                  Call: +231 775 055 817
                </span>
              </a>
            </div>

            <p className="text-white/40 text-xs mt-8">
              Monday - Friday, 8:00 AM - 5:00 PM GMT
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 md:py-12 px-4 border-t border-white/10 bg-gradient-to-r from-red-500/10 to-blue-500/10 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-xs md:text-sm">
            © {new Date().getFullYear()} Digital Liberia Inc. All rights reserved.
          </p>
          <p className="bg-gradient-to-r from-red-500/50 to-blue-500/50 bg-clip-text text-transparent mt-2 flex items-center justify-center gap-2 text-xs md:text-sm">
            <span>Building Africa's Digital Future</span>
            <span className="text-base md:text-xl">🇱🇷</span>
          </p>
        </div>
      </footer>
    </>
  );
}
