import { useState, useRef, useEffect } from "react";
import "./PlatformSetUp.css";
import { useContext } from "react";
import AppContext from "../../../context/AppContext/AppContext";
import GithubRightPanel from "../github-right-panel/githubRightPanel";
import pencilSvg from "./image/Pencil.svg";
import { logDOM } from "@testing-library/react";
import { TagsInput } from "react-tag-input-component";
import axios from "axios";
import BigQuery from "../../../images/bigquery1.png";
import OKTA from "../../../images/OKTA.png";
import Snowflake from "../../../images/Snowflake.png";
import Azure from "../../../images/Azure.png";
import OpenAI from "../../../images/OpenAI.png";
import { useSelector } from "react-redux";
import axioos from "../../../axiosInstance/axioos";

const APP_SCHEMA_URL = "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e953b528ebd37244d9d4d3/instance?upsert=true"
const POST_URL =
  "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e953b528ebd37244d9d4d3/instance?upsert=true";
const POST_IMG_URL =
  "https://ig.aidtaas.com/content-service/v1.0/content/upload/123/64e1fd3d1443eb00018cc231/64e1fd3d1443eb00018cc231?overrideFile=true";
function PlatformSetUp() {
  let {
    selectedPlatform,
    setSelectedPlatform,
    newIntegration,
    setNewIntegration,
    schemaData,
    platformSetUp,
    setPlatformSetUp,
    showPlatFormSave
  } = useContext(AppContext);
  
  const [visitedLinks , setVisitedLinks] = useState([]) //needs to be empties when user logouts
  let [gitUrlInput, setGitUrlInput] = useState(
    selectedPlatform?.platform_git_url
  );
  let [gitToken, setGitToken] = useState("");
  let [triggerCall, settriggerCall] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [InputTag, setInputTag] = useState([]);
  const [platformList,setPlatformList]=useState([]);
  const [selectedPlatformlocal,setSelectedPlatformlocal] =useState({})
  const [plList,setplList]=useState([]);
  // console.log("PL " + triggerCall);
  const loginData =useSelector(state=>state.loginslice)
  
  //to handle the color of visited links
  const handleLinkVisited = (newLink) => {
    // console.log("Link clicked:", newLink);
    if (visitedLinks.indexOf(newLink) === -1) {
    setVisitedLinks(prev => [...prev , newLink])
  }
  // console.log(visitedLinks);
  }
useEffect(()=>{
setSelectedPlatformlocal({...selectedPlatform})
},[selectedPlatform])

//handling adding new platform 
  async function handleSavePlatform() {
  
    try {
      const data1 = await axios.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e953b528ebd37244d9d4d3/instances/list")
      const data = data1?.data?.entities?.find(e=>e.UserId==loginData.UserId)
     
      const platformsArray = data.PlatformSchemas
      selectedPlatformlocal.platform_tags = [...InputTag];
      platformsArray.push(selectedPlatformlocal);

      data.PlatformSchemas = [...platformsArray];
      // data.platform_tags = [...InputTag]
      console.log(data.PlatformSchemas);
      const response = await fetch(POST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response) {
        throw new Error("Response is undefined.");
      }

      if (!response.ok) {
        // Handle non-successful responses
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setPlatformSetUp([...platformsArray]);
      setplList([...platformsArray])
      
    } catch (err) {
      console.error("Error posting data:", err.message);
    }
    setNewIntegration({flag:false});
    setSelectedPlatform(platformSetUp[0])
  }

  const handleImageUpload = async (e) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(POST_IMG_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      if (!response.ok) {
        console.error(`Image Upload Failed in db ${response.data}`);
      } else {
        const data = await response.json();
        // console.log(`Image upload successfull ${data.url}`);
        selectedPlatformlocal.platform_icon_url =data.url;
      }
    } catch (err) {
      console.error("Error in uploading Image ", err);
    }
  };
  useEffect(()=>{
    const fetchData=async()=>{
     try{
      const platformLists = await axioos.get(
        "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cde8291b707d34e93752d7/instances/list"
      );
      const platformNames = platformLists.data.entities[0]?.PlatformSchemas;
      const data1 = await axioos.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e953b528ebd37244d9d4d3/instances/list")
      const data = data1?.data?.entities.find(e=>e.UserId==loginData.UserId);
      const platformsArray = data.PlatformSchemas
      setplList([...platformsArray])
      
       setPlatformList(platformNames)
     }catch(e){
      console.log(e);
     }
    }
    fetchData()
  },[])
  console.log(schemaData,'sravan2');
  const platformIcons={
    "BigQuery":BigQuery,
    "OKTA":OKTA,
    "Snowflake":Snowflake,
    "Azure ":Azure,
    "OpenAI":OpenAI
  }
  let filteredPlatformNames = platformList.map(platform => platform.platform_name);

      const excludedPlatformNames = plList.map(pname => pname.platform_name);
      filteredPlatformNames = filteredPlatformNames.filter(platformName => !excludedPlatformNames.includes(platformName));

  return (
    <section style={{ display: "flex",height:"calc(100vh - 130px)" }} className="platform-github-container">
      <div className="platform-set-up-container">
        <div className="platform-set-up-details-1">
          <div className="platform-set-up-details-1-left">
            Platform Icon <br />
            {selectedPlatformlocal?.platform_icon_url ? (
              <img
              src={platformIcons[selectedPlatformlocal?.platform_name]}
              alt="icon here"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            /> 
              
            ) : selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            ) : (
              <span className="img-alt">your image here</span>
            )}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {/* <span
              className="platform-set-up-details-1-left-edit-btn"
              onClick={handleImageUpload}
            >
              <span>
                <img src={pencilSvg} alt="" />
              </span>
              <span>Edit</span>
            </span> */}
          </div>
          <div className="platform-set-up-details-1-right">
            Platform Name <br />
            {selectedPlatform?.platform_name?<input
              type="text"
              placeholder="Platform name"
              value={
                selectedPlatformlocal.platform_name
                  ? selectedPlatformlocal.platform_name
                  : ""
              }
              onChange={(e) =>
                setSelectedPlatformlocal({
                  ...selectedPlatformlocal,
                  platform_name: e.target.value,
                })
              }
            />:<select className="platformNames" onChange={(e) => {
              const selectedPlatform1 = platformList.find(platform => platform.platform_name === e.target.value);
              if (selectedPlatform1) {
                setSelectedPlatformlocal({
                  ...selectedPlatformlocal,
                  ...selectedPlatform1,
                  integrations:selectedPlatform?.integrations
                });
              }}}>
              <option value=""></option>
              {filteredPlatformNames.map((pname)=>(
              <option value={pname}>{pname}</option>
            )
            )}
          </select>}
            {" "}
            <br />
            Platform Url <br />
            <input
              type="text"
              placeholder="Platform Url"
              className={`${
                !newIntegration.flag ? 'clickable-link' : ''
              } ${visitedLinks.includes(selectedPlatformlocal.platform_url) ? 'visited-link' : ''}`}
              
              // readOnly
              onClick={() => {
                if (selectedPlatformlocal.platform_url) {
                  window.open(selectedPlatformlocal.platform_url, "_blank");
                }
                handleLinkVisited(selectedPlatformlocal.platform_url)
              }}
              value={selectedPlatformlocal.platform_url||""}
              onChange={(e) =>
                setSelectedPlatformlocal({
                  ...selectedPlatformlocal,
                  platform_url: e.target.value,
                })
              }
            />{" "}
            <br />
            {selectedPlatformlocal?.integrations?.length} Total APIs found
          </div>
        </div>
        <div className="platform-set-up-details-2">
          Platform Description <br />
          <textarea
            placeholder="Enter description"
            value={selectedPlatformlocal.platform_description}
            onChange={(e) =>
              setSelectedPlatformlocal({
                ...selectedPlatformlocal,
                platform_description: e.target.value,
              })
            }
          />
          Documentation URL <br />
          <input
            type="text"
            placeholder="Documentation URL"
            value={selectedPlatformlocal.platform_doc_url||""}
            onChange={(e) =>
              setSelectedPlatformlocal({
                ...selectedPlatformlocal,
                platform_doc_url: e.target.value,
              })
            }
            className={`${
              !newIntegration.flag ? 'clickable-link' : ''
            } ${visitedLinks.includes(selectedPlatformlocal.platform_doc_url) ? 'visited-link' : ''}`}
            // readOnly
            onClick={() => {
              if (selectedPlatformlocal.platform_doc_url) {
                window.open(selectedPlatformlocal.platform_doc_url, "_blank");
              }
              handleLinkVisited(selectedPlatformlocal.platform_doc_url)
            }}
          />{" "}
          <br />
          Git URL <br />
          <input
            type="text"
            value={selectedPlatformlocal.platform_git_url}
            onChange={(e) =>
              setSelectedPlatformlocal({
                ...selectedPlatformlocal,
                platform_git_url: e.target.value,
              })
            }
            className={`${
              !newIntegration.flag ? 'clickable-link' : ''
            } ${visitedLinks.includes(selectedPlatformlocal.platform_git_url) ? 'visited-link' : ''}`}
            // readOnly
            onClick={() => {
              if (selectedPlatformlocal.platform_git_url) {
                window.open(selectedPlatformlocal.platform_git_url, "_blank");
              }
              handleLinkVisited(selectedPlatformlocal.platform_git_url)
            }}
            placeholder="Enter Git Repo Url"
          />{" "}
          <br />
          Git Token <br />
          <input
            type="text"
            placeholder="Enter Git Token"
            onChange={(e) => {
              setGitToken(e.target.value);
            }}
          />{" "}
          {newIntegration.flag ? (
            
            <div className="tag-container">
            Add Tags
            {/* <pre>{JSON.stringify(InputTag)}</pre> */}
            <TagsInput
              value={InputTag}
              onChange={setInputTag}
              name="tags"
              placeHolder="enter tags"
            />
            <em>press enter to add new tag</em>
          </div>
          ) : (
            ""
          )}
          <button
            // disabled={!gitUrlInput || !gitToken}
            onClick={() => {
              settriggerCall((prev) => !prev);
            }}
          >
            Get Repo
          </button>
          {showPlatFormSave ? (
            <button
              className="new-platform-save-btn"
              onClick={handleSavePlatform}
            >
              SAVE
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {gitUrlInput && (
        <GithubRightPanel
          gitUrl={selectedPlatform.platform_git_url}
          gitToken={gitToken}
          triggerCall={triggerCall}
        />
      )}
    </section>
  );
}

export default PlatformSetUp;
