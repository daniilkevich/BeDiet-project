import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './Footer.css'
const styles = {
    icon: {
        position: 'absolute',
        bottom: '6px',
        left: '-15px',
    },
}

const Footer = () => {
    return (
        <div className="contacts-section">
            <div className="container">
                <div className="row4">
                    <div className="about-block col-dt-4">
                        <div className="about-block-title">About us</div>
                        <div className="about-block-items">
                            <ul className="about-list">
                                <li>
                                    <i>
                                        <ArrowRightIcon style={styles.icon} />
                                    </i>
                                    <a href="#">Aenean sollicitudin</a>
                                </li>
                                <li>
                                    <i>
                                        <ArrowRightIcon style={styles.icon} />
                                    </i>
                                    <a href="#">Duis sed odio amet</a>
                                </li>
                                <li>
                                    <i>
                                        <ArrowRightIcon style={styles.icon} />
                                    </i>
                                    <a href="#">Morbi accumsan velit</a>
                                </li>
                                <li>
                                    <i>
                                        <ArrowRightIcon style={styles.icon} />
                                    </i>
                                    <a href="#">Nam nec tellus</a>
                                </li>
                                <li>
                                    <i>
                                        <ArrowRightIcon style={styles.icon} />
                                    </i>
                                    <a href="#">Class aptent sociosqu</a>
                                </li>
                                <li>
                                    <i>
                                        <ArrowRightIcon style={styles.icon} />
                                    </i>
                                    <a href="#">Mauris erat justo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mission-block col-dt-4">
                        <div className="mission-block-title">Mission</div>
                        <div className="mission-block-content">
                            <p className="mbc">
                                Phasellus metus ac turpis egestas. Vestibulum
                                massa nec odio leo, pretium bibendum mi, nec
                                ultrices posuere tristique commodo.
                            </p>
                            <p>
                                Curabitur ultrices eget, bibendum iaculis augue.
                                Aenean sit amet dolor. Maecenas viverra nonummy,
                                mi. Cras rhoncus ut, semper auctor. Nam
                                molestie. Nulla interdum sem at porttitor vel,
                                congue odio lobortis tincidunt in, ornare
                                laoreet. Nam in faucibus tempor.
                            </p>
                        </div>
                    </div>
                    <div className="contact-block col-dt-4">
                        <div className="contact-block-title">Contact</div>
                        <div className="contact-block-content">
                            BeDiet- Phasellus orci luctus et lacus lorem, tempus
                            tellus. Integer mattis.
                        </div>
                        <div className="contact-block-phone">
                            <a href="#">+61 (0) 3 8376 6284</a>
                        </div>
                        <div className="contact-block-email">
                            <a href="mailto:noreply@envato.com">
                                noreply@envato.com
                            </a>
                        </div>
                        <div class="contact-block-social">
                            <a href="">
                                <i class="fab fa-facebook-square "></i>
                            </a>
                            <a href="">
                                <i class="fab fa-google-plus-square"></i>
                            </a>
                            <a href="">
                                <i class="fab fa-twitter-square"></i>
                            </a>
                            <a href="">
                                <i class="fab fa-vimeo"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
