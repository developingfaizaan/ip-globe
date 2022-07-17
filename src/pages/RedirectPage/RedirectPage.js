import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// Context
import { useIpDetail } from "../../contexts/IpContext";
// Firebase DB helper Hook
import { getDataFromDb, updateClicksInfo } from "../../firebase/useDb";
// Utils Functions
import { getUserData, formatDate } from "../../utils";
// Styled Components
import { Center } from "../../styles/GlobalComponents";
// SVG Loader
import Loader from "./Loader";

const RedirectPage = () => {
  const { id: docId } = useParams();
  const history = useHistory();
  // Function for fetching user's IP address
  const { fetchIpOfUser } = useIpDetail();

  useEffect(() => {
    (async () => {
      const doc = await getDataFromDb(docId);
      const docData = doc.data();

      // When there is no matching URL.
      if (!docData) {
        alert("Sorry, the page you were looking for could not be found.");
        return history.push("/url-tracker");
      }

      // Getting User's Data
      const userDetails = getUserData(window);
      const ipDetails = await fetchIpOfUser();

      // Getting Date and Time in UTC
      const date = new Date().toUTCString();

      // Formating the Date to save in database
      const { wholeDate, time } = formatDate(date);

      // storing user's info into an object
      const newData = {
        userDetails,
        ipDetails,
        time,
        date: wholeDate,
      };

      // The data to save in DB with previous clicks info and the current new one.
      const updatedClicks = [...docData.clicks, newData];

      // Updating the database with old infos and a brand new user's info
      await updateClicksInfo(docId, updatedClicks);

      // Redirecting to the actual URL
      window.location.href = docData.originalUrl;
    })();
  }, [docId]); //eslint-disable-line

  return (
    <Center height="100vh">
      <Loader />
    </Center>
  );
};

export default RedirectPage;
