import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteFooter } from "@/components/SiteFooter";

// Brevo sign-up form "AERO-RESCUE NET waitlist (website)" (double opt-in, list #3).
const BREVO_FORM_URL =
  "https://7d274fe0.sibforms.com/serve/MUIFAPHe3aoV2tOzEaMyb5aXBSczF_3YQznGVIrt0iBJIjtNZzlRd0Q7zADCiOrJwEUL61go9L9aA9O4ou7gJGDJS-VAw0p-gQcjMvRDPdfmmWeUxIwPum0NtRXBGES4tnlzoIfriqkil_pRj05Zd6fPUbyQbHvmepRMGbOiXZzno5F7bup9DhxQ-oKhQ3w5yqmwMZZZ0CGD-6VCXA==";

const TITLE = "AERO-RESCUE NET | Running late for your flight?";
const DESCRIPTION =
  "AERO-RESCUE NET gets you to the terminal faster. Drive straight to the terminal drop-off and a Meet & Greet valet parks your car in the car park you've already booked.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://aerorescuenet.com/videos/aero-rescue-net-v5-customer-poster.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [joined, setJoined] = useState(false);
  return (
    <div className="arn-page">
      <header>
        <div className="brand">AERO-RESCUE NET</div>
        <div className="badge">Early Access</div>
      </header>

      <main>
        <div className="hero-left">
          <h1>
            Running late for
            <br />
            <span>your flight?</span>
          </h1>
          <p className="hero-desc">
            AERO-RESCUE NET gets you to the terminal faster. Drive straight to the terminal
            drop-off, hand your keys to a Meet &amp; Greet valet, and they park your car in the car
            park you&apos;ve already booked. Up to 40 minutes faster than parking and taking the
            shuttle. £120, charged only once your drop-off is confirmed.
          </p>

          <div className="waitlist-card">
            <div className="card-title">Join the priority waitlist</div>
            <div className="card-sub">
              We&apos;re preparing our first pilot at a UK airport and looking for our first
              partners: airports, Meet &amp; Greet valet operators and parking booking platforms.
              Join the waitlist for launch news.
            </div>

            {joined && (
              <div className="joined-note" role="status">
                Thank you. Please check your inbox and click the link in our email to confirm your
                place on the waitlist.
              </div>
            )}
            <form
              action={BREVO_FORM_URL}
              method="POST"
              target="brevo-submit"
              hidden={joined}
              onSubmit={() => window.setTimeout(() => setJoined(true), 0)}
            >
              <div className="form-row">
                <input
                  type="email"
                  name="EMAIL"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  autoComplete="email"
                />
                <button type="submit">Join Waitlist</button>
              </div>
              {/* Brevo spam trap: real visitors never fill this in */}
              <input
                type="text"
                name="email_address_check"
                defaultValue=""
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hp-field"
              />
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />
            </form>
            <iframe name="brevo-submit" title="Waitlist sign-up" className="hp-field" />
            <div className="launch-note">
              We&apos;ll use your email only to send launch updates. Unsubscribe at any time.{" "}
              <Link to="/privacy">Privacy notice</Link>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="video-container">
            <video
              controls
              preload="metadata"
              playsInline
              poster="/videos/aero-rescue-net-v5-customer-poster.jpg"
              title="AERO-RESCUE NET: Protect the Final Mile"
              aria-label="AERO-RESCUE NET: Protect the Final Mile"
            >
              <source src="/videos/aero-rescue-net-v6-customer.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="partners-box">
            <div className="partners-title">Privacy by design</div>
            <div className="partners-desc">
              Your parking booking, number plate and flight stay on your phone until you ask for a
              rescue. Card details are held by our payment provider, never by us.
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
