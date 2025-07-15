class Services extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="service-section services-pg-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-md-6">
                        <div class="section-title-s2">
                            <span>Our Services</span>
                            <h2>Comprehensive Industry Solutions</h2>
                        </div>
                    </div>
                    <div class="col col-md-6">
                        <div class="title-text">
                            <p>We provide specialised recruitment and staffing solutions across various industrial sectors, ensuring you have the right talent for your projects.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="service-grids clearfix">
                            <div class="grid">
                                <i class="fi flaticon-engineer"></i>
                                <h4><a href="technical-recruitment.html">Technical Recruitment</a></h4>
                                <p>Engineers (mechanical, process, electrical, civil), Commissioning teams, Project management & QA/QC specialists</p>
                                <a href="technical-recruitment.html" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-worker"></i>
                                <h4><a href="field-offshore.html">Field Offshore Personnel</a></h4>
                                <p>Drilling supervisors, Toolpushers, roustabouts, riggers, welders, Crane operators, instrument techs, electricians</p>
                                <a href="field-offshore.html" class="read-more">Read More <i class="fi flaticon-next"></i></a>
                            </div>
                            <div class="grid">
                                <i class="fi flaticon-chip"></i>
                                <h4><a href="logistics.html">Logistics</a></h4>
                                <p>Work permit and visa coordination, local training programs, employee onboarding and documentation support</p>
                                <a href="logistics.html" class="read-more">Read More <i class="fi flaticon-next"></i></a>
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