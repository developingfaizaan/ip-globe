// Context
import { useIpDetail } from "../../../contexts/IpContext";
// Styled Components
import { TableContainer } from "../../../styles/GlobalComponents/Table";
import Loader from "../../../styles/GlobalComponents/Loader";

const Table = () => {
  // State from context
  const { currentIpDetail } = useIpDetail();

  // Destructuring details from api response
  const { ip, country_name, region, city, org } = currentIpDetail;

  // Loading Animation when data is not yet fetched.
  if (!currentIpDetail) return <Loader />;

  return (
    <TableContainer>
      {currentIpDetail.error ? currentIpDetail.reason : (
        <table>
          <tbody>
            <tr>
              <th>IP Address</th>
              <td>{ip && ip}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{country_name && country_name}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{region ? region : "----"}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{city && city}</td>
            </tr>
            <tr>
              <th>Internet Provider</th>
              <td>{org && org}</td>
            </tr>
          </tbody>
        </table>
      )}
    </TableContainer>
  );
};

export default Table;
