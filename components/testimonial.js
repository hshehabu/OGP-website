class Testimonial extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="testimonials-section">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-6 col-lg-offset-3">
                        <div class="section-title-s4">
                            <span>Testimonials</span>
                            <h2>What Our Clients Say</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-lg-10 col-lg-offset-1">
                        <div class="testimonial-grids testimonial-slider clearfix">
                            <div class="grid">
                                <div class="quote">
                                    <i class="fi flaticon-quote"></i>
                                    <p>"OGP provided us with highly qualified offshore personnel for our Bluestream projects. Their expertise with work permits and commitment to safety made a real difference. We value their professionalism and reliability as a partner in the Netherlands."</p>
                                </div>
                                <div class="client-info">
                                    <div class="img-holder">
                                        <img src="assets/images/testimonials/img-3.jpg" alt>
                                    </div>
                                    <div class="details">
                                        <h5>Fecco</h5>
                                        <p>Project Manager, Bluestream Offshore B.V.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="quote">
                                    <i class="fi flaticon-quote"></i>
                                    <p>"OGP has been instrumental in providing highly qualified personnel for our offshore drilling operations. Their attention to certification requirements and safety standards has been exceptional. The team's responsiveness and professionalism have made them our go-to partner for personnel solutions."</p>
                                </div>
                                <div class="client-info">
                                    <div class="img-holder">
                                        <img src="assets/images/testimonials/img-1.jpg" alt>
                                    </div>
                                    <div class="details">
                                        <h5>John Anderson</h5>
                                        <p>Operations Director, ExxonMobil</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="quote">
                                    <i class="fi flaticon-quote"></i>
                                    <p>"Working with OGP has transformed our recruitment process. Their understanding of the oil and gas industry's specific requirements and their ability to source qualified professionals has significantly reduced our hiring time. Their commitment to quality and safety is unmatched."</p>
                                </div>
                                <div class="client-info">
                                    <div class="img-holder">
                                        <img src="assets/images/testimonials/img-2.jpg" alt>
                                    </div>
                                    <div class="details">
                                        <h5>Michael Chen</h5>
                                        <p>HR Director, Shell</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        `;
    }
}

customElements.define('testimonial-component', Testimonial);