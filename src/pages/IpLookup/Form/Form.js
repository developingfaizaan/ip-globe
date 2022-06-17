import { useRef } from "react";
// Context
import { useIpDetail } from "../../../contexts/IpContext";
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
  const { fetchIpDetails } = useIpDetail(); // from context

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchIpDetails(inputRef.current.value); // fetching details from inputed IP
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Enter an IP Address</Label>
        <Input ref={inputRef} type="tel" placeholder="eg: 109.78.61.80" />
      </FormGroup>
      <Button>Get Info</Button>
    </StyledForm>
  );
};

export default Form;
