class CTA extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="cta-section">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-6 col-md-6">
                        <div class="cta-text">
                            <h3>Lets Get in Touch!</h3>
                            <p>Raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.</p>
                        </div>
                    </div>
                    <div class="col col-lg-5 col-lg-offset-1 col-md-6">
                        <div class="contact-info">
                            <div>
                                <i class="fi flaticon-call"></i>
                                <h4>Call us</h4>
                                <p>+654894754</p>
                            </div>
                            <div>
                                <i class="fi flaticon-contact"></i>
                                <h4>Email us</h4>
                                <p>demo@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        `;
    }
}

customElements.define('cta-component', CTA);