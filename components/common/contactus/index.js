import styles from "./contactus.module.css";
import classNames from "classnames";
import { MdPhone, MdOutlineMail, MdOutlineLocationOn,MdOutlineCheck} from "react-icons/md";
import { Formik, Form } from "formik";
import { InputText, InputTextArea } from "../form/input";
import { validationSchema } from "./validations";
import { sendMessage } from "../../../utils/services/contact.service";
import { useState } from "react";
const ContactusPage = () => {
    const [loading,setLoading]=useState(false);
    const [success,setSuccess]=useState(false);
    const handleSubmit = (values) => {
        setLoading(true);
        sendMessage(values)
            .then((response) => {
                console.log(response);
                setLoading(false);
                setSuccess(true);
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false);
            });
    };
    const initialValues = {
        message: "",
        fullNames: "",
        phone: "",
        subject: "greetings",
        email: "",
    };
    return (
        <div className={classNames("container-fluid", styles.container)}>
            <div className={classNames("row", styles.innerContainer)}>
                <section
                    className={classNames(
                        "col-lg-6 col-sm-12",
                        styles.contactInfo
                    )}
                >
                    <div className={classNames(styles.contactInfoSection)}>
                        <section
                            className={classNames(styles.InfoSectionHeader)}
                        >
                            <h1>Contact Us</h1>
                            <p>
                                Reach to us by using the below information or
                                the form.
                            </p>
                        </section>
                        <section className={classNames(styles.contactItem)}>
                            <div>
                                <MdPhone />
                            </div>
                            <span>+1(470) 231-7676</span>
                        </section>
                        <section className={classNames(styles.contactItem)}>
                            <div>
                                <MdOutlineMail />
                            </div>
                            <span>Info@americanbuz.com</span>
                        </section>
                        <section className={classNames(styles.contactItem)}>
                            <div>
                                <MdOutlineLocationOn />
                            </div>
                            <span>Kansas City, Missouri</span>
                        </section>
                    </div>
                </section>
                <section
                    className={classNames(
                        "col-lg-6 col-sm-12",
                        styles.contactInfo
                    )}
                >
                    {!success && <section className={classNames(styles.contactForm)}>
                        <Formik
                            onSubmit={handleSubmit}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            <Form>
                                <InputText
                                    name="fullNames"
                                    label="Your Name"
                                    placeholder="Enter your names"
                                />
                                <InputText
                                    name="phone"
                                    label="Phone"
                                    placeholder="Enter your phone"
                                />
                                <InputText
                                    name="email"
                                    label="Mail"
                                    placeholder="Enter your e-mail"
                                />
                                <InputTextArea
                                    name="message"
                                    label="Message"
                                    placeholder="Enter your message"
                                />
                                <div
                                    className={classNames(styles.buttonHolder)}
                                >
                                    <button
                                        className={classNames(styles.button)}
                                    >
                                        {loading? "Loading ...":" Send Message"}
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </section>}
                    {success && <section className={classNames(styles.messageSection)}>
                        <div><MdOutlineCheck/></div>
                        <span>Your e-mail successfull received,Thanks.</span>
                    </section>}
                </section>
            </div>
        </div>
    );
};
export default ContactusPage;
