"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/container";

function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 border-b border-gray-200 ${transparent ? '' : 'bg-white'}`}>
      <Container>
        <nav className="flex items-center justify-between h-[75px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={transparent ? "/images/mock/mock_logo_white.png" : "/images/mock/mock_logo.png"}
              alt="Logo"
              width={0}
              height={43}
              sizes="100vw"
              className="w-auto h-[43px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/catalog/coffee"
              className={`text-base transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:primary'}`}
            >
              Coffee+
            </Link>
            <Link
              href="/catalog/tea"
              className={`text-base transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:primary'}`}
            >
              Tea+
            </Link>
            <Link
              href="/catalog/chocolate"
              className={`text-base transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:primary'}`}
            >
              Chocolate+
            </Link>
            <Link
              href="#"
              className={`text-base transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:primary'}`}
            >
              Support
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-8">
            {/* User Icon */}
            <Link href="/auth/login">
              <button
                type="button"
                aria-label="User account"
                className={`transition-colors cursor-pointer ${transparent ? 'text-white hover:text-white/80' : 'hover:primary'}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
                  <path d="M20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" />
                </svg>
              </button>
            </Link>
            {/* Cart Icon */}
            <button
              type="button"
              aria-label="Shopping cart"
              className={`transition-colors cursor-pointer ${transparent ? 'text-white hover:text-white/80' : 'hover:primary'}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5C20.76 19.89 19.5 22 16 22H8c-3.5 0-4.76-2.11-4.47-4.47l.9-7.5C4.66 8.09 5 6.5 8.4 6.5Z" />
                <path d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8" />
                <path d="M20.41 17.03H8" />
              </svg>
            </button>
            {/* Search Icon */}
            <button
              type="button"
              aria-label="Search"
              className={`transition-colors cursor-pointer ${transparent ? 'text-white hover:text-white/80' : 'hover:primary'}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11.5" cy="11.5" r="9.5" />
                <path d="m22 22-2-2" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 bg-black/60 backdrop-blur-lg">
          <Link
            href="#"
            className="text-white font-body text-base py-2 hover:text-white/80 transition-colors"
          >
            Coffee+
          </Link>
          <Link
            href="#"
            className="text-white font-body text-base py-2 hover:text-white/80 transition-colors"
          >
            Tea+
          </Link>
          <Link
            href="#"
            className="text-white font-body text-base py-2 hover:text-white/80 transition-colors"
          >
            Chocolate+
          </Link>
          <Link
            href="#"
            className="text-white font-body text-base py-2 hover:text-white/80 transition-colors"
          >
            Support
          </Link>
          <div className="flex items-center gap-6 pt-2 border-t border-white/20">
            <Link href="/auth/login">
              <button
                type="button"
                aria-label="User account"
                className="text-white cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
                  <path d="M20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" />
                </svg>
              </button>
            </Link>
            <button
              type="button"
              aria-label="Shopping cart"
              className="text-white cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5C20.76 19.89 19.5 22 16 22H8c-3.5 0-4.76-2.11-4.47-4.47l.9-7.5C4.66 8.09 5 6.5 8.4 6.5Z" />
                <path d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Search"
              className="text-white cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11.5" cy="11.5" r="9.5" />
                <path d="m22 22-2-2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
