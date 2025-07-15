class AboutUs extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="about-us-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-md-6">
                        <div class="section-title">
                            <span>About us</span>
                            <h2>We set the standards others try to live up to.</h2>
                        </div>
                        <div class="details">
                            <p>Oil & Gas Personnel Limited (OGP) is a leading global energy recruitment specialist, connecting exceptional talent with world-class energy projects. With over two decades of industry experience, we've built a reputation for delivering comprehensive personnel solutions across the energy sector.</p>
                            <div class="clearfix">
                                <ul>
                                    <li><i class="ti-check"></i> Advanced Technology</li>
                                    <li><i class="ti-check"></i> Quality Assurance Certified</li>
                                </ul>
                                <ul>
                                    <li><i class="ti-check"></i> 24/7 Technical Support</li>
                                    <li><i class="ti-check"></i> Global Industry Standards</li>
                                </ul>
                            </div>
                            <div class="btns">
                                <a href="services.html" class="theme-btn">Our Services</a>
                                <a href="contact.html" class="theme-btn-s3">Contact us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-6">
                        <div class="right-col">
                            <div class="img-holder">
                                <img src="assets/images/about/about.jpg" alt>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
}

customElements.define('about-us', AboutUs);
