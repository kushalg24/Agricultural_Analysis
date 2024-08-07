import { useEffect, useState } from "react";
import plusIcon from "./plus-icon.svg";
import crossIcon from "./cross-icon.svg";
import "./setup-form-card.css";
import plusImage from "./Variant6.svg";
import downArrow from "./Frame.svg";
import toggle from "./Toggle.svg";
import { Button } from "bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { modifyValues } from "../../../../redux/inputslice";
import AutocompleteInput from "./AutocompleteInput";
import { useQuery } from '@tanstack/react-query';
const SetupFormCard = ({ api, removeMethod,selectedIntegration,payload }) => {

console.log(payload,api,"mrp")
	const [visibleParams, setVisibleParams] = useState(2);
	const [formValues,SetFormValues] =useState(payload)
	const dispatch =useDispatch()
	const {data:data,status:status} =useSelector(state=>state.inputslice)

	console.log(formValues,"nokia")

	const showMore = () => {
			setVisibleParams(visibleParams+1);
	};
	const showLess = () => {
	  setVisibleParams(2);
	};

// const getInputParams = async ()=>{
// 	try{
// const response =await axios.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9509828ebd37244d9d48f/instances/list?size=100")
// const filteredResponse =response?.data?.entities[0]?.selectedlist?.filter((e)=>{return e.Integration_Name==selectedIntegration?.Integration_Name})
// console.log(filteredResponse,"saregama")
// SetFormValues(filteredResponse)
// 	}
// 	catch(err){
// SetFormValues([])
// console.error(err,"padanis")
// 	}
// }
const handleChange =(e,key)=>{
	if(status=="succeeded"){
	console.log(payload,"sharuk")
	if(payload){
	dispatch(modifyValues({...payload,inputParams:{...payload.inputParams,[key]:e.target.value},selectedInputParams:{...payload.selectedInputParams,[key]:e.target.value}}))}
	else {
		alert("please save the configuration before editing")
	}	
}

// SetFormValues(prev=>({...prev,inputParams:{...prev.inputParams,[key]:e.target.value}}))
}
const handleOutputparamsChange =(e,key)=>{
	if(status=="succeeded"){
		console.log(payload,"sharukkhan")
		if(payload){
		dispatch(modifyValues({...payload,PathParams:{...payload.PathParams,[key]:e.target.value},selectedPathParams:{...payload.selectedPathParams,[key]:e.target.value}}))}
		else {
			alert("please save the configuration before editing")
		}	
	}
	
}
const handleBodyChange =(value,key)=>{
	if(status=="succeeded"){
		console.log(payload,"sharukkhan")
		if(payload){
			dispatch(modifyValues({...payload,body:{...payload.body,[key]:(typeof value === "object" &&!Array.isArray(value) ? JSON.parse(value) : value)},selectedBody:{...payload.selectedBody,[key]:(typeof value === "object" &&!Array.isArray(value) ? JSON.parse(value) : value)}}))}
			else {
			alert("please save the configuration before editing")
		}	
	}
	
}
const handleTagChange =(value,key)=>{
	if(status=="succeeded"){
		console.log(payload,"sharukkhan")
		if(payload){
		dispatch(modifyValues({...payload,outputParamsTag:{...payload.outputParamsTag,[key]:value}}))}
		else {
			alert("please save the configuration before editing")
		}	
	}
}
const handleIndexChange =(value,key)=>{
	if(status=="succeeded"){
		console.log(payload,"sharukkhan")
		if(payload){
		dispatch(modifyValues({...payload,indexes:{...payload.indexes,[key]:value}}))}
		else {
			alert("please save the configuration before editing")
		}	
	}
}


	// const [selectedTag, setSelectedTag] = useState("Primary");

	// const handleTagClick = (currentParam, tag) => {
	// 	// currentParam.tag = tag;
	// };

	const [tags, setTags] = useState([
		"Mobius_PI_cost_fluctuation",
		"Mobius_PI_rolling_avg_usage",
		"Mobius_PI_id",
		"Mobius_PI_lowest_cost_fluctuation",
		"Mobius_PI_usage_changes",
		"Mobius_PI_lowest_storage_growth",
		"Mobius_PI_api_call_volume",
		"Mobius_PI_total_cost",
		"Mobius_PI_highest_storage_growth",
		"Mobius_PI_cumulative_usage",
		"Mobius_PI_cost_changes",
		"Mobius_PI_storage_growth",
		"Mobius_PI_user_type",
		"Mobius_PI_time",
		"Mobius_PI_product_type",
		"Mobius_PI_avg_cost_per_usage",
		"Mobius_PI_growth_rate",
		"Mobius_PI_avg_usage_growth_rate",
		"Mobius_PI_cumulative_cost",
		"Mobius_PI_total_usage",
		"Mobius_PI_usage_efficiency_trend",
		"Mobius_PI_avg_cost",
		"Mobius_PI_lowest_usage",
		"Mobius_PI_avg_storage_growth_rate",
		"Mobius_PI_avg_cost_per_storage_growth",
		"Mobius_PI_highest_usage",
		"Mobius_PI_cost_to_usage_ratio",
		"Mobius_PI_peak_hour",
		"Mobius_PI_cost_distribution",
		"Mobius_PI_avg_usage",
		"Mobius_PI_date"
	  ]);


	// const [Outputparameters, setOutputParameters] = useState([
	// 	{ parameter: "", tag: "", property: "" },
	// ]);


	// const handleOutputParameterAddition = () => {
	// 	setOutputParameters([
	// 		...Outputparameters,
	// 		{ parameter: "", tag: "", property: "" },
	// 	]);
	// };


	// const fetchTags = async () => {
	// 	const url=
    //       "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65fd7a7c6396da76bee91830";
    //       const response = await fetch(url, {
    //         headers: {
    //           Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJwcm9maWxlVXJsIjoid3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2F2aW5hc2gtcGF0ZWwtcm9ja3oiLCJyZWNlbnRfc2Vzc2lvbiI6Ik5BIiwic3ViIjoiZ2FpYW4uY29tIiwicGFyZW50VGVuYW50SWQiOiJOQSIsImNvbG9yIjoiNjFkYWRjNGE3ZGI1NGRmMThlZDYzMzBhMWJhODJkZjYiLCJ1c2VyX25hbWUiOiJhcHBzQGdhaWFuc29sdXRpb25zLmNvbSIsImlzcyI6ImdhaWFuLmNvbSIsImlzQWRtaW4iOnRydWUsInBsYXRmb3JtSWQiOiI2NGUyMDdjY2Y2ZTY3OTFhNjM0ZDdkOTIiLCJ1c2VyTmFtZSI6ImFwcHNAZ2FpYW5zb2x1dGlvbnMuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9NQVJLRVRQTEFDRV9VU0VSIl0sImNsaWVudF9pZCI6ImdhaWFuIiwic2NvcGUiOlsidHJ1c3QiLCJyZWFkIiwid3JpdGUiXSwidGVuYW50SWQiOiI2NGUxZmQzZDE0NDNlYjAwMDE4Y2MyMzEiLCJsb2dvIjoid3d3Lmdvb2dsZS5jb20vaW1hZ2VzLiIsImV4cCI6MTcwOTI1ODUxMiwianRpIjoiNzA4NjI3NTItMGFhNC00MWQyLTg1YzMtZjg4M2U5MWIxNTYzIiwiZW1haWwiOiJhcHBzQGdhaWFuc29sdXRpb25zLmNvbSJ9.LtZDiuvdwUHMGTigsr4Ph3ESKYRtyG3Aa6JVJbxmapgFwBzjc4IKAmPmNhPYcJ2U9UAVIhsDUR6O64b4RFfvOUDk7gFGc8yoZYIVKx_pS4BGijnycbaPkwRuwal3egaWHGldbnFXK5tkVMzQMsjX7Zh9RyrJ2dNR2I6so9TValGUfg3XQckqasvlhv15PIwsUA6mUzLMmGg6AC-0yfuKaLbIcXKxUVD2AiXemUKc-1dJw8peyXOhzq2ooxijgcVK6t6r1MEvXcq2xpZ2SEHfzIFa48rN3Lw03EnWcc4UgsbnGNRqk8-WxM7g3U3wkm_8hZ2L9G53B2YZBbnhrLNgjw`,
    //         },
    //       });
	// 	if (!response.ok) {
	// 	  throw new Error('Failed to fetch tags');
	// 	}
	// 	const data = await response.json();
	// 	const tagsArray = data.attributes.map((item) => item.name);
	// 	return tagsArray;
	//   };
	
	//   // Use React Query to fetch and cache the data
	//   const { data: cachedTags, isLoading, isError, error } = useQuery(
	// 	{
	// 	  queryKey: 'tags',
	// 	  queryFn: fetchTags,
	// 	}
	//   );
	  
	  // Update state when data changes
	//   useEffect(() => {
	// 	if (cachedTags) {
	// 	  setTags(cachedTags);
	// 	}
	//   }, [cachedTags]);
	
	

	// const getAllTags = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			"https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655340cba34e3b716bd16b3e"
	// 		);
	// 		if (response.status < 300) {
	// 			const data = await response.json();
	// 			const tagsArray = data.attributes.map((item) => item.name);
	// 			setTags(tagsArray);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// useEffect(() => {
	// 	getAllTags();
	// }, []);







	
	// const [addedinputparams, setaddedinputparams] = useState([]);


// 	function handleAddMore(id, inputParams) {
// 		// Convert object key-value pairs to an array of objects
// 		const keyValueArray = Object.entries(inputParams).map(([key, value]) => ({ key, value }));
	  
// 		// Check if the id is already present in addedinputparams
// 		const index = addedinputparams.findIndex(data => data.id === id);
	  
// 		setaddedinputparams(prevData => {
// 		  const newData = [...prevData];
	  
// 		  if (index === -1) {
// 			// If id is not present, initialize add_data with an empty inputParams array
// 			const add_data = {
// 			  id: id,
// 			  inputParams: [keyValueArray[0]]  // Change to keyValueArray[0] if you want to add the first key-value pair
// 			};
	  
// 			// Add add_data to the array
// 			newData.push(add_data);
// 		  } else {
// 			// Increment the index for the current id
// 			const currentIndex = newData.findIndex(data => data.id === id);
	  
// 			// Add the next key-value pair from keyValueArray to the array
// 			if (currentIndex !== -1) {
// 			  const currentData = newData[currentIndex];
// 			  currentData.inputParams.push(keyValueArray[currentData.inputParams.length+1]);  // Change to keyValueArray[0] if you want to add the next key-value pair
// 			}
// 		  }
	  
// 		  return newData;
// 		});
	  
// 		console.log("addedinputparams", addedinputparams);
	  
	  
	  
	  
	  



	

// 	// setaddedinputparams((prevAddedInputParams) => {
// 	//   const updatedAddedInputParams = [...prevAddedInputParams];
  
// 	//   // Find the index of the data with the given id in addedinputparams
// 	//   const dataIndex = updatedAddedInputParams.findIndex((data) => data.id === id);
  
// 	//   if (dataIndex !== -1) {
		
       




// 	//   } else {
// 	// 	// If data with the given id is not found, push a new data object
// 	// 	updatedAddedInputParams.push({
// 	// 	  id: id,
// 	// 	  params: "",
// 	// 	});
// 	//   }
  
// 	// console.log("updatedAddedInputParams",updatedAddedInputParams)
// 	//   return updatedAddedInputParams;
// 	// });






//   }
  



// this logic is used for value trasformation

const transformInputValue = (inputValue) => {
	// Ensure inputValue is a string
	const stringValue = inputValue.toString();
  
	// Define your transformation logic using regular expressions
	const transformedValue = stringValue
	  .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/([A-Z])/g, ' $1').replace("your project id",8743759234593).replace("your page token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6").replace("your filter criteria","Id").replace("q","query").replace("8743759234593","AppName")
	  .toLowerCase(); // Convert to lowercase
  
	return transformedValue;
  };





	



	return (
		<div className="setup-form-card">
			<button
				className="main-delete-btn"
				onClick={() => removeMethod(api.id)}
			>
				<img src={crossIcon} alt="" />
			</button>
			<p className="set-up-form-card-heading-1">Endpoint</p>
			<h2 className="form-heading">{api.name}</h2>
			<p className="api-description">{api.description}</p>


			<div className="parameters-container outlineborder1">
      <label id="customlabel">Input parameter</label>

      {Object.keys(api.inputParams).map((param, idx) =>{
		console.log("oven")

const inputParamsValue = (payload && payload.inputParams && payload.inputParams[param]) 
? payload.inputParams[param]:""
const inputParamsValuePlaceHolder = (api && api.inputParams && api.inputParams[param])?api.inputParams[param]:""


		return (
		
        <div
          className={`form-group ${idx < visibleParams ? '' : 'hidden'}`}
          key={idx}
        >
          <div className="input-container">
            <input
              name="key"
              type="text"
              className="form-control"
              placeholder="Key"
              value={param}
            />
          </div>
          <div className="input-container">
            <input
              name="value"
              type="text"
              className="form-control"
              placeholder={inputParamsValuePlaceHolder}
			  onChange={(e)=>handleChange(e,param)}
              value={inputParamsValue}
            />
          </div>
          <br />
        </div>
      )})}

      {Object.keys(api.inputParams).length > 2 && (
        <div>
          {visibleParams < Object.keys(api.inputParams).length ? (
        <div className="showmoreBtn"><button onClick={showMore}>Add More</button></div>
          ) : (
            <div className="showmoreBtn"><button onClick={showLess}>Show Less</button></div>
          )}
        </div>
      )}

    </div>
	<div className="parameters-container outlineborder1">
	<label id="customlabel">Path parameter</label>
	  {Object.keys(api?.PathParams)?.map((param, idx) =>{
		const outParamsValue = (payload && payload.PathParams && payload.PathParams[param]) 
		? payload.PathParams[param]:""
const outParamsValuePlaceHolder = (api && api.PathParams && api.PathParams[param])?api.PathParams[param]:""
console.log(api,api.PathParams,"oven")
console.log(param,"dilbar")
		return (
		
        <div
          className={`form-group`}
          key={idx}
        >
          <div className="input-container">
            <input
              name="key"
              type="text"
              className="form-control"
              placeholder="Key"
              value={param}
            />
          </div>
          <div className="input-container">
            <input
              name="value"
              type="text"
              className="form-control"
              placeholder= {outParamsValuePlaceHolder}
			  onChange={(e)=>handleOutputparamsChange(e,param)}
              value={outParamsValue}
            />
          </div>
          <br />
        </div>
      )})}
	</div>

	<div className="parameters-container outlineborder1">
      <label id="customlabel">Body</label>
	  {Object.keys(api?.body)?.map((param, idx) =>{

const bodyValue = (payload && payload.body && payload.body[param]) 
? (typeof payload.body[param] === "object" &&!Array.isArray(payload.body[param]) ? JSON.stringify(payload.body[param]) : payload.body[param]):""
const bodyValuePlaceHolder = (api && api.body && api.body[param]) ? (typeof api.body[param] === "object" &&!Array.isArray(api.body[param]) ? JSON.stringify(api.body[param]) : api.body[param]) : ""

console.log(bodyValuePlaceHolder,"htmlinput")
// const bodyValue = (payload && payload.body && payload.body[param]) 
// ? payload.body[param] 
// : (api && api.body && api.body[param]);

console.log(param,"dilbar")
		return (
		
        <div
          className={`form-group`}
          key={idx}
        >
          <div className="input-container">
            <input
              name="key"
              type="text"
              className="form-control"
              placeholder="Key"
              value={param}
            />
          </div>
          <div className="input-container">
			
			{
			
			 Array.isArray(bodyValuePlaceHolder)?(   
			 <AutocompleteInput
				options={bodyValuePlaceHolder}
				value={bodyValue}
				onChange={(selectedValue) =>
				  handleBodyChange(selectedValue,param)
				}
			  />):
            (param=='query'?<textarea
			name="value"
		  //   type="text"
		  rows={5}
			className="form-control"
			placeholder={bodyValuePlaceHolder}
			onChange={(e)=>handleBodyChange(e.target.value,param)}
			value={bodyValue}
		  />:<input
		  name="value"
		  type="text"
		  className="form-control"
		  placeholder={bodyValuePlaceHolder}
		  onChange={(e)=>handleBodyChange(e.target.value,param)}
		  value={bodyValue}
		/>)}
          </div>
          <br />
        </div>
      )})}
    </div>

			<div className={api.selectedOutputParams.length>0 ? "parameters-container outlineborder1" : "parameters-container"}>


				{api.selectedOutputParams?.map((param, idx) => (
					<>
						<div className="form-group" key={idx}>
							<div className="input-container">
								<label id="customlabel" htmlFor="output-parameter">
									Output Parameter
								</label>
								<div className="output-parameter-flex">
									<span className="param-name">
										{param.toUpperCase()}
									</span>
									<div className="input-container-index">
										<label htmlFor="output-parameter">
											<div class="toggle-container">
												<label class="switch">
													<input
														type="checkbox"
														class="switch-input"
													/>
													<i class="icon-play"></i>
													<span class="switch-label"></span>
													<span class="switch-handle"></span>
												</label>
												Index on this Parameter
											</div>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="input-container">
								<label htmlFor="analytic-tag">
									Analytics Tags
								</label>
								<select
									id="analytic-tag"
									name="tag"
									className="form-control"
									onChange={(e)=>{
										handleTagChange(e.target.value,param)
										}}
								> 
									{tags.map((item, idx) => (
										<option selected={ (payload&&payload.outputParamsTag&&payload.outputParamsTag[param]&&payload.outputParamsTag[param] == item)?true:false} value={item} key={idx}>
											        {item}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="form-group">
							<div className="key-container">
								<label>Index Properties</label>

								<div className="input-key-container">
									<span className="input-key-container-radio">
										<input
											type="radio"
											value='primary'
											checked={(payload&&payload.indexes&&payload.indexes[param]=="primary")?true:false}
											onChange={(e)=>{
												handleIndexChange("primary",param)
												}}
											name={
												api.name +
												"setup_config_key_prop_" +
												idx
											}
											id={
												api.name +
												"setup_config_key_prop_" +
												idx +
												"_primary"
											}
										/>{" "}
										<label
											htmlFor={
												api.name +
												"setup_config_key_prop_" +
												idx +
												"_primary"
											}
										>
											PRIMARY
										</label>
									</span>
									<span className="input-key-container-radio">
										<input
										    value="secondary"
											checked={(payload&&payload.indexes&&payload.indexes[param]=="secondary")?true:false}
										    onChange={(e)=>{
											handleIndexChange("secondary",param)
											}}
											primary="secondary"
											type="radio"
											name={
												api.name +
												"setup_config_key_prop_" +
												idx
											}
											id={
												api.name +
												"setup_config_key_prop_" +
												idx +
												"_secondary"
											}
										/>{" "}
										<label
											htmlFor={
												api.name +
												"setup_config_key_prop_" +
												idx +
												"_secondary"
											}
										>
											SECONDARY
										</label>
									</span>
									<span className="input-key-container-radio">
										<input
										  checked={(payload&&payload.indexes&&payload.indexes[param]=="none")?true:false}
										  value="none"
										  onChange={(e)=>{
											handleIndexChange("none",param)
											}}
											type="radio"
											name={
												api.name +
												"setup_config_key_prop_" +
												idx
											}
											id={
												api.name +
												"setup_config_key_prop_" +
												idx +
												"_none"
											}
										/>{" "}
										<label
											htmlFor={
												api.name +
												"setup_config_key_prop_" +
												idx +
												"_none"
											}
										>
											NONE
										</label>
									</span>
									{/* <span
										className={`tag ${
											param.tag === "PRIMARY"
												? "tag-selected"
												: ""
										}`}
										onClick={() =>
											handleTagClick(param, "PRIMARY")
										}
									>
										Primary
									</span>
									<span
										className={`tag ${
											param.tag === "SECONDARY"
												? "tag-selected"
												: ""
										}`}
										onClick={() =>
											handleTagClick(param, "SECONDARY")
										}
									>
										Secondary
									</span>
									<span
										className={`tag ${
											param.tag === "NONE"
												? "tag-selected"
												: ""
										}`}
										onClick={() =>
											handleTagClick(param, "NONE")
										}
									>
										None
									</span> */}
								</div>
							</div>
						</div>
					</>
				))}
				{/* <div className="param-btn-container">
					<button
						className="param-btn"
						onClick={handleOutputParameterAddition}
					>
						<img src={plusImage} alt="" />
						Add Parameter
					</button>
				</div> */}
			</div>



		</div>
	);
};

export default SetupFormCard;