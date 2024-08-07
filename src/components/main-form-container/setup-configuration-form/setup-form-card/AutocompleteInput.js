import { useEffect, useState } from "react";
import "./AutocompleteInput.css"

export default function AutocompleteInput({ value,options, onChange }) {
    console.log(options,value,onChange,"autocomplete")
    const [inputValue, setInputValue] = useState(value);

    const [showOptions, setShowOptions] = useState(false);
  useEffect(()=>{
    onChange(inputValue)
  },[inputValue])
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
      setShowOptions(value !== ''); // Show options only if there's some input
    };
  
    const handleOptionClick = (option) => {
      setInputValue(option.value); // Use the name property of the selected option
      setShowOptions(false);
      onChange(option.value); // Call the onChange callback with the selected option's value
    };
  
    return (
      <div className="autocomplete">
        <textarea
          type="text"
          value={inputValue}
          rows={4}
          className="form-control"
          onChange={handleInputChange}
          onFocus={() => setShowOptions(true)} // Hide options on blur
        />
        { showOptions && (
          <ul className="autocomplete-options">
            {options
            //   .filter(option => option.name.toLowerCase().includes(inputValue.toLowerCase()))
              .map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)}>
                  {option.name}
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  }
  