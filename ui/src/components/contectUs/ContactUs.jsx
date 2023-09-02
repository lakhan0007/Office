import React from 'react'
import { useForm } from 'react-hook-form';
import "./ContactUs.css"

const ContactUs = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
<>

   <section className="page-title" style={{backgroundImage: 'url(https://ahitechno.com/public/front_website/images/background/22.png)'}}>
  <div id="stars" />
  <div id="stars2" />
  <div id="stars3" />
  <div className="auto-container">
    <div className="inner-container clearfix">
      <div className="title-box">
        <h1>Contact Us</h1>
        <ul className="bread-crumb clearfix">
          <li><a href="https://ahitechno.com">Home</a></li>
          <li style={{color: '#fff'}}>Contact Us</li>
        </ul>
      </div>
    </div>
  </div>
</section>

    <section className="contact-page-section">
  <div className="auto-container">
    <div className="row">
      <div className="form-column col-lg-12 col-md-12 col-sm-12">
        <div className="inner-column">
          <div className="sec-title text-center">
            <h6 className="subtitle">Now Very Easy</h6>
            <h2>
              Don’t hasitate to contact <br />
              with us now
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="alphabet-img wow fadeInRight animated" style={{visibility: 'visible', animationName: 'fadeInRight'}}><img src="https://ahitechno.com/public/front_website/images/resource/about-img.png" alt="about img" /></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <form className  id="contact-form" method="POST" >
                  <input type="hidden" name="_token" defaultValue="MqIIlI8YUUeD0evrCIsIj8y8w38FunKDmliJxVAi" {...register('firstName', { required: true })} />
                  {errors.lastName && <p> Name is required.</p>}
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-12 col-sm-12">
                      <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-12 col-sm-12"><input type="number" name="phone" placeholder="Phone"{...register('age', { pattern: /\d+/ })} />{errors.phone && <p>Please enter number</p>}</div>
                    <div className="form-group col-lg-6 col-md-12 col-sm-12"><input type="text" name="company" placeholder="Company" /></div>
                    <div className="form-group col-lg-6 col-md-12 col-sm-12"><input type="email" name="email" placeholder="Email" required /></div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12"><textarea name="message" placeholder="Massage" defaultValue={""} /></div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12 text">
                      <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="txt">Submit</span></button>
                    </div>
                  </div>
                </form>c
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-column col-lg-12 col-md-12 col-sm-12">
        <div className="inner-column">
          <div className="map-outer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973511175!2d75.6504719772847!3d26.88514167926112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1643710433474!5m2!1sen!2sin" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" />
          </div>
        </div>
      </div>
      <div className="contact-column col-lg-12 col-md-12 col-sm-12">
        <div className="contact-info">
          <div className="row">
            <div className="info-block col-lg-4 col-md-4 col-sm-12">
              <div className="inner">
                <div className="icon-box"><i className="flaticon flaticon-stopwatch" /></div>
                <div className="text-box">
                  <h4>Time</h4>
                  <p>
                    10:00am to 6:00pm <br />
                    Sunday Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="info-block col-lg-4 col-md-4 col-sm-12">
              <div className="inner">
                <div className="icon-box"><i className="flaticon flaticon-pin" /></div>
                <div className="text-box">
                  <h4>Location</h4>
                  <p>31 Arjun Colony,Amer Road, Behind Brahmpuri,Jaipur</p>
                </div>
              </div>
            </div>
            <div className="info-block col-lg-4 col-md-4 col-sm-12">
              <div className="inner">
                <div className="icon-box"><i className="flaticon flaticon-call" /></div>
                <div className="text-box">
                  <h4>Email / Phone</h4>
                  <p><a href="tel:+919664073873">Call: +91 9664073873</a></p>
                  <p><a href="javascript:void(0)">ahitpvtltd@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
)}

export default ContactUs
