import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import changeLink from "../shared/utils";
import DefaultURL from "../GlobalVariables";
import events from "../photo/icons/Event.png";
import other from "../photo/icons/Others.png";
import cooking from "../photo/icons/Cooking.png";
import petcare from "../photo/icons/PetCare.png";
import cleaning from "../photo/icons/Cleaning.png";
import delivery from "../photo/icons/Transport.png";
import education from "../photo/icons/Education.png";
import babysitter from "../photo/icons/BabySitting.png";
import confections from "../photo/icons/Confections.png";
import construction from "../photo/icons/Construction.png";
import writeAWordWithoutFullUppercase from "../shared/FirstLetterUppercase";

const ListGroup = () => {
  //TO-DO: API pentru poze
  let photo = [
    construction,
    confections,
    cooking,
    delivery,
    events,
    education,
    cleaning,
    petcare,
    babysitter,
    other,
  ];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${DefaultURL}/category`);
        const data = response.data;
        setCategories(data);
      } catch (err) {
        setCategories(null);
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="container-xl">
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: 110 }}
      >
        <h1 className="fw-bold mb-5">Categories</h1>
        {categories ? (
          categories.map((category, index) => (
            <div className="col-xl-1 col-md-2 col-sm-3 col-6" key={index}>
              <a
                onClick={() => changeLink("category", category.nameOfCategory)}
              >
                <img
                  src={photo[index]}
                  alt="item"
                  className="w-50 scaleHover rounded-circle scaleHover"
                />
              </a>
              <p>{writeAWordWithoutFullUppercase(category.nameOfCategory)}</p>
            </div>
          ))
        ) : (
          <h3>
            <strong>No Categories Available Right Now</strong>
          </h3>
        )}
      </div>
    </div>
  );
};

export default ListGroup;
