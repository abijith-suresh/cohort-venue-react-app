import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const addLinks = [
    { path: "/venue-add", label: "VENUE ADD" },
    { path: "/cohort-add", label: "COHORT ADD" },
  ];

  const viewLinks = [
    { path: "/venue-list", label: "VENUE LIST" },
    { path: "/cohort-list", label: "COHORT LIST" },
  ];

  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex me-3">
              {addLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link me-3 ${isActive ? "active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <h3 className="text-center flex-grow-1">TRAINING MANAGEMENT</h3>
            <div className="d-flex ms-3">
              {viewLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link me-3 ${isActive ? "active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default Header;
