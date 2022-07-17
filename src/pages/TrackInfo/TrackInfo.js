import { useParams, Link } from "react-router-dom";
// Firebase DB helper Hook
import useDb from "../../firebase/useDb";
// Components
import { Header } from "../../components";
import LinksInfoTable from "./LinksInfoTable/LinksInfoTable";
import TrackInfoTable from "./TrackInfoTable/TrackInfoTable";
// Styled Components
import { SectionTitle, BigTitle, Center } from "../../styles/GlobalComponents";
import { Button } from "../../styles/GlobalComponents/FormComponents";

const TrackInfo = () => {
  const { id: docId } = useParams();

  // Fetching realtime info from DB via custom hook
  const data = useDb(docId);

  // If there is no matching tracking URL in db
  if (data === undefined || data === null) {
    return (
      <>
        <Header />
        <Center height="80vh" flexDirection="column">
          <BigTitle>
            No Tracking Info, Maybe your access link is wrong!
          </BigTitle>
          <Link to="/url-tracker">
            <Button>Track a Link</Button>
          </Link>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header />
      <SectionTitle>Links Info</SectionTitle>
      <LinksInfoTable data={data} />
      <SectionTitle>Track Info</SectionTitle>
      <TrackInfoTable data={data} />
    </>
  );
};

export default TrackInfo;
