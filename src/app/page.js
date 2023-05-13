import Navbar from "../../components/navbar";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="landing-section">
        <div className="landing-content">
          <video src="/images/Animation2.mp4" autoPlay muted loop className="landing-video" style={{ width: "50%", height: "auto" }} />
          <div className="landing-text">
            GoTask
            <div className="text-2">Automated calendar task automation and gamifying</div>
          </div>
        </div>
      </div>
      <div className="landing-section">
      <div className="blue"></div>
        <div className="landing-content">
          <video src="/images/Animation3.mp4" autoPlay muted loop className="landing-video" style={{ width: "50%", height: "auto" }} />
          <div className="landing-text">Another section with different content</div>
        </div>
      </div>
      <div className="blue-circley"></div>
    </div>
  );
}
