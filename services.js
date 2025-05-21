class Services extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="service-section services-pg-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-md-6">
                        <div class="section-title-s2">
                            <span>Our Industry Solutions</span>
                            <h2>Delivering the Best Global Industry Services.</h2>
                        </div>
                    </div>
                    <div class="col col-md-6">
                        <div class="title-text">
                            <p>Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="service-grids clearfix">
                            <div class="grid">
                                <i class="fi flaticon-gear"></i>
                                <h4><a href="#">Mechanical Engineering</a></h4>
                                <p> Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of antrt </p>
                                <a href="#" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-expansion"></i>
                                <h4><a href="#">Sanitary & Plumbing</a></h4>
                                <p> Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of antrt </p>
                                <a href="#" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-oil"></i>
                                <h4><a href="#">Oil & Gas Production</a></h4>
                                <p> Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of antrt </p>
                                <a href="#" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-pharmacy"></i>
                                <h4><a href="#">Pharmaceutical Research</a></h4>
                                <p> Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of antrt </p>
                                <a href="#" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-paint-palette"></i>
                                <h4><a href="#">Painting &Protective</a></h4>
                                <p> Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of antrt </p>
                                <a href="#" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-solar-energy"></i>
                                <h4><a href="#">Electrical & Power</a></h4>
                                <p> Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of antrt </p>
                                <a href="#" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('services-component', Services);