const contact = () => {
  return (
    <>
      <section className="contact-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="head">Reach Out to Us</h1>
              <p className="modern2 fs-6 mt-2">We are only a step away from you</p>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-wrapper-details p-5">
        <div className="container-xxl">
          <div className="row text-center align-items-center">
            <div className="col-lg-6 col-md-12 p-3">
              <div className="map card m-auto embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13584.993684425126!2d-8.0196489!3d31.6544226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafedc14bd1a871%3A0x57a79633b42a2cdb!2sNoza%20Digital%20Marketing%20Agency%20(Agence%20de%20Communication%20Web)!5e0!3m2!1sen!2sma!4v1692970364432!5m2!1sen!2sma"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card p-5">
                <h2 className=" head footer-title mb-3">
                  <b>Contact Us</b>
                </h2>
                <p className="mb-2">
                  <b className="act">Address:</b> IDAR EL KARMA, Rte de Safi, Marrakech
                </p>
                <p className="act mb-2">
                  <b>Phone:</b>{" "}
                  <a className="footer-tel" href="tel:+212661975556">
                    Call us at +212661975556
                  </a>
                </p>
                <p className="mb-4">
                  <b className="act">Hours:</b> From 8 a.m To 6 p.m
                </p>
                <p>
                    Have questions or need assistance? We&#39;re here to help! Contact <span className="text-danger">NOZA</span> friendly 
                    customer support team for any inquiries you may have. Whether you need assistance with product information, 
                    order tracking, or account-related queries
                </p>
                <p>
                    You can reach us by giving us a call at during our business hours. Your satisfaction is our priority, 
                    and we&#39;re committed to ensuring that your experience with <span className="text-danger">NOZA</span> is smooth and enjoyable. We&#39;re always happy to assist you !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-message p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
              <div className="card p-5">
                <h2 className="text-center mb-4 mail">Leave Us A message</h2>
                <div className=" d-flex align-items-center justify-content-center">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mb-3 mail"
                      >
                        Enter Your Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label mail"
                      >
                        Type in your message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="col-12 text-center gap-2">
                      <button id="button-link" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
