import Navbar from "../../components/navbar";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="landing-section">
        <video src="/images/Animation.mp4" autoPlay muted loop className="landing-video" style={{ width: "50%", height: "auto" }} />
        <div className="landing-text">Welcome to our website!</div>
      </div>
    </div>
  );
}
