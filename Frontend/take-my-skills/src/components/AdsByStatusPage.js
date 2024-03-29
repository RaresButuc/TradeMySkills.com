import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Ads from "./Ads";
import DefaultURL from "../GlobalVariables";
import writeAWordWithoutFullUppercase from "../shared/FirstLetterUppercase";

export default function AdsByStatusPage({ status }) {
  const [adsByStatus, setAdsByStatus] = useState(null);
  const [nameOfUser, setNameOfUser] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchAdsByStatus = async () => {
      try{
             const responseAds = await axios.get(
        `${DefaultURL}/ads/profile/${id}/${status}`
      );
      const responseUser = await axios.get(`${DefaultURL}/users/${id}`);
      const dataAds = responseAds.data;
      setAdsByStatus(dataAds);
      const dataUser = responseUser.data;
      setNameOfUser(dataUser.name);
      }catch(err) {
        navigate("/error")
      }
 
    };

    fetchAdsByStatus();
  }, []);

  return (
    <div className="container-xl" style={{ marginTop: 100 }}>
      <h1>
        {nameOfUser}'s {writeAWordWithoutFullUppercase(status)} Ads:
      </h1>
      <hr />
      <Ads ads={adsByStatus} />
    </div>
  );
}
