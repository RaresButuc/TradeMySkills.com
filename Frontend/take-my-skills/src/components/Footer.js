export default function Footer() {
  return (
    <div className="container-xl ">
      <footer className="py-3 my-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="privacy-and-policy" className="nav-link px-2 text-muted">
              Privacy and Policy
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">&copy;2022 Trade My Skills</p>
      </footer>
    </div>
  );
}
