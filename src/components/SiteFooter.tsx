import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer>
      <div className="legal">
        © 2026 ONEVISIONONEMOVEMENTFOREVER LTD, trading as AERO-RESCUE NET. Registered in
        Northern Ireland, company number NI744016. Registered office: Ardilaun House, Pennybridge
        Industrial Estate, Unit 22P, Ballymena, Co. Antrim, BT42 3HB.
      </div>
      <Link to="/privacy" className="foot-right">
        Privacy notice
      </Link>
    </footer>
  );
}
