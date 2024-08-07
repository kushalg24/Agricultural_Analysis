import React, { useContext, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import axioos from "../axiosInstance/axioos";
import AppContext from "../context/AppContext/AppContext";
import Azure from "../images/Azure.png";
import BigQuery from "../images/bigquery1.png";
import OKTA from "../images/OKTA.png";
import OpenAI from "../images/OpenAI.png";
import sideArrow from "../images/sideArrow.svg";
import Snowflake from "../images/Snowflake.png";
import dashLayout from "../images/summary.png.png";
import upArrow from "../images/upArrow.svg";
import Sentinal_Hub_Api from "../images/sentinal_logo.png";
import styles from "../styles/SidePanelForDashBoardScoped.module.css"; // Import the CSS module
import Accordion from "./Accordion"; // Import the custom Accordion component

export default function SidePanel({
  expandSideBar,
  setExpandSideBar,
  modalDisplay,
  setShowSummary,
  setSelectsummary,
  setShowLicences,
  setShowIceberg
}) {
  const {
    platformSetUp,
    selectedIntegration,
    setPlatformSetUp,
    setSelectedPlatform,
    selectedPlatform,
    setSelectedIntegration,
    newIntegration,
    setNewIntegration,
    setSchemadata,
    aqArray, setaqArray,
    setAqstylesPayload,
    setSelectedIndex,
    setSelectedIntegrationName
  } = useContext(AppContext);

  const loginData = useSelector(data => data.loginslice);
  const [activeApi, setActiveApi] = useState(null);
  const [activePlatform, setActivePlatform] = useState("");
  const [selectedJob, setselectedJob] = useState("");
  const [searchPlatform, setSearchPlatform] = useState("");
  const [searchPlatformOn, setSearchPlatformOn] = useState(false);
  const [sortPlatformSetup, setSortedPlatformSetup] = useState([]);
  const [sortedOrder, setSortedOrder] = useState("asc");
  const [defaultPlatform, setDefaultPlatform] = useState("abc");
  const [tagSearch, setTagSearch] = useState(false);
  const [InputTag, setInputTag] = useState([]);

  const platformIcons = {
    "BigQuery": BigQuery,
    "OKTA": OKTA,
    "Snowflake": Snowflake,
    "Azure ": Azure,
    "OpenAI": OpenAI,
    "Sentinal Hub Api": Sentinal_Hub_Api
  };

  const [alldata, setAllData] = useState({
    platform_name: "Summary",
    platform_url: "https://www.okta.com/",
    platform_description: "Okta gives you a neutral, powerful and extensible platform that puts identity at the heart of your stack. No matter what industry, use case, or level of support you need, we’ve got you covered.",
    platform_doc_url: "https://developer.okta.com/docs/reference/",
    platform_git_url: "https://github.com/okta/okta-sdk-java",
    // integrations: ["Insights", "Cost", "Usage"],

    integrations: ["Sentinal Map",],

    platform_tags: ["okta", "access", "management"],
  });

  const [analyticList, setAnalyticList] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const APP_SCHEMA_URL = "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd4db0dcad815a07fd071/instances/list";

  const schemaId = useMemo(() => {
    if (selectedPlatform.platform_name === "BigQuery") {
      return "65532198a5cb97115f849240";
    } else if (selectedPlatform.platform_name === "OKTA") {
      return "65a77acd1e40c81a6bc9d1c0";
    } else if (selectedPlatform.platform_name === "Snowflake") {
      return "65a77b181e40c81a6bc9d1c1";
    } else if (selectedPlatform.platform_name === "Azure ") {
      return "65a77b2a1e40c81a6bc9d1c2";
    } else if (selectedPlatform.platform_name === "OpenAI") {
      return "65a77b371e40c81a6bc9d1c3";
    } else if (selectedPlatform.platform_name === "Sentinal Hub Api") {
      return "65532198a5cb97115f849240";
    }
  }, [selectedPlatform?.platform_name]);

  const ANALYTIC_URL = `https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${schemaId}/instances/list`;

  useEffect(() => {
    setSortedPlatformSetup([...(platformSetUp || [])]);
  }, [platformSetUp, loginData?.UserId]);

  useEffect(() => {
    platform_api_call();
  }, []);

  async function platform_api_call() {
    try {
      const res = await axioos.get(APP_SCHEMA_URL);
      const res_data = await res.data;
      let platforms_List = res_data?.entities?.find(e => e.UserId === loginData.UserId)?.PlatformSchemas;
      setSchemadata(res_data?.entities?.find(e => e.UserId === loginData.UserId));
      setPlatformSetUp(platforms_List);
      setSortedPlatformSetup(platforms_List);
      setActivePlatform(platforms_List[0]?.platform_name);
      setDefaultPlatform(platforms_List[0]?.platform_name);

      if (platforms_List && platforms_List.length > 0) {
        setPlatformSetUp(platforms_List);
        setActivePlatform(platforms_List[0]?.platform_name);
        setSelectedPlatform({ ...platforms_List[0] });
        setSelectedIntegrationName(platforms_List[0].integrations[0]);

        analytic_api_call(platforms_List, res_data?.entities.find(
          (data) => data.UserId === "TestUser1"
        )?.User_Schema_Id);
      } else {
        console.error("No platforms found for TestUser1");
      }
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  }

  const goToRoot = () => {
    const basePath = "/setup/platform";
    const currentPathSegments = location.pathname.split("/").filter(Boolean);
    const levelsToRoot = currentPathSegments.length - 1;
    const navigatePath = Array(levelsToRoot).fill("..").join("/") + basePath;
    navigate(navigatePath);
  };

  async function analytic_api_call(platforms_List, User_Schema_Id) {
    try {
      let schemaListres = await axioos.get(`https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${User_Schema_Id}/instances/list`);
      let schemaList = schemaListres?.data?.entities;

      const res_data = await Promise.all(
        platforms_List.map(data => {
          return schemaList.find(dta => data.platform_name === dta.platform_name)?.schemaId;
        }).map((schema) => axioos.get(`https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${schema}/instances/list`))
      );

      const analyticsStyleName_list = res_data;
      setAnalyticList([...analyticsStyleName_list]);
      setActiveTab(alldata.integrations[0]);
      setDefaultPlatform(alldata.platform_name);
      setActivePlatform(alldata.platform_name);
      setSelectedPlatform(alldata);
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  }

  const handleSort = () => {
    const sorted = [...sortPlatformSetup];
    if (sortedOrder === "asc") {
      sorted.sort((a, b) => a.platform_name.localeCompare(b.platform_name));
    } else {
      sorted.sort((a, b) => b.platform_name.localeCompare(a.platform_name));
    }
    setSortedOrder(sortedOrder === "asc" ? "desc" : "asc");
    setSortedPlatformSetup(sorted);
  };

  const handleTagFilter = async (tag) => {
    setInputTag(tag);
  };

  useEffect(() => {
    let platformList = [...(platformSetUp || [])];
    let filteredArrays = platformList.filter((platform) => {
      return InputTag.every((value) =>
        platform.platform_tags ? platform.platform_tags.includes(value) : null
      );
    });
    setSortedPlatformSetup([...filteredArrays]);
  }, [InputTag]);

  useEffect(() => {
    console.log("selected job......", selectedJob);
  }, [selectedJob]);

  useEffect(() => {
    if (!expandSideBar) {
      setActiveTab("");
    }
  }, [expandSideBar]);

  function integrationClick(data, platform) {
    setSelectsummary(`${platform} ${data}`);
    setselectedJob(data);
    setShowIceberg(false);
  }

  const arrowStyle = {
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div
      id="sidebar-container"
      onMouseOver={() => !modalDisplay && setExpandSideBar(true)}
      onMouseOut={() => setExpandSideBar(false)}
      className={`${styles.sidepanelDashBoard} ${expandSideBar ? '' : styles.collapsed}`} // Apply the CSS module class
    >
      <div className={styles.sidepanelDashBoardTopPart}>
        {tagSearch ? (
          <div className={styles.tagSearchContainer}>
            <TagsInput
              value={InputTag}
              onChange={handleTagFilter}
              name="tags"
              placeHolder="enter tags and press enter"
              className={styles.tagsInput}
            />
          </div>
        ) : (
          ""
        )}
        <Accordion
          title={
            <div className={styles.bqHeadingParent}>
              <div className={styles.bqLogoParent}>
                <img id="bqLogo" src={dashLayout} alt="Summary" />
              </div>
              {expandSideBar && (
                <div className={styles.bqHeadingNameParent}>
                  <p id="bqHeadingName">{alldata.platform_name}</p>
                </div>
              )}
            </div>
          }
          isOpen={activeTab === "Summary"}
          onClick={() => {
            setSelectedPlatform({ ...alldata });
            setActiveTab(activeTab === "Summary" ? "" : "Summary");
          }}
        >
          {alldata.integrations.map((integration, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectsummary(integration);
                // setShowIceberg(integration === "Insights");
                setShowIceberg(integration === "Sentinal Map");

                
                setShowLicences(integration === "Licences");
                setShowSummary(true);
                setActiveTab(integration);
                setSelectedIntegrationName(integration);
              }}
              className={styles.bqLogsApiHeadingNameParents}
            >
              <p>{integration}</p>
            </div>
          ))}
        </Accordion>
        {sortPlatformSetup
          ?.filter((platform) =>
            platform?.platform_name
              ?.toString()
              .toLowerCase()
              .includes(searchPlatform?.toLowerCase())
          )
          .map((platform, idx) => (
            <Accordion
              key={platform?.platform_name}
              title={
                <div className={styles.bqHeadingParent}>
                  <div className={styles.bqLogoParent}>
                    <img id="bqLogo" src={platformIcons[platform?.platform_name]} alt={platform?.platform_name} />
                  </div>
                  {expandSideBar && (
                    <div className={styles.bqHeadingNameParent}>
                      <p id="bqHeadingName">{platform?.platform_name}</p>
                    </div>
                  )}
                </div>
              }
              isOpen={activeTab === platform?.platform_name}
              onClick={() => {
                setShowSummary(false);
                setShowLicences(false);
                setActiveTab(activeTab === platform?.platform_name ? "" : platform?.platform_name);
                setSelectedPlatform({ ...platform });
                setActivePlatform((prev) =>
                  prev === platform?.platform_name ? "" : platform?.platform_name
                );
              }}
            >
              {activeTab === "BigQuery" &&
                ["Costs Appropriation", "Storage Consumption"].map((data) => (
                  <div
                    key={data}
                    onClick={() => integrationClick(data, "BigQuery")}
                    className={styles.bqLogsApiHeadingNameParents}
                  >
                    <p>{data}</p>
                  </div>
                ))}
              {activeTab === "Sentinal Hub Api" &&
                ["Yield Estimation", "Moisture Content", "Average Land Size", "YoY Yield Growth by Crop Type"].map(
                  (data) => (
                    <div
                      key={data}
                      onClick={() => integrationClick(data, "Sentinal Hub Api")}
                      className={styles.bqLogsApiHeadingNameParents}
                    >
                      <p>{data}</p>
                    </div>
                  )
                )}
             
            </Accordion>
          ))}
      </div>
    </div>
  );
}
