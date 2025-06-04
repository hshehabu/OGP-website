class CTA extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="cta-section">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-6 col-md-6">
                        <div class="cta-text">
                            <h3>Ready to Partner With Us?</h3>
                            <p>Whether you're looking for skilled personnel for your next project or seeking new opportunities in the oil and gas industry, our team is here to help.</p>
                        </div>
                    </div>
                    <div class="col col-lg-5 col-lg-offset-1 col-md-6">
                        <div class="contact-info">
                            <div>
                                <i class="fi flaticon-call"></i>
                                <h4>Call us</h4>
                                <p>+356 99170030</p>
                            </div>
                            <div>
                                <i class="fi flaticon-contact"></i>
                                <h4>Email us</h4>
                                <p>info@ogp.com.mt</p>
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