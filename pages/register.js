import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Register() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Register</h1>
        <form className="text-center">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Choose a username" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Choose a password" />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
