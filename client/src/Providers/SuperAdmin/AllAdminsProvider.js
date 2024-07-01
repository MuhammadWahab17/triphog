import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

const AllAdminsContext = createContext();

const AllAdminsProvider = ({ children, dependency }) => {
  const [allAdmins, setAllAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [query, setQuery] = useState({
    name: null,
    currentPage: 1,
    recordsPerPage: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = Object.entries({ ...query })
          .filter(([_, value]) => value !== null) // Remove empty values
          .map(([key, value]) => `${key}=${value}`)
          .join("&");

        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND}/api/v1/superadmin/admin?${queryString}`
        );
        setAllAdmins(data.data);
        setTotalRecords(data.totalRecords);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, dependency]); // Added dependency to the effect

  const handlePageChange = (newPage) => {
    setQuery({ ...query, currentPage: newPage });
  };

  return (
    <AllAdminsContext.Provider
      value={{
        allAdmins,
        loading,
        query,
        setQuery,
        totalRecords,
        currentPage: query.currentPage,
        recordsPerPage: query.recordsPerPage,
        handlePageChange,
      }}
    >
      {children}
    </AllAdminsContext.Provider>
  );
};

export const useAllAdminsContext = () => {
  return useContext(AllAdminsContext);
};

export default AllAdminsProvider;
