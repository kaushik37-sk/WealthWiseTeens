import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">WealthWiseTeenz</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs" className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link href="/calculators" className="nav-link">Calculators</Link>
            </li>
            <li className="nav-item">
              <Link href="/quiz" className="nav-link">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link href="/chatbot" className="nav-link">Chatbot</Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link href="/register" className="nav-link">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
