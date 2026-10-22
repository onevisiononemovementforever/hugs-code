import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer>
      <div className="legal">
        © 2026 ONE VISION ONE MOVEMENT FOREVER LTD, trading as AERO-RESCUE NET. Registered in
        Northern Ireland, company number NI744016. Registered office: 8 Rossdale Manor, Ballymena,
        Co. Antrim, BT42 2SL.
      </div>
      <Link to="/privacy" className="foot-right">
        Privacy notice
      </Link>
    </footer>
  );
}
