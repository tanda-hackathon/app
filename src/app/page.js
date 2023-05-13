import Navbar from "../../components/navbar";
import "./globals.css";
import "../../components/header/header.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <header />
      <div className="landing-section">
        <div className="landing-content">
          <video src="/images/Animation2.mp4" autoPlay muted loop className="landing-video" style={{ width: "50%", height: "auto" }} />
          <div className="landing-text">GoTask - Automated calendar task automation and gamifying</div>
        </div>
      </div>
    </div>
  );
}
