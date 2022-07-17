import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
// Firebase DB helper function
import { addToDb } from "../../../firebase/useDb";
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
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const originalUrl = inputRef.current.value;

    // Generating a Short URL id
    const trackingId = nanoid(7);

    try {
      // first argument is docID
      await addToDb(trackingId, {
        originalUrl,
        trackingId,
        clicks: [],
      });

      // Redirecting to trackInfo Page
      history.push(`/track/${trackingId}`);
    } catch (error) {
      setLoading(false);
      inputRef.current.value = "";
      console.error(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Enter a URL</Label>
        <Input
          ref={inputRef}
          type="url"
          placeholder="https://twitter.com/devfaizaan"
        />
      </FormGroup>
      <Button disabled={loading}>Create URL</Button>
    </StyledForm>
  );
};

export default Form;
