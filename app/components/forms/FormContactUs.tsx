import { InputCheckbox, InputGroup, InputText } from "../inputs";
import { Button } from "../inputs/Button";
import styles from "./form.contact.module.css";

const informationValues = [
  {
    value: "general-info",
    display: "General information",
  },
  {
    value: "brokerage-fees",
    display: "Brokerage Fees",
  },
  {
    value: "scope-of-services",
    display: "Scope of Services",
  },
  {
    value: "understand-the-process",
    display: "Understand the Process",
  },
  {
    value: "other",
    display: "Other",
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
        <InputGroup ddVariant="checkbox">
          {informationValues.map(({ value, display }) => (
            <InputCheckbox
              key={value}
              value={value}
              name="tags"
              ddVariant="pill"
              ddLabel={display}
            />
          ))}
        </InputGroup>
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
