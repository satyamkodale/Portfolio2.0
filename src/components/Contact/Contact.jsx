import styles from "./ContactStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
function Contact() {
  const { theme, toggleTheme } = useTheme();
  const color = theme === "light" ? "white" : "black";
  return (
    <>
      <section id="contact" className={styles.container}>
        <h1
          id="contact"
          style={{ backgroundColor: color, padding: "30px" }}
        ></h1>

        <form action="">
          <h1 id="contact"></h1>
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <input className="hover btn" type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
}

export default Contact;
