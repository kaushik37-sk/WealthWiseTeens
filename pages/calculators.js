import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Calculators() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Financial Calculators</h1>
        <p className="text-center">Use these calculators to help manage your finances.</p>
        <div className="text-center mt-4">
          <a href="/calculators/emi" className="btn btn-primary m-2">EMI Calculator</a>
          <a href="/calculators/sip" className="btn btn-success m-2">SIP Calculator</a>
        </div>
      </div>
      <Footer />
    </>
  );
}
