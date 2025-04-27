import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Quiz() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Financial Literacy Quiz</h1>
        <p className="text-center">Test your knowledge on personal finance!</p>
        <div className="text-center mt-4">
          <a href="/quiz/start" className="btn btn-primary m-2">Start Quiz</a>
        </div>
      </div>
      <Footer />
    </>
  );
}
