import React from "react";
import logo_22 from "../photo/logosWebsite/Logo_22.png";
import { Outlet } from "react-router-dom";
import {useIsAuthenticated} from 'react-auth-kit';
import { useSignOut } from 'react-auth-kit'

const NavBar = () => {
  const isAuthenticated = useIsAuthenticated()
  const signOut = useSignOut()
  return (
    <div>
      <nav className="navbar navbar-custom fixed-top navbar-expand-md navbar-dark  shadow-5-strong">
        <div className="container-xl">
          <a className="navbar-brand" href="/">
            <img
              src={logo_22}
              alt="ourLogo"
              className="h-auto"
              style={{ maxWidth: 175 }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold  mx-2"
                  aria-current="page"
                  href="/all-ads"
                >
                  View All Ads
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="btn btn-primary font-weight-bold  mx-2   "
                  aria-current="page"
                  href="/join-us"
                >
                  Join us
                </a>
              </li>
              {isAuthenticated() ? (
            // If user is authenticated, show logout button
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={()=> signOut()}>
                Logout
              </button>
            </li>
          ) : (
            // If user is not authenticated, show login link
            <li className="nav-item">
              <a className="nav-link font-weight-bold mx-2" href="/login">
                Login
              </a>
            </li>
          )}

              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold  mx-2"
                  aria-current="page"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
