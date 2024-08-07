import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./analyticsStyle.css";
import { useContext } from "react";
import AppContext from "../../../context/AppContext/AppContext";
import wfpreview from "../../../images/wfpreview.png";
import search from "../../../images/search.png";
import plusIcon from "../../../images/plusIcon.svg";
import tag from "../../../images/Tags.png";
import sortDescending from "../../../images/sortDescending.png";
import { useNavigate } from "react-router-dom";
import axioos from "../../../axiosInstance/axioos";


const AnalyticStyle = () => {
  let {
    dashboardState,
    setDashboardState,
    aqStylesPayload,
    setAqstylesPayload,
    aqArray,
    setaqArray,
    refreshData,
    setRefreshData,
    selectedIndex,
    setSelectedIndex,
    selectedPlatform,
    selectedIntegration
  } = useContext(AppContext);
  let [anlyData, setAnlyData] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  // let [refreshData,setRefreshData]=useState(false)
  const [showAddForm, setShowAddForm] = useState(false);
  const [formdata, setFormdata] = useState({
    analyticsStyleName: "",
    analyticsStyleDescription: "",
    createdBy: "",
    collectionOfAQs: [],
  });
  const navigate =useNavigate("")
  const schemaId=useMemo(()=>{
if(selectedPlatform.platform_name=="BigQuery"){
  return "65532198a5cb97115f849240"
}
else if(selectedPlatform.platform_name=="OKTA"){
return "65a77acd1e40c81a6bc9d1c0"
}
else if(selectedPlatform.platform_name=="Snowflake"){
  return "65a77b181e40c81a6bc9d1c1"
  }
  else if(selectedPlatform.platform_name=="Azure "){
    return "65a77b2a1e40c81a6bc9d1c2"
    }
    else if(selectedPlatform.platform_name=="OpenAI"){
      return "65a77b371e40c81a6bc9d1c3"
      }
      if(selectedPlatform.platform_name=="Sentinal Hub Api"){
        return "65532198a5cb97115f849240"
      }

  },[selectedPlatform?.platform_name])
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const resetData = () => {
    setFormdata({
      analyticsStyleName: "",
      analyticsStyleDescription: "",
      createdBy: "",
      collectionOfAQs: [],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newformdata = { ...formdata, createdOn: new Date().toISOString(),id: new Date().toISOString() };
    let formdatajson = JSON.stringify(newformdata);
    console.log(formdatajson);
    try {
      console.log(anlyData, "anlyData in side try catch");
      const response = await axios.post(
        `https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${schemaId}/instance`,
        formdatajson,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

console.log(response)
      console.log(response.data.status, "response on submit");
      if (response.data.status == "SUCCESS") {
        console.log("success");
        setRefreshData((prev) => !prev);
        setLoading(false);
      }
    } catch (err) {

    }
  };
  const convertDateformat = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}, ${formatTime(date)}`;
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (12:00 am)

    // Add leading zero to single-digit minutes
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
  }

  const handleAddButtonClick = () => {
    // setShowAddForm(true);
    setShowAddForm((prevShowAddForm) => !prevShowAddForm);
  };
  useEffect(() => {
    async function getAnlyStyles() {
      try {
        const anlyData = await axioos.get(
          `https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${schemaId}/instances/list`
        );
        console.log("im", anlyData, "data from instances");
        return anlyData.data.entities;
      } catch (err) {
        throw new Error("server down!");
      }
    }
    getAnlyStyles()
      .then((data) => {
        console.log(data, "data from aq");
        setAnlyData(data);
        setLoading(true);
        setShowAddForm(false);
        setSelectedIndex((prev) => {
          if (prev == 0) {
            return data&&data[0]?.id;
          } else {
            return prev;
          }
        });
        if (selectedIndex == 0) {
          setaqArray(data[0]?.collectionOfAQs);
          setAqstylesPayload(data[0]);
        } else {
          setaqArray(
            data?.filter((single) => single.id == selectedIndex)[0]
              .collectionOfAQs
          );
          setAqstylesPayload(
            data?.filter((single) => single.id == selectedIndex)[0]
          );
        }
      })
      .catch((err) => console.log(err));
  }, [refreshData,selectedPlatform?.platform_name]);

  const [flipStates, setFlipStates] = useState({});
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleCardClick = (styleData) => {
    setFlipStates((prevStates) => ({
      ...prevStates,
      [styleData.id]: !prevStates[styleData.id],
    }));

    setSelectedIndex(styleData.id);
    setDashboardState(styleData.id);
    setaqArray(styleData.collectionOfAQs);
    setAqstylesPayload(styleData);
  };
  const handleCardDoubleClick =()=>{
    // navigate(`/integration/lifecycle?platformName=${selectedPlatform?.platform_name}&integrationName=${selectedIntegration?.Integration_Name}`)
  }

  const handleSearchClick = () => {
    setToggleSearch((prev) => !prev);
  };
  // const sortAnlyData = () => {
  //   const sortedData = [...anlyData].sort((a, b) =>
  //     a.analyticsStyleName.localeCompare(b.analyticsStyleName)
  //   );
  //   setAnlyData(sortedData);
  // };

  // const handleSortClick = () => {
  //   sortAnlyData();
  // };
  const [sortOrder, setSortOrder] = useState("asc");

  const sortAnlyData = () => {
    const sortedData = [...anlyData].sort((a, b) => {
      const comparison = a.analyticsStyleName.localeCompare(b.analyticsStyleName);
      return sortOrder === "asc" ? comparison : -comparison;
    });
    setAnlyData(sortedData);
  };

  const handleSortClick = () => {
    sortAnlyData();
    // Toggle sort order
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };
  useEffect(()=>{
    console.log(selectedPlatform?.platform_name,"basha")
  })
  
  return (
    <>
      <div className="heading">
        <p>Analytics Jobs</p>

        {toggleSearch ? (
          <div className="searchbar1 animated-searchbar">
            <div className="side-panel-search-input">
              <input
                placeholder="Search...."
                onChange={(e) => setFilterValue(e.target.value)}
                value={filterValue}
              />
            </div>
          </div>
        ) : (
          <div className="InferredBlock">
            <div
              className="box1"
              style={{
                backgroundColor: `rgb(132, 132, 244)`,
                marginLeft: "5px",
              }}
            ></div>
            <span style={{ fontSize: 12 }}>Inferred</span>
          </div>
        )}

        <div style={{display:"flex",gap:"5px"}}>
          <img src={tag} />
          <img src={sortDescending} onClick={handleSortClick}/>
          <img
            id="sidepanelimg"
            src={search}
            style={{ cursor: "pointer"}}
            alt="Search"
            onClick={() => {
              handleSearchClick();
            }}
          />
        </div>
        {/* <button className="addAnalyticStylesBtn" onClick={handleAddButtonClick}>
          +
        </button> */}
      </div>
      <div className="allCardsContainer">
        {showAddForm ? (
          <form onSubmit={handleSubmit}>
            <div className="addFormContainer">
              <div class="aqformGroup">
                {" "}
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="analyticsStyleName"
                  onChange={HandleChange}
                  value={formdata.analyticsStyleName}
                  required="true"
                ></input>
              </div>

              <div className="aqformGroup">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="description "
                  name="analyticsStyleDescription"
                  required="true"
                  value={formdata.analyticsStyleDescription}
                  onChange={HandleChange}
                ></input>
              </div>
              <div className="aqformGroup">
                <label>Created By</label>
                <input
                  type="text"
                  placeholder="created by"
                  name="createdBy"
                  value={formdata.createdBy}
                  required="true"
                  onChange={HandleChange}
                ></input>
              </div>
              <div className="addFormFooter">
                <button className="footerBtn" onClick={resetData}>
                  Cancel
                </button>
                <button className="footerBtn" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        ) : null}
        
        <div
          className="analyticsCardContainer scrollbar"
          style={{
            height: showAddForm ? "calc(100vh - 512px)" : "calc(100vh - 190px)",
          }}
        >
          {isLoading || (
          <div id="loaderContainer">
            <span class="loader"></span>
          </div>
        )}
          {isLoading &&
            anlyData &&
            anlyData
              .filter(
                (stylesData) =>
                  stylesData?.analyticsStyleName
                    ?.toString()
                    .toLowerCase()
                    .includes(filterValue?.toLowerCase()) ||
                  stylesData?.analyticsStyleDescription
                    ?.toString()
                    .toLowerCase()
                    .includes(filterValue?.toLowerCase()) ||
                  stylesData?.createdBy
                    ?.toString()
                    .toLowerCase()
                    .includes(filterValue?.toLowerCase())
              )
              .map((styleData, index) => (
                <div
                  key={styleData.id}
                  className={`cardContainer ${
                    selectedIndex === styleData.id ? "border-blue" : ""
                  } ${flipStates[styleData.id] ? "flipped" : ""}`}
                  onClick={() => {
                    handleCardClick(styleData);
                  }}
                  onDoubleClick={()=>{
                    handleCardDoubleClick()
                  }}
                >
                  <div className="styleName">
                    {styleData.analyticsStyleName}
                  </div>
                  <div className="styleContent">
                    {styleData.analyticsStyleDescription}
                  </div>
                  <div className="creationMainContainer">
                    <div className="creatednameContainer">
                      <div className="creationHeading">Created by</div>
                      <div className="creationName">{styleData.createdBy}</div>
                      <div className="creationCompany">{styleData.company}</div>
                      <div className="companyName">Gaian Solutions</div>
                    </div>
                    <div className="createdtimeContainer">
                      <div className="creationHeading">Created on</div>
                      <div className="creationName">
                        {convertDateformat(styleData.createdOn)}
                      </div>
                    </div>
                  </div>
                  <div className="cardBack">
                    <img
                      src={wfpreview}
                      alt="Back Image"
                      width="100%"
                      height="150px"
                    />
                  </div>
                </div>
              ))}
          {/* <div
            className="sidepanel-bottom-part1"
            
          > */}
            {/* <img src={plusIcon} alt="" srcset="" onClick={handleAddButtonClick} className="sidepanel-bottom-part1"/> */}
          {/* </div> */}
        </div>
        <img src={plusIcon} alt="" srcset="" onClick={handleAddButtonClick} className="sidepanel-bottom-part1"/>
      </div>
    </>
  );
};

export default AnalyticStyle;
