import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Navbar.css";

type DropKey = "about" | "join" | "partner" | null;

const PhoneIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M6.6 10.8c1.5 3 4 5.4 7.1 6.9l2.4-2.4c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      fill="currentColor"
    />
  </svg>
);

const ChevronDown = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M7 10l5 5 5-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.2-1.5 1.5-1.5h1.7V5.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.5v8h4z"
      fill="currentColor"
    />
  </svg>
);

const XIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M18.9 2H22l-6.8 7.8L23 22h-6.8l-5.3-6.8L4.9 22H2l7.3-8.4L1 2h6.9l4.8 6.2L18.9 2zm-1.2 18h1.7L7.2 3.9H5.4L17.7 20z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM18 6.8a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 18 6.8z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46 2.48 2.48 0 0 1 4.98 3.5zM3 21h4V9H3v12zM9 9h3.8v1.6h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9V9z"
      fill="currentColor"
    />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<DropKey>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  const menus = useMemo(
    () => ({
      about: [
        { label: "Mission / Vision", href: "/mission-vision" },
        { label: "What we do?", href: "/what-we-do" },
      ],
      join: [
        { label: "Join Rotary", href: "/join-rotary" },
        { label: "How to join?", href: "/how-to-join" },
      ],
      partner: [
        { label: "RACMB", href: "/racmb" },
        { label: "RACMB IOM", href: "/racmb-iom" },
        { label: "ICMB", href: "/icmb" },
        { label: "ICGGIC", href: "/icggic" },
      ],
    }),
    []
  );

  useEffect(() => {
    const closeOnOutside = (e: MouseEvent) => {
      const t = e.target as Node | null;
      if (!t) return;
      if (headerRef.current && !headerRef.current.contains(t)) setOpenDrop(null);
    };
    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDrop(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setPad = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--rcmbHeaderH", `${h}px`);
      document.body.style.paddingTop = `${h}px`;
    };

    setPad();

    const ro = new ResizeObserver(() => setPad());
    ro.observe(el);

    window.addEventListener("resize", setPad);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setPad);
      document.body.style.paddingTop = "";
    };
  }, []);

  const toggleDrop = (k: DropKey) => setOpenDrop(prev => (prev === k ? null : k));

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDrop(null);
  };

  return (
    <header className="rcmbHeaderFixed" ref={headerRef}>
      <div className="rcmbTopbar">
        <div className="rcmbTopbarInner">
          <div className="rcmbTopLeft">
            <a className="rcmbTopItem" href="tel:+9779802887769" aria-label="Call +977 9802887769">
              <PhoneIcon className="rcmbTopIcon" />
              <span className="rcmbTopText">+977 9802887769</span>
            </a>

            <a
              className="rcmbTopItem"
              href="mailto:rcmatribhumi.baluwatar@gmail.com"
              aria-label="Email rcmatribhumi.baluwatar@gmail.com"
            >
              <MailIcon className="rcmbTopIcon" />
              <span className="rcmbTopText rcmbTopEmail">rcmatribhumi.baluwatar@gmail.com</span>
            </a>
          </div>

          <div className="rcmbTopRight" aria-label="Social links">
            <a className="rcmbSocial" href="#" aria-label="Facebook">
              <FacebookIcon className="rcmbSocialIcon" />
            </a>
            <a className="rcmbSocial" href="#" aria-label="X">
              <XIcon className="rcmbSocialIcon" />
            </a>
            <a className="rcmbSocial" href="#" aria-label="Instagram">
              <InstagramIcon className="rcmbSocialIcon" />
            </a>
            <a className="rcmbSocial" href="#" aria-label="LinkedIn">
              <LinkedInIcon className="rcmbSocialIcon" />
            </a>
          </div>
        </div>
      </div>

      <div className="rcmbNav">
        <div className="rcmbNavInner">
          <a className="rcmbBrand rcmbBrandOnlyLogo" href="/" aria-label="Home">
            <img
              className="rcmbLogo rcmbLogoOnly"
              src="image.png"
              alt="Rotary Club of Matribhumi Baluwatar"
              draggable={false}
            />
          </a>

          <button
            className="rcmbHamburger"
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`rcmbLinks ${mobileOpen ? "isOpen" : ""}`} aria-label="Primary navigation">
            <a className="rcmbLink" href="/" onClick={closeMobile}>
              Home
            </a>

            <div className={`rcmbDrop ${openDrop === "about" ? "isActive" : ""}`}>
              <button
                className="rcmbLink rcmbDropBtn"
                type="button"
                aria-haspopup="menu"
                aria-expanded={openDrop === "about"}
                onClick={() => toggleDrop("about")}
              >
                About <ChevronDown className="rcmbChevron" />
              </button>
              <div className="rcmbDropMenu" role="menu">
                {menus.about.map(i => (
                  <a key={i.href} className="rcmbDropItem" href={i.href} role="menuitem" onClick={closeMobile}>
                    {i.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={`rcmbDrop ${openDrop === "join" ? "isActive" : ""}`}>
              <button
                className="rcmbLink rcmbDropBtn"
                type="button"
                aria-haspopup="menu"
                aria-expanded={openDrop === "join"}
                onClick={() => toggleDrop("join")}
              >
                Join RCMB <ChevronDown className="rcmbChevron" />
              </button>
              <div className="rcmbDropMenu" role="menu">
                {menus.join.map(i => (
                  <a key={i.href} className="rcmbDropItem" href={i.href} role="menuitem" onClick={closeMobile}>
                    {i.label}
                  </a>
                ))}
              </div>
            </div>

            <a className="rcmbLink" href="/publications" onClick={closeMobile}>
              Publications
            </a>

            <a className="rcmbLink" href="/calendar" onClick={closeMobile}>
              Calendar
            </a>

            <div className={`rcmbDrop ${openDrop === "partner" ? "isActive" : ""}`}>
              <button
                className="rcmbLink rcmbDropBtn"
                type="button"
                aria-haspopup="menu"
                aria-expanded={openDrop === "partner"}
                onClick={() => toggleDrop("partner")}
              >
                Partner In Service <ChevronDown className="rcmbChevron" />
              </button>
              <div className="rcmbDropMenu" role="menu">
                {menus.partner.map(i => (
                  <a key={i.href} className="rcmbDropItem" href={i.href} role="menuitem" onClick={closeMobile}>
                    {i.label}
                  </a>
                ))}
              </div>
            </div>

            <a className="rcmbLink" href="/contact" onClick={closeMobile}>
              Contact
            </a>

            <a className="rcmbDonateMobile" href="/donate" onClick={closeMobile}>
              Donate
            </a>
          </nav>

          <a className="rcmbDonate" href="/donate">
            Donate
          </a>
        </div>
      </div>
    </header>
  );
}
