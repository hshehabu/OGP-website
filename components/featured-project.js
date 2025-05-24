class FeaturedProject extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="featured-project-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
                        <div class="section-title-s5">
                            <span>Success Stories</span>
                            <h2>Our Featured Projects</h2>
                            <p>Delivering exceptional personnel solutions for major energy projects worldwide. Discover how we've helped clients achieve their goals.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-area">
                <div class="project-grids clearfix">
                    <div class="grid">
                        <div class="overlay">
                            <span class="count">01.</span>
                            <h3>Offshore Drilling Team</h3>
                            <p>Successfully deployed 150+ certified personnel for a major deepwater drilling project in the Gulf of Mexico.</p>
                            <a href="#" class="theme-btn">Read More</a>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="overlay">
                            <span class="count">02.</span>
                            <h3>Refinery Expansion</h3>
                            <p>Provided complete commissioning team and technical specialists for a $2B refinery expansion project.</p>
                            <a href="#" class="theme-btn">Read More</a>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="overlay">
                            <span class="count">03.</span>
                            <h3>Pipeline Project</h3>
                            <p>Managed recruitment and logistics for 200+ skilled workers across multiple pipeline construction sites.</p>
                            <a href="#" class="theme-btn">Read More</a>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="overlay">
                            <span class="count">04.</span>
                            <h3>FPSO Operations</h3>
                            <p>Staffed complete operations team for a new FPSO vessel, including specialized marine and process personnel.</p>
                            <a href="#" class="theme-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('featured-project', FeaturedProject);