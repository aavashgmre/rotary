import React, { useEffect, useMemo, useState } from "react"
import Navbar from "../components/Navbar"
import "./home.css"

import heroMain from "../assets/11.png"
import heroBadge from "../assets/10.png"

type TabKey = "club" | "meeting"

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("club")
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 420)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const tabContent = useMemo(() => {
    if (activeTab === "club") {
      return (
        <div className="homeTabBody">
          <div className="homeStatRow">
            <div className="homeStatLabel">Chartered on:</div>
            <div className="homeStatValue">June 20, 2016</div>
          </div>
          <div className="homeStatRow">
            <div className="homeStatLabel">Total Members:</div>
            <div className="homeStatValue">34</div>
          </div>
        </div>
      )
    }

    return (
      <div className="homeTabBody">
        <div className="homeStatRow">
          <div className="homeStatLabel">Meeting Day:</div>
          <div className="homeStatValue">Every Thursday</div>
        </div>
        <div className="homeStatRow">
          <div className="homeStatLabel">Time:</div>
          <div className="homeStatValue">6:30 PM</div>
        </div>
        <div className="homeStatRow">
          <div className="homeStatLabel">Venue:</div>
          <div className="homeStatValue">Baluwatar, Kathmandu</div>
        </div>
      </div>
    )
  }, [activeTab])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Navbar />

      <main className="homeRoot">
        <section className="homeHero">
          <div className="homeContainer">
            <div className="homeHeroGrid">
              <div className="homeHeroLeft">
                <div className="homeHeroImageWrap">
                  <img className="homeHeroMainImg" src={heroMain} alt="Rotary Club event" />
                  <div className="homeHeroBadgeWrap" aria-hidden="true">
                    <img className="homeHeroBadgeImg" src={heroBadge} alt="" />
                  </div>
                </div>
              </div>

              <div className="homeHeroRight">
                <h1 className="homeHeroTitle">
                  Namaste from
                  <br />
                  Rotary Club of
                  <br />
                  MatribhumI Baluwatar
                </h1>

                <p className="homeHeroText">
                  Chartered on June 20, 2016, the Rotary Club of MatribhumI Baluwatar is proud to be the first club in Rotary
                  International District 3292 composed entirely of young professionals, and among the very few globally to embrace
                  technology at its core. We stand out as a pioneer, being one of the first clubs to launch a dedicated mobile
                  application available on both iOS and Android platforms, designed to efficiently manage club activities such as
                  finance, meetings, minutes, projects, membership, and more.
                </p>

                <p className="homeHeroText">
                  Our mission is to combine youthful energy with Rotary’s core values, delivering impactful service and fostering
                  leadership excellence. With 34 dynamic members from diverse professional backgrounds, we are dedicated to creating
                  meaningful change through initiatives in education, health, sustainability, and community development, while
                  embracing the global Rotary motto: Service Above Self.
                </p>

                <div className="homeTabs">
                  <button
                    type="button"
                    className={`homeTabBtn ${activeTab === "club" ? "isActive" : ""}`}
                    onClick={() => setActiveTab("club")}
                  >
                    Club Stat
                  </button>

                  <button
                    type="button"
                    className={`homeTabBtn ${activeTab === "meeting" ? "isActive" : ""}`}
                    onClick={() => setActiveTab("meeting")}
                  >
                    Meeting
                  </button>
                </div>

                <div className="homeTabsDivider" />

                {tabContent}
              </div>
            </div>
          </div>
        </section>

        <div className={`homeScrollTop ${showTop ? "isVisible" : ""}`}>
          <button type="button" className="homeScrollTopBtn" onClick={scrollToTop} aria-label="Scroll to top">
            <span className="homeScrollTopArrow">↑</span>
          </button>
        </div>
      </main>
    </>
  )
}
