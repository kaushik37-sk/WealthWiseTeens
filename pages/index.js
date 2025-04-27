import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Welcome to WealthWiseTeenz</h1>
        <p className="text-center">Empowering Teens with Financial Knowledge</p>
        <div className="text-center mt-4">
          <a href="/chatbot" className="btn btn-primary m-2">Try the Chatbot</a>
          <a href="/calculators" className="btn btn-success m-2">Financial Calculators</a>
          <a href="/quiz" className="btn btn-warning m-2">Financial Literacy Quiz</a>
          <a href="/blogs" className="btn btn-info m-2">Blogs</a>
        </div>
      </div>
      <Footer />
    </>
  );
}
