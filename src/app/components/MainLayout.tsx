"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarked,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

function CustomLink({
  href,
  children,
  active,
  dropdownItems,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
  dropdownItems?: { href: string; label: string }[];
}) {
  return (
    <div className={`relative mt-3 ${dropdownItems ? "group" : ""}`}>
      <Link href={href} legacyBehavior>
        <a className={`custom-link ${active ? "active" : ""}`}>{children}</a>
      </Link>

      {dropdownItems && (
        <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg text-gray-700 z-10">
          {dropdownItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} legacyBehavior>
                <a>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { href: "/usluge/procena-stete", label: "Procena štete" },
    {
      href: "/usluge/procena-vrednosti-industrijskih-masina",
      label: "Procena vrednosti mašina i opreme",
    },
    {
      href: "/usluge/procena-vrednosti-alata",
      label: "Veštačenje vrednosti alata",
    },
    {
      href: "/usluge/izrada-strucnih-misljenja",
      label: "Izrada mišljenja za sudske procese",
    },
    {
      href: "/usluge/konsultacije-za-procenu-masinskih-sredstava",
      label: "Konsultacije u proceni mašina",
    },
  ];

  return (
    <div
      className={`fixed inset-0 bg-[#000f2d] transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex flex-col h-full relative">
        <div className="flex items-center gap-4 pl-5 mobile-logo">
          <Image src="/images/logo.png" alt="logo" width={50} height={30} />
          <div className="mt-6">
            <h2 className="font-bold m-0">Bratislav Igrutinović</h2>
            <p className="mt-1">Sudski veštak mašinske struke</p>
          </div>
        </div>

        {/* Close button positioned absolute in the top right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white p-2 text-xl"
          aria-label="Close menu"
        >
          ✕
        </button>

        <hr />

        <nav className="px-6">
          <ul className="space-y-6">
            <li>
              <Link
                href="/"
                className={`block text-white text-lg ${
                  pathname === "/" ? "font-bold" : ""
                }`}
                onClick={onClose}
              >
                Početna
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-white text-lg"
              >
                <span>Usluge</span>
                <span className="transform transition-transform duration-200 ease-in-out">
                  {isServicesOpen ? "▼" : "▶"}
                </span>
              </button>
              <ul
                className={`pl-4 space-y-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesOpen ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="block text-white text-lg"
                      onClick={onClose}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/cesta-pitanja"
                className={`block text-white text-lg ${
                  pathname === "/cesta-pitanja" ? "font-bold" : ""
                }`}
                onClick={onClose}
              >
                Česta pitanja
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className={`block text-white text-lg ${
                  pathname === "/kontakt" ? "font-bold" : ""
                }`}
                onClick={onClose}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default function MainLayout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.00001) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 bg-primary-color text-primary-alt
        `}
      >
        <div className="container flex justify-between">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
            <div>
              <h2 className="font-bold m-0">Bratislav Igrutinović</h2>
              <p className="mt-1">Sudski veštak mašinske struke</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:069/33 07 997" className="text-white">
              <FontAwesomeIcon icon={faPhone} /> 069/33 07 997
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden fixed top-4 right-4 z-50 p-2 bg-primary-color rounded-md text-white"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />

      {/* Navigation Section */}
      <nav
        className={`${
          isScrolled ? "scrolled-nav" : "default-nav"
        } md:block hidden`}
      >
        <div className="container flex justify-center gap-10 nav-container">
          <CustomLink href="/" active={pathname === "/"}>
            Početna
          </CustomLink>
          <CustomLink
            href="#"
            active={pathname.includes("usluge")}
            dropdownItems={[
              {
                href: "/usluge/procena-stete",
                label: "Procena štete",
              },
              {
                href: "/usluge/procena-vrednosti-industrijskih-masina",
                label: "Procena vrednosti mašina i opreme",
              },
              {
                href: "/usluge/procena-vrednosti-alata",
                label: "Veštačenje vrednosti alata",
              },
              {
                href: "/usluge/izrada-strucnih-misljenja",
                label: "Izrada mišljenja za sudske procese",
              },
              {
                href: "/usluge/konsultacije-za-procenu-masinskih-sredstava",
                label: "Konsultacije u proceni mašina",
              },
            ]}
          >
            Usluge
          </CustomLink>
          <CustomLink
            href="/cesta-pitanja"
            active={pathname === "/cesta-pitanja"}
          >
            Česta pitanja
          </CustomLink>
          <CustomLink href="/kontakt" active={pathname === "/kontakt"}>
            Kontakt
          </CustomLink>
        </div>
      </nav>

      {/* Page Content */}
      <main className="mt-2 main-container">{children}</main>

      {/* Footer */}
      <footer className="justify-between items-center p-10 bg-primary-color text-white mt-40">
        <div className="container lg:flex justify-between">
          <div className="contact-footer">
            <h2 className="mb-4">Kontakt</h2>
            <ul>
              <li className="flex items-center gap-4 py-2">
                <FontAwesomeIcon icon={faMapMarked} />
                <span>Vuka Karadžića 115, 32300 Gornji Milanovac</span>
              </li>
              <li className="flex items-center gap-4 py-2">
                <FontAwesomeIcon icon={faPhone} />
                <span>064/44 22 212</span>
              </li>
              <li className="flex items-center gap-4 py-2">
                <FontAwesomeIcon icon={faPhone} />
                <span>066/99 30 186</span>
              </li>
              <li className="flex items-center py-2">
                <a href="" className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="pl-4">Pošalji Email</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="useful-links mt-12 md:mt-0">
            <h2 className="mb-4">Korisni Linkovi</h2>
            <ul>
              <li className="py-2">
                <a href="../licence.pdf" target="_blank">
                  Licence
                </a>
              </li>
              <li className="py-2">
                <a href="../licence.pdf" target="_blank">
                  Sertifikat
                </a>
              </li>
              <li className="py-2">
                <a href="../licence.pdf" target="_blank">
                  Referenc Lista
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="container text-center bg-blue-100-15">
        <p className="py-2">
          © 2025 Sudski veštak mašinske struke. Sva prava zadržana.
        </p>
      </div>
    </>
  );
}
