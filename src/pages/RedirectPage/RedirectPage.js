import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// Firebase DB helper Hook
import { getDataFromDb } from "../../firebase/useDb";
// Styled Components
import { Center } from "../../styles/GlobalComponents";
// SVG Loader
import Loader from "./Loader";

const RedirectPage = () => {
  const { id: docId } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const doc = await getDataFromDb(docId);
      const docData = doc.data();

      // When there is no matching URL.
      if (!docData) {
        alert("Sorry, the page you were looking for could not be found.");
        return history.push("/url-tracker");
      }

      // Redirecting to the actual URL
      window.location.href = docData.originalUrl;
    })();
  }, [docId, history]);

  return (
    <Center>
      <Loader />
    </Center>
  );
};

export default RedirectPage;
