import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aero_RescueNet | The Stateless Router Engine" },
      {
        name: "description",
        content:
          "Real-time routing from highway to departure gate. Join the Aero_RescueNet priority waitlist — launching first across UK & European hubs.",
      },
      { property: "og:title", content: "Aero_RescueNet | The Stateless Router Engine" },
      {
        property: "og:description",
        content:
          "Real-time routing from highway to departure gate. Join the priority waitlist — no missed flights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const HEYGEN_EMBED_URL = "https://app.heygen.com/embeds/55adeb51b9d4423d823377a506fc952c";

function Index() {
  return (
    <div className="arn-page">
      <header>
        <div className="brand">AERO_RESCUE NET</div>
        <div className="badge">Early Access</div>
      </header>

      <main>
        <div className="hero-left">
          <div className="sub-tag">The Stateless Router Engine</div>
          <h1>
            No More
            <br />
            <span>Missed Flights!</span>
          </h1>
          <p className="hero-desc">
            Life moves fast. But you shouldn't be late! Real-time routing. High throughput. Zero
            friction. From highway to departure gate, Aero_Rescue connects enterprise infrastructure
            and everyday travellers—without the bottlenecks.
          </p>

          <div className="waitlist-card">
            <div className="card-title">Join the Priority Waitlist</div>
            <div className="card-sub">Just launch updates. No spam. No commitments.</div>

            <form action="https://formspree.io/f/mljgnzyd" method="POST">
              <div className="form-row">
                <input type="email" name="email" required placeholder="Email address" />
                <button type="submit">Join Waitlist</button>
              </div>
            </form>
            <div className="launch-note">Launching first across UK &amp; European hubs</div>
          </div>
        </div>

        <div className="right-column">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={HEYGEN_EMBED_URL}
              title="Aero Rescue Net — Protect the Final Mile"
              frameBorder="0"
              allow="encrypted-media; fullscreen;"
              allowFullScreen
            />
          </div>

          <div className="partners-box">
            <div className="partners-title">
              Target Launch Partners <span>↗</span>
            </div>
            <div className="partners-desc">
              This waitlist is designed to show demand — every early-access signup helps us build
              the case to sign a contract and launch a pilot program in infrastructure trials with
              our chosen partners :
            </div>
            <div className="tag-row">
              <div className="partner-tag">MAG / Manchester Airports Group</div>
              <div className="partner-tag">CAVU</div>
            </div>
          </div>
        </div>
      </main>

      <section className="features-section">
        <div className="feat-header">
          <h2>Engineered for Momentum</h2>
          <p>Less friction. More forward. For the systems that scale, and the people who move.</p>
        </div>

        <div className="feat-grid">
          <div className="feat-card">
            <div className="feat-num">01 /</div>
            <h3>Stateless Architecture</h3>
            <div className="feat-desc">
              No session baggage. No single point of failure. Every request routes independently, so
              your infrastructure stays resilient at any scale.
            </div>
            <div className="feat-footer">Zero state. All systems go.</div>
          </div>

          <div className="feat-card">
            <div className="feat-num">02 /</div>
            <h3>Low Latency</h3>
            <div className="feat-desc">
              Less waiting. More moving. A lean routing engine built for real-time decisions and
              high throughput, when every second counts.
            </div>
            <div className="feat-footer">Built for the fast lane</div>
          </div>

          <div className="feat-card">
            <div className="feat-num">03 /</div>
            <h3>Dual B2B/B2C Scalability</h3>
            <div className="feat-desc">
              One engine. Two worlds. Connect enterprise airport infrastructure or power your
              personal journey—with the same seamless routing core.
            </div>
            <div className="feat-footer">Enterprise meets everyday</div>
          </div>
        </div>
      </section>

      <footer>
        <div>AERO_RESCUE NET — The Stateless Router Engine</div>
        <div className="foot-right">UK &amp; European hubs first</div>
      </footer>
    </div>
  );
}
