// Styled Components
import { TableContainer } from "../../../styles/GlobalComponents/Table";
import Loader from "../../../styles/GlobalComponents/Loader";
import { Button } from "../../../styles/GlobalComponents/FormComponents";

const TrackInfoTable = ({ data }) => {
  // Loading Animation when data is not yet fetched.
  if (!data || data.length <= 0) return <Loader />;

  // Destructuring only the clicks array to show info about who clicked the link
  const { clicks } = data;

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Date, Time</th>
            <th>IP Address</th>
            <th>Country</th>
            <th>City</th>
            <th>Browser</th>
            <th>OS</th>
            <th>More</th>
          </tr>
        </thead>

        {clicks.map((click, i) => {
          /// Destructuring data
          const { browser, os, osVersion } = click.userDetails;
          const { query, country, city } = click.ipDetails;

          return (
            <tbody key={i}>
              <tr>
                <td>
                  {click.date} - {click.time}
                </td>
                <td>{query}</td>
                <td>{country}</td>
                <td>{city}</td>
                <td>{browser}</td>
                <td>
                  {os} {osVersion}
                </td>
                <td>
                  <Button size="small">More Info</Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </TableContainer>
  );
};

export default TrackInfoTable;
