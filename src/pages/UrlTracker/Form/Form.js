import { useRef } from "react";
import { nanoid } from "nanoid";
// Styled Components
import {
  Form as StyledForm,
  FormGroup,
  Label,
  Input,
  Button,
} from "../../../styles/GlobalComponents/FormComponents";

const Form = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const originalUrl = inputRef.current.value;

    // Generating a Short URL id
    const trackingUrl = nanoid(7);

    // Generating a Traking Code
    const trackingCode = nanoid(7);

    console.log(trackingCode, trackingUrl, originalUrl);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Enter a URL</Label>
        <Input
          ref={inputRef}
          type="url"
          placeholder="https://twitter.com/webfaizaan"
        />
      </FormGroup>
      <Button>Create URL</Button>
    </StyledForm>
  );
};

export default Form;
