import React from "react";
import "./ContactUs.css";

export default function Contect() {
  return (
    <div>
      <section class="page-title" style={{backgroundImage: 'url(https://ahitechno.com/public/front_website/images/background/22.png)'}}>
        <div id="stars"></div>

        <div id="stars2"></div>

        <div id="stars3"></div>

        <div class="auto-container">
          <div class="inner-container clearfix">
            <div class="title-box">
              <h1>Contact Us</h1>

              <ul class="bread-crumb clearfix">
                <li>
                  <a href="{{route('home')}}">Home</a>
                </li>

                <li style={{ color: "#fff" }}>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-page-section">
        <div class="auto-container">
          <div class="row">
            <div class="form-column col-lg-12 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="sec-title text-center">
                  <h6 class="subtitle">Now Very Easy</h6>

                  <h2>
                    Don’t hasitate to contact <br />
                    with us now
                  </h2>
                </div>

                <div class="row ">
                  <div class="col-lg-6">
                    <div class="inner-column">
                      <div class="image-box">
                        <figure
                          class="alphabet-img wow fadeInRight animated "
                          style={{
                            visibility: "visible",
                            animationName: "fadeInRight",
                            height: "20%"
                          }}
                        >
                          <img
                            src="https://ahitechno.com/public/front_website/images/resource/about-img.png"
                            alt="about img"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="contact-form">
                      <form
                        class=""
                        action="{{ route('contacfrom') }}"
                        id="contact-form"
                        method="POST"
                      >
                        <div class="row">
                          <div class="form-group col-lg-6 col-md-12 col-sm-12 input">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              required=""
                            
                            /> <br />
                          </div>

                          <div class="form-group col-lg-6 col-md-12 col-sm-12">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone"
                              required=""
                            /><br />
                          </div>

                          <div class="form-group col-lg-6 col-md-12 col-sm-12">
                            <input
                              type="text"
                              name="company"
                              placeholder="Company"
                            /><br />
                          </div>

                          <div class="form-group col-lg-6 col-md-12 col-sm-12">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              required=""
                            /><br />
                          </div>

                          <div class="form-group col-lg-12 col-md-12 col-sm-12">
                            <textarea
                              name="message"
                              placeholder="Massage"
                            ></textarea><br />
                          </div>

                          <div class="form-group col-lg-12 col-md-12 col-sm-12 text">
                            <button
                              class="theme-btn btn-style-one"
                              type="submit"
                              name="submit-form"
                            >
                              <span class="txt">Submit</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="map-column col-lg-12 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="map-outer container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973511175!2d75.6504719772847!3d26.88514167926112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1643710433474!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            <div class="contact-column col-lg-12 col-md-12 col-sm-12">
              <div class="contact-info">
                <div class="row">
                  <div class="info-block col-lg-4 col-md-4 col-sm-12">
                    <div class="inner">
                      <div class="icon-box">
                        <i class="flaticon flaticon-stopwatch"></i>
                      </div>

                      <div class="text-box">
                        <h4>Time</h4>

                        <p>
                          10:00am to 6:00pm <br />
                          Sunday Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="info-block col-lg-4 col-md-4 col-sm-12">
                    <div class="inner">
                      <div class="icon-box">
                        <i class="flaticon flaticon-pin"></i>
                      </div>

                      <div class="text-box">
                        <h4>Location</h4>

                        <p>
                          31 Arjun Colony,Amer Road, Behind Brahmpuri,Jaipur
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="info-block col-lg-4 col-md-4 col-sm-12">
                    <div class="inner">
                      <div class="icon-box">
                        <i class="flaticon flaticon-call"></i>
                      </div>

                      <div class="text-box">
                        <h4>Email / Phone</h4>

                        <p>
                          <a href="tel:+919664073873">Call: +91 9664073873</a>
                        </p>

                        <p>
                          <a href="javascript:void(0)">ahitpvtltd@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
