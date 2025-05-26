class FeaturedProject extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="service-section-s2 section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-md-6">
                        <div class="section-title-s2">
                            <span>Success Stories</span>
                            <h2>Our Impact in the Energy Sector</h2>
                        </div>
                    </div>
                    <div class="col col-md-6">
                        <div class="title-text">
                            <p>See how we connect top talent with leading energy companies. Our success stories demonstrate our expertise in energy sector recruitment.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="service-grids clearfix">
                            <div class="grid">
                                <img src="assets/images/projects/img-1.jpg" alt>
                                <h4><a href="case-studies.html">Major Oil & Gas Producer</a></h4>
                                <p>Successfully recruited 50+ technical specialists for offshore operations, reducing time-to-hire by 40%</p>
                                <a href="case-studies.html" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <img src="assets/images/projects/img-2.jpg" alt>
                                <h4><a href="case-studies.html">Renewable Energy Leader</a></h4>
                                <p>Built complete engineering team for new solar power plant project, meeting aggressive timeline</p>
                                <a href="case-studies.html" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <img src="assets/images/projects/img-3.jpg" alt>
                                <h4><a href="case-studies.html">Global Energy Services</a></h4>
                                <p>Recruited 200+ skilled workers across multiple international locations for major expansion</p>
                                <a href="case-studies.html" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <img src="assets/images/projects/img-4.jpg" alt>
                                <h4><a href="case-studies.html">Offshore Drilling Company</a></h4>
                                <p>Successfully placed specialized drilling engineers and safety professionals for deep-water operations</p>
                                <a href="case-studies.html" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <img src="assets/images/projects/img-5.jpg" alt>
                                <h4><a href="case-studies.html">Energy Technology Firm</a></h4>
                                <p>Recruited R&D team for innovative energy storage solutions, including PhD-level researchers</p>
                                <a href="case-studies.html" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <img src="assets/images/projects/img-6.jpg" alt>
                                <h4><a href="case-studies.html">Pipeline Infrastructure</a></h4>
                                <p>Staffed major pipeline project with certified welders and inspection specialists across multiple states</p>
                                <a href="case-studies.html" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('featured-project', FeaturedProject);