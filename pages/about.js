import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">About WealthWiseTeenz</h1>
        <p className="text-center">
          WealthWiseTeenz is a platform aimed at empowering teenagers with financial literacy. Our mission is to
          make financial education accessible, interactive, and engaging for young people across the world.
        </p>
        <p className="text-center">
          We believe that understanding the basics of budgeting, saving, investing, and managing money can help teens make informed financial decisions in the future.
        </p>
      </div>
      <Footer />
    </>
  );
}
