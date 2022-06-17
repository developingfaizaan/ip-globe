// Components
import { Header, Map } from "../../components";
import Form from "./Form/Form";
import Table from "./Table/Table";
// Styled Components
import { Layout, LeftPanel, RightPanel } from "./Styles";

const IpLookup = () => {
  return (
    <Layout>
      <LeftPanel>
        <Header />
        <Form />
        <Table />
      </LeftPanel>
      <RightPanel>
        <Map />
      </RightPanel>
    </Layout>
  );
};

export default IpLookup;
