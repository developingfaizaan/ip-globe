// Styled Components
import Loader from "../../../styles/GlobalComponents/Loader";

const TrackInfoTable = ({ data }) => {
  // Loading Animation when data is not yet fetched.
  if (!data) return <Loader />;

  return <div>Tracking info here...</div>;
};

export default TrackInfoTable;
