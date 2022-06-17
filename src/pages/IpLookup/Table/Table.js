// Context
import { useIpDetail } from "../../../contexts/IpContext";
// Styled Components
import { TableContainer } from "../../../styles/GlobalComponents/Table";
import Loader from "../../../styles/GlobalComponents/Loader";

const Table = () => {
  // State from context
  const { currentIpDetail } = useIpDetail();

  // Destructuring details from api response
  const { query, country, regionName, city, isp, status, message } =
    currentIpDetail;

  // Loading Animation when data is not yet fetched.
  if (!currentIpDetail) return <Loader />;

  return (
    <TableContainer>
      {status === "success" ? ( // If the IP is correct
        <table>
          <tbody>
            <tr>
              <th>IP Address</th>
              <td>{query && query}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{country && country}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{regionName ? regionName : "----"}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{city && city}</td>
            </tr>
            <tr>
              <th>Internet Provider</th>
              <td>{isp && isp}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        // If the status is not success
        <p>{message + " - Please enter a valid IP address"}</p>
      )}
    </TableContainer>
  );
};

export default Table;
