import { useRef } from "react";
// Styled components
import {
  ModalContainer,
  ModalTitle,
  Modal as StyledModal,
} from "../../../../styles/GlobalComponents/Modal";
import { TableContainer } from "../../../../styles/GlobalComponents/Table";
import { Button } from "../../../../styles/GlobalComponents/FormComponents";

const Modal = ({ data, setModalOpen }) => {
  // Destructuring data
  const { query, isp, country, regionName, city, timezone } = data.ipDetails;

  const { browser, os, osVersion, browserVersion, mobile } = data.userDetails;

  const modalContainerRef = useRef(null);

  const handleCloseModal = (e) => {
    // Close Modal, when clicked outside the modal
    if (e.target === modalContainerRef.current) {
      setModalOpen(false);
    }
  };

  return (
    <ModalContainer ref={modalContainerRef} onClick={handleCloseModal}>
      <StyledModal>
        <ModalTitle>More Information</ModalTitle>

        <TableContainer>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <td>{data.date}</td>
              </tr>
              <tr>
                <th>Time</th>
                <td>{data.time}</td>
              </tr>
              <tr>
                <th>IP Address</th>
                <td>{query}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{country}</td>
              </tr>
              <tr>
                <th>State</th>
                <td>{regionName}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{city}</td>
              </tr>
              <tr>
                <th>Timezone</th>
                <td>{timezone}</td>
              </tr>
              <tr>
                <th>Internet Provider</th>
                <td>{isp}</td>
              </tr>
              <tr>
                <th>OS</th>
                <td>
                  {os} {osVersion}
                </td>
              </tr>
              <tr>
                <th>Browser</th>
                <td>{browser}</td>
              </tr>
              <tr>
                <th>Browser Version</th>
                <td>{browserVersion}</td>
              </tr>
              <tr>
                <th>Mobile</th>
                <td>{mobile ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>

        <Button
          onClick={() => setModalOpen(false)}
          style={{ marginLeft: "auto" }}
        >
          Close More Info
        </Button>
      </StyledModal>
    </ModalContainer>
  );
};

export default Modal;
