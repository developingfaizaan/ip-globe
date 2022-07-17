import { Link } from "react-router-dom";
// Styled Components
import { TableContainer } from "../../../styles/GlobalComponents/Table";
import Loader from "../../../styles/GlobalComponents/Loader";

// DOMAIN to add before the Tracking Code
const DOMAIN = process.env.REACT_APP_DOMAIN;

const LinksInfoTable = ({ data }) => {
  // Loading Animation when data is not yet fetched.
  if (!data || data.length <= 0) return <Loader />;

  return (
    <TableContainer>
      <table>
        <tbody>
          <tr>
            <th>Original URL</th>
            <td>
              <a href={data.originalUrl} target="_blank" rel="noreferrer">
                {data.originalUrl}
              </a>
            </td>
          </tr>

          <tr>
            <th>Tracked URL</th>
            <td>
              <Link
                to={`/url/${data.trackingId}`}
                target="_blank"
                rel="noreferrer"
              >
                {`${DOMAIN}url/${data.trackingId}`}
              </Link>
            </td>
          </tr>

          <tr>
            <th>Access Link</th>
            <td>
              <Link
                to={`/track/${data.trackingId}`}
                target="_blank"
                rel="noreferrer"
              >
                {`${DOMAIN}track/${data.trackingId}`}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
};

export default LinksInfoTable;
