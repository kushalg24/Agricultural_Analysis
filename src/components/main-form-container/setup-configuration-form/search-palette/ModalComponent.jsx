import React, { useState, useEffect } from 'react';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap';
import JsonTable from './JsonTable';
import "./ModalComponent.css";
function FilterOptions({ onFilterChange, selectedFilter }) {
  return (
    <div style={{textAlign:"right",margin:"15px"}}>
      SortBy :
      <select
        style={{ width: "150px", height: "30px", marginLeft: "10px" }}
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="latest">Latest</option>
      </select>
    </div>
  );
}

function ModalComponent(props) {
  const [activeTab, setActiveTab] = useState('tab1');
  const [filterTab1, setFilterTab1] = useState('all');
  const [filterTab2, setFilterTab2] = useState('all');

  const handleFilterChangeTab1 = (selectedFilter) => {
    setFilterTab1(selectedFilter);
  };

  const handleFilterChangeTab2 = (selectedFilter) => {
    setFilterTab2(selectedFilter);
  };

  const filteredDataTab1 = filterTab1 === 'latest'
    ? [props.jsondata[0]]
    : props.jsondata;

  const filteredDataTab2 = filterTab2 === 'latest'
    ? [props.jsondata[0]]
    : props.jsondata;

  const resetFilters = () => {
    setFilterTab1('all');
    setFilterTab2('all');
  };

  useEffect(() => {
    // Reset filters when the modal is closed
    return () => {
      resetFilters();
    };
  }, []);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={resetFilters} // Reset filters when modal is closed
    >
      <Modal.Body>
        <Tabs
          id="controlled-tab-example"
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
        >
          <Tab eventKey="tab1" title="JSON VIEW">
          <FilterOptions
                onFilterChange={handleFilterChangeTab1}
                selectedFilter={filterTab1}
              />
            <div className="custom-scrollbar" style={{overflow:"auto" }}>
           
              <pre style={{marginBottom:"0",height: "500px", paddingLeft: "30px"}}>
              {JSON.stringify(filteredDataTab1, null, 2)}
              </pre>
            </div>
          </Tab>
          <Tab eventKey="tab2" title="TABLE VIEW">
          <FilterOptions
                onFilterChange={handleFilterChangeTab2}
                selectedFilter={filterTab2}
              />
            <div className="custom-scrollbar" style={{height:"500px",paddingLeft:"30px"}}>
              
              <JsonTable jsonData={filteredDataTab2} />
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;