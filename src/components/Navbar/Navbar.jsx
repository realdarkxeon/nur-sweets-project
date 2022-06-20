import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-orange px-5">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="https://getbootstrap.com/docs/5.2/components/navbar/"
        >
          Nur Sweets
        </a>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <span class="navbar-text">
          <button type="button" class="btn btn-primary">
            My Cart
          </button>
        </span>

        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}

        {/* <div class="collapse navbar-collapse" id="navbarText">
          
        </div> */}
      </div>
    </nav>
  );
};
