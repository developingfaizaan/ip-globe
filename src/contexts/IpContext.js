import { useContext, useEffect, useState, createContext } from "react";

// Context
const IpContext = createContext();

// Custom hook to access value directly without using useContext repetedly in all files
export const useIpDetail = () => useContext(IpContext);

export const IpProvider = ({ children }) => {
  const [currentIpDetail, setCurrentIpDetail] = useState("");

  const fetchIpDetails = async (ip) => {
    const req = await fetch(`http://ip-api.com/json/${ip}?lang=en`);
    const res = await req.json();

    setCurrentIpDetail(res);
  };

  // Fetching user's IP who accesses our website, to show their ip details
  useEffect(() => {
    (async () => {
      const req = await fetch("http://ip-api.com/json");
      const res = await req.json();

      setCurrentIpDetail(res);
    })();
  }, []);

  const value = { currentIpDetail, fetchIpDetails };

  return <IpContext.Provider value={value}>{children}</IpContext.Provider>;
};
