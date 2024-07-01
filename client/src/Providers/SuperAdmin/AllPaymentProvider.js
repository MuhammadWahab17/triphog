import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const AllPaymentContext = createContext();

const AllPaymentProvider = ({ children }) => {
  const [allPayments, setAllPayments] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND}/api/v1/superadmin/${id}/payment`
        );
        setAllPayments(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AllPaymentContext.Provider
      value={{
        allPayments,
        loading,
      }}
    >
      {children}
    </AllPaymentContext.Provider>
  );
};

export const useAllPaymentContext = () => {
  return useContext(AllPaymentContext);
};

export default AllPaymentProvider;
