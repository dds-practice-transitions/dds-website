import { InputText } from "../inputs";
import { Button } from "../inputs/Button";
import styles from "./form.contact.module.css";

const informationValues = [
  {
    value: "general-info",
    display: "General information",
  },
  {
    value: "process",
    display: "process-understanding",
  },
];

export const FormContactUs = () => {
  return (
    <div className={styles.contact}>
      <div className="section">
        <p>What best describes you?</p>
        <label htmlFor="role-buying">
          I&apos;m buying a practice
          <input id="role-buying" type="radio" name="role" value="buying" />
        </label>
        <label>
          I&apos;m selling my practice
          <input type="radio" name="role" value="selling" />
        </label>
      </div>
      <div>
        <p>What kinds of information are you seeking?</p>
        {informationValues.map(({ value, display }) => (
          <label key={value} htmlFor={value}>
            <span>{display}</span>
            <input id={value} type="checkbox" value={value} />
          </label>
        ))}
      </div>
      <div>
        <p>Enter your email and we&apos;ll be in touch!</p>
        <InputText
          id="email"
          ddType="email"
          name="email_address"
          placeholder="your-email@domain.com"
        />
      </div>
      <Button ddVariant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};
