import React from "react";
import { Formik, Form, Field } from "formik";

const ContactWithMap = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    alert(JSON.stringify(values, null, 2));
                    // show message

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. I will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <button type="submit" className="btn-curve btn-lit">
                          <span>Send</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <h3 className="custom-font wow" data-splitting>
                  Let&apos;s Talk.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="mailto:hello@mrk-digital.com">hello@mrk-digital.com</a>
                  </h5>
                  <a href="tel:3467041856">(+1) 346 704 1856</a>
                </div>
                <h3 className="custom-font wow" data-splitting>
                  FOLLOW US
                </h3>
                <div className="social mt-30">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     

      
    </>
  );
};

export default ContactWithMap;
