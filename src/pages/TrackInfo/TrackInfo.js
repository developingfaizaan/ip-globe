import { useParams } from "react-router-dom";
// Firebase DB helper Hook
import useDb from "../../firebase/useDb";
// Components
import { Header } from "../../components";
import LinksInfoTable from "./LinksInfoTable/LinksInfoTable";
import TrackInfoTable from "./TrackInfoTable/TrackInfoTable";
// Styled Components
import { SectionTitle } from "../../styles/GlobalComponents";

const TrackInfo = () => {
  const { id: docId } = useParams();

  // Fetching realtime info from DB via custom hook
  const data = useDb(docId);

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
