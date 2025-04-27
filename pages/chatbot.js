import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Chatbot() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Financial Literacy Chatbot</h1>
        <p className="text-center">Talk to our chatbot to learn about finance! It can help you with budgeting, saving, investing, and more.</p>
        <div className="text-center mt-4">
          <a href="/chatbot/start" className="btn btn-primary m-2">Start Chat</a>
        </div>
      </div>
      <Footer />
    </>
  );
}
