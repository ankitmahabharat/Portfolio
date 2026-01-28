import React from "react";

function Sidebar({ isOpen }) {
  return (
    <>
      <div style={{
        width: isOpen ? "250px" : "0",
        transition: "0.3s",
        overflow: "hidden",
        background: "grey",
        color: "white",
        height: "100vh",
        position: "fixed",
        top: 55,
        left: 0,
      }}
        class="offcanvas offcanvas-end show"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        aria-modal="true"
        role="dialog"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
           My Portfolio
          </h5>
          <button
           style={{ color: "white"}}
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            {/* <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            
          </form>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
