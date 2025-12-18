import React, { useEffect, useState } from "react"
import "./footer.css"

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 450)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <footer className="rcmbFooter">
      <div className="rcmbFooterInner">
        <div className="rcmbSubscribeRow">
          <div className="rcmbSubscribeLeft">
            <h3 className="rcmbSubscribeTitle">Stay Connected with RCMB!</h3>
            <p className="rcmbSubscribeSub">Subscribe for regular updates</p>
          </div>

          <form
            className="rcmbSubscribeRight"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              className="rcmbSubscribeInput"
              type="email"
              placeholder="Enter Valid Email"
              required
            />
            <button className="rcmbSubscribeSend" type="submit" aria-label="Send">
              <SendIcon />
            </button>
          </form>
        </div>

        <div className="rcmbFooterDivider" />

        <div className="rcmbFooterGrid">
          <div className="rcmbFooterBrand">
            <div className="rcmbBrandMark">
              <div className="rcmbBrandText">
                <div className="rcmbBrandRotary">Rotary</div>
                <div className="rcmbBrandSub">
                  Club of Matribhumi
                  <br />
                  Baluwatar
                </div>
              </div>

              <div className="rcmbBrandGear" aria-hidden="true">
              </div>
            </div>

            <a className="rcmbPublicationsBtn" href="/publications">
              <span>Publications</span>
              <DownloadIcon />
            </a>
          </div>

          <div className="rcmbFooterCol">
            <div className="rcmbColTitle">Links</div>
            <div className="rcmbUnderline" aria-hidden="true" />

            <a className="rcmbFooterLink" href="/bod">
              <span className="rcmbChevron">›</span>
              <span>BOD</span>
            </a>
            <a className="rcmbFooterLink" href="/member">
              <span className="rcmbChevron">›</span>
              <span>Member</span>
            </a>
            <a className="rcmbFooterLink" href="/news">
              <span className="rcmbChevron">›</span>
              <span>News</span>
            </a>
          </div>

          <div className="rcmbFooterCol">
            <div className="rcmbColTitle">Latest Updates</div>
            <div className="rcmbUnderline" aria-hidden="true" />

            <a className="rcmbPost" href="/news/a-remarkable-victory-at-the-zonal-rota-quiz-2025">
              <img
                className="rcmbPostImg"
                src="news1.jpg"
                alt=""
                loading="lazy"
              />
              <div className="rcmbPostBody">
                <div className="rcmbPostTitle">
                  A Remarkable Victory
                  <br />
                  at the Zonal Rota Quiz
                  <br />
                  2025!
                </div>
                <div className="rcmbPostDate">November 27, 2025</div>
              </div>
            </a>

            <a className="rcmbPost" href="/news/world-toilet-day-dharmasthali">
              <img
                className="rcmbPostImg"
                src="news2.jpg"
                alt=""
                loading="lazy"
              />
              <div className="rcmbPostBody">
                <div className="rcmbPostTitle">
                  विश्व शौचालय दिवसको
                  <br />
                  अवसरमा धर्मस्थली प्रहरी
                  <br />
                  चौकीमा निर्माण
                </div>
                <div className="rcmbPostDate">November 21, 2025</div>
              </div>
            </a>
          </div>

          <div className="rcmbFooterCol">
            <div className="rcmbColTitle">Contact Us</div>
            <div className="rcmbUnderline" aria-hidden="true" />

            <div className="rcmbContactRow">
              <span className="rcmbContactIcon" aria-hidden="true">
                <PinIcon />
              </span>
              <div className="rcmbContactText">
                We meet regulary on Wednesday 5:00 PM at:
                <br />
                Hotel Smart Dhumbharahi
              </div>
            </div>

            <a className="rcmbContactRow rcmbContactLink" href="tel:+9779802887769">
              <span className="rcmbContactIcon" aria-hidden="true">
                <PhoneIcon />
              </span>
              <div className="rcmbContactText">+977 9802887769</div>
            </a>

            <a
              className="rcmbContactRow rcmbContactLink"
              href="mailto:rcmatribhumi.baluwatar@gmail.com"
            >
              <span className="rcmbContactIcon" aria-hidden="true">
                <MailIcon />
              </span>
              <div className="rcmbContactText">rcmatribhumi.baluwatar@gmail.com</div>
            </a>
          </div>
        </div>

        <div className="rcmbFooterBottom">
          <div className="rcmbBottomInner">
            <div className="rcmbCopy">
              Copyright © 2025 Rotary Club of Matribhumi Baluwatar. All rights reserved. design: irutech
            </div>

            <div className="rcmbSocial">
              <a className="rcmbSocialBtn" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a className="rcmbSocialBtn" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a className="rcmbSocialBtn" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        className={`rcmbToTop ${showTop ? "rcmbToTopShow" : ""}`}
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="rcmbToTopInner" aria-hidden="true">
          <UpIcon />
        </span>
      </button>
    </footer>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 11.6L20.9 3.8c.8-.3 1.6.5 1.2 1.3l-7.7 17.4c-.3.8-1.4.8-1.8.1l-3.6-6-6-3.2c-.8-.4-.8-1.6 0-1.8zm6.8 2.4l2.7 4.5 4.9-11L9.8 14z"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3a1 1 0 0 1 1 1v8.6l2.3-2.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L11 12.6V4a1 1 0 0 1 1-1z"
      />
      <path
        fill="currentColor"
        d="M5 18a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"
      />
    </svg>
  )
}

function RotaryGear() {
  return (
    <svg viewBox="0 0 64 64" width="78" height="78" aria-hidden="true">
      <path
        fill="currentColor"
        d="M36 3l2 6c2 1 4 2 6 4l6-2 4 7-5 4c1 2 1 4 1 6l6 2v8l-6 2c0 2 0 4-1 6l5 4-4 7-6-2c-2 2-4 3-6 4l-2 6h-8l-2-6c-2-1-4-2-6-4l-6 2-4-7 5-4c-1-2-1-4-1-6l-6-2v-8l6-2c0-2 0-4 1-6l-5-4 4-7 6 2c2-2 4-3 6-4l2-6h8zm-4 16c-7 0-13 6-13 13s6 13 13 13 13-6 13-13-6-13-13-13z"
        opacity="0.9"
      />
      <path
        fill="#0b1633"
        d="M32 25a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 9.5A2.5 2.5 0 1 0 12 6.5a2.5 2.5 0 0 0 0 5z"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2.1.6 3.2.6.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.2 2.8 3.5 3.3 3 4 3h3.4c.7 0 1.2.5 1.2 1.2 0 1.1.2 2.2.6 3.2.1.4 0 .9-.2 1.2l-2.4 2.2z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  )
}

function UpIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 4l7 7-1.4 1.4L13 7.8V20h-2V7.8L6.4 12.4 5 11l7-7z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.7-4.5 4.7V11H7v3h2.5v8h4z"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5.2-2.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 6.7A1.9 1.9 0 1 1 6.5 3a1.9 1.9 0 0 1 0 3.7zM5 21V9h3v12H5zm5 0V9h2.9v1.6h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5.1V21h-3v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-3z"
      />
    </svg>
  )
}
