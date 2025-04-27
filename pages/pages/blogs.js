import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Our Blogs</h1>
        <div className="text-center mt-4">
          <p>Coming Soon! We will be publishing blogs on topics like investing, saving, and smart financial habits.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
