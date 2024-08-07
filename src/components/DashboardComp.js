import { useState, useMemo } from "react";
import DashboardModal from "./DashboardModal";
function DashboardComp({
  content,
  index,
  graphindex,
  setgraphindex,
  graphlist,
  setUrlIndexG,
  setModalDisplayG,
  urlRecommedationsG,
  SeturlRecommedationsG
}) {
  const [urlIndex, setUrlIndex] = useState(0);
  const [urlRecommedations, SeturlRecommedations] = useState(0);
  const [modalDisplay, setModalDisplay] = useState(false);
  const handlePlatformChange = (val) => {
    setUrlIndex(val);
    setUrlIndexG(val);
  };

  function displayModal(index) {
    setModalDisplay(true);
    setModalDisplayG(true);
    setgraphindex(index);
    SeturlRecommedationsG(urlRecommedations)
    setUrlIndexG(urlIndex);
  }
  useMemo(() => {
    if (graphindex == index) {
      SeturlRecommedations(urlRecommedationsG);
    //   setUrlIndexG(urlIndex)
    }
  }, [urlRecommedationsG]);
  return (
    <div
      className="dashboard-top-left-graph"
      key={index}
      style={{ cursor: "pointer" }}
    >
      <div className="graph-title">{content.titile}</div>
      <select
        name="platform"
        id="platform_names"
        onChange={(e) => {
          handlePlatformChange(e.target.value);
        }}
      >
        <option value="0">Big Query</option>
        <option value="1">Okta</option>
        <option value="2">SnowFlake</option>
        <option value="3">Azure</option>
        <option value="4">OpenAI</option>
        <option value="5">GCP</option>
      </select>
      <div onClick={() => displayModal(index)}>
        <iframe
          src={content.urls[urlRecommedations][urlIndex].replace(
            /^http:/,
            "https:"
          )}
          width="100%"
          height="400"
          style={{ position: "relative", pointerEvents: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
export default DashboardComp;
