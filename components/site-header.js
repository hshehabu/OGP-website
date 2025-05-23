class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header" class="site-header header-style-1">
        <nav class="navigation navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="open-btn">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt></a>
            </div>
            <div id="navbar" class="navbar-collapse collapse navigation-holder">
              <button class="close-navbar"><i class="ti-close"></i></button>
              <ul class="nav navbar-nav">
                <li class="nav-item"><a href="index.html">Home</a></li>
                <li class="nav-item"><a href="about.html">About</a></li>
                <li class="nav-item menu-item-has-children">
                  <a href="#">Services</a>
                  <ul class="sub-menu">
                    <li><a href="technical-recruitment.html">Technical Recruitment</a></li>
                    <li><a href="field-offshore.html">Field Offshore Personnel</a></li>
                    <li><a href="logistics.html">Logistics</a></li>
                  </ul>
                </li>
                <li class="nav-item menu-item-has-children">
                  <a href="#">Careers</a>
                  <ul class="sub-menu">
                    <li><a href="vacancies.html">Vacancies</a></li>
                    <li><a href="submit-cv.html">Submit Your CV</a></li>
                    <li><a href="faq.html">FAQs</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="case-studies.html">Case Studies</a>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
              <div class="social-links">
                <a href="#" class="social-link"><i class="ti-youtube"></i></a>
                <a href="#" class="social-link"><i class="ti-linkedin"></i></a>
                <a href="#" class="social-link"><i class="ti-instagram"></i></a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);