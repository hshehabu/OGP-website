class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="site-footer">
            <div class="upper-footer">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-3 col-md-3 col-sm-6">
                            <div class="widget about-widget">
                                <div class="logo widget-title">
                                    <img src="assets/images/logo.png" alt>
                                </div>
                                <p>Oil & Gas Personnel Limited (OGP) is your trusted partner in energy sector recruitment, delivering skilled professionals and comprehensive staffing solutions worldwide.</p>
                                <div class="social-icons">
                                    <ul>
                                        <li><a href="#"><i class="ti-youtube"></i></a></li>
                                        <li><a href="#"><i class="ti-linkedin"></i></a></li>
                                        <li><a href="#"><i class="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col col-lg-3 col-md-3 col-sm-6">
                            <div class="widget link-widget">
                                <div class="widget-title">
                                    <h3>Usefull Links</h3>
                                </div>
                                <ul>
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="services.html">Our services</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-lg-3 col-md-3 col-sm-6">
                            <div class="widget contact-widget service-link-widget">
                                <div class="widget-title">
                                    <h3>Our Address</h3>
                                </div>
                                <ul>
                                    <li class="contact-list-item"><span class="contact-icon"><i class="ti-location-pin"></i></span><span class="contact-text">No 5, Navarino Court Apt 14 <br>Trejqet Luzju<br>Sliema, SLM 1741<br>Malta</span></li>
                                    <li class="contact-list-item"><span class="contact-icon"><i class="ti-email"></i></span><span class="contact-text"><a href="mailto:info@ogp.com.mt">info@ogp.com.mt</a></span></li>
                                    <li class="contact-list-item"><span class="contact-icon"><i class="ti-mobile"></i></span><span class="contact-text"><a href="tel:+35699170030">+356 99170030</a></span></li>
                                    <li class="contact-list-item">
                                        <span class="contact-icon"><i class="ti-id-badge"></i></span>
                                        <span class="contact-text">Company Registration Number: C 76098</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-lg-3 col-md-3 col-sm-6">
                            <div class="widget newsletter-widget">
                                <div class="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>You will be notified when somthing new will be appear.</p>
                                <form>
                                    <div class="input-1">
                                        <input type="email" class="form-control" placeholder="Email Address *" required>
                                    </div>
                                    <div class="submit clearfix">
                                        <button type="submit"><i class="ti-email"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> <!-- end container -->
            </div>
            <div class="lower-footer">
                <div class="container">
                    <div class="row">
                        <div class="separator"></div>
                        <div class="col col-xs-12">
                            <p class="copyright"><a href="templateshub.net">Templates Hub</a></p>
                            <div class="extra-link">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`;
    }
}

customElements.define('footer-component', Footer);