import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteFooter } from "@/components/SiteFooter";

// Contact address for privacy requests, shown on this page.
const CONTACT_EMAIL = "CONTACT_EMAIL_TO_CONFIRM";
const LAST_UPDATED = "22 October 2026";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy notice | AERO-RESCUE NET" },
      {
        name: "description",
        content: "How AERO-RESCUE NET uses the information collected on this website and waitlist.",
      },
    ],
  }),
  component: Privacy,
});

function Mail() {
  return <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
}

function Privacy() {
  return (
    <div className="arn-page">
      <header>
        <Link to="/" className="brand">
          AERO-RESCUE NET
        </Link>
        <Link to="/" className="badge">
          Home
        </Link>
      </header>

      <article className="legal-page">
        <h1>Privacy notice: AERO-RESCUE NET website and waitlist</h1>
        <p className="updated">Last updated: {LAST_UPDATED}</p>

        <h2>Who we are</h2>
        <p>
          ONE VISION ONE MOVEMENT FOREVER LTD, trading as AERO-RESCUE NET, is registered in Northern
          Ireland (company number NI744016). Registered office: 8 Rossdale Manor, Ballymena, Co.
          Antrim, BT42 2SL. We are the data controller for information collected on this website.
          Contact: <Mail />.
        </p>

        <h2>What we collect and why</h2>
        <ul>
          <li>
            <strong>Your email address</strong>, when you join the waitlist. We use it only to send
            you updates about the launch of AERO-RESCUE NET. Our lawful basis is your consent, which
            you give by joining. You can withdraw it at any time.
          </li>
          <li>
            <strong>Basic technical information</strong> that our website host records
            automatically, such as your IP address and browser type, to keep the site running and
            secure. Our lawful basis is our legitimate interest in running a secure website.
          </li>
        </ul>
        <p>We do not use advertising or tracking cookies.</p>

        <h2>Who we share it with</h2>
        <p>
          Only the service providers that run this website and the waitlist for us: Formspree,
          which receives and stores waitlist sign-ups, and GitHub Pages, which hosts this website.
          They process it on our instructions. We do not sell your information or use it for
          advertising. If a provider stores information outside the UK, it does so with safeguards
          recognised under UK data protection law.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep your email address until you unsubscribe or ask us to delete it. If we close the
          waitlist, we delete the list.
        </p>

        <h2>Your rights</h2>
        <p>
          You can unsubscribe at any time using the link in our emails or by writing to <Mail />.
          You can also ask for a copy of the information we hold about you, ask us to correct or
          delete it, or object to how we use it. If you are unhappy with how we handle your
          information, you can complain to the Information Commissioner&apos;s Office (
          <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
            ico.org.uk
          </a>
          ).
        </p>

        <h2>The AERO-RESCUE NET app</h2>
        <p>
          The AERO-RESCUE NET app is in development. It will have its own privacy notice, available
          before you create an account.
        </p>
      </article>

      <SiteFooter />
    </div>
  );
}
