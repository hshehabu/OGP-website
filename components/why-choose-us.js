class WhyChooseUs extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="why-choose-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
                        <div class="section-title-s3">
                            <span>Our Services</span>
                            <h2>Why Choose OGP!</h2>
                            <p>Empowering energy projects through exceptional people. Your trusted partner in oil and gas personnel solutions.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="why-choose-grids clearfix">
                            <div class="grid">
                                <i class="fi flaticon-network-1"></i>
                                <h3>Technical Recruitment</h3>
                                <p>Expert placement of engineers, commissioning teams, and project management specialists for your energy projects.</p>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-circular-label-with-certified-stamp"></i>
                                <h3>Certified Personnel</h3>
                                <p>ISO, IADC, and OPITO certified professionals ensuring compliance and safety in all operations.</p>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-chip"></i>
                                <h3>Field Operations</h3>
                                <p>Skilled offshore personnel including drilling supervisors, toolpushers, and specialized technicians.</p>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-24-hours"></i>
                                <h3>Global Support</h3>
                                <p>Comprehensive logistics, work permit coordination, and 24/7 support for all your personnel needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        `;
    }
}

customElements.define('why-choose-us', WhyChooseUs);