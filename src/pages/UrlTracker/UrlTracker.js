// Components
import { Header } from "../../components";
import Form from "./Form/Form";
// Styled Components
import { SectionTitle, List } from "../../styles/GlobalComponents";

const UrlTracker = () => {
  return (
    <>
      <Header />
      <Form />
      <SectionTitle>How to use URL Tracker ?</SectionTitle>
      <List>
        <li>Enter a URL that you want to track</li>
        <li>Send the tracked link to the user</li>
        <li>Now you can see the details of the user that clicked that link</li>
        <li>Note your Access Link to get the info later as well</li>
      </List>
    </>
  );
};

export default UrlTracker;
