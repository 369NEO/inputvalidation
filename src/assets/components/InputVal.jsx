import React, { useState, useEffect } from 'react';

// This is like a recipe for creating the special input box.
const ValidatedInput = ({ validationFunction, errorMessage }) => {
    // This creates a container to store what the user types in the box.
    const [value, setValue] = useState('');
    // This keeps track of whether what the user typed is valid or not.
    const [isValid, setIsValid] = useState(true);
    
    // This is like a set of instructions that run whenever what the user types changes.
    useEffect(() => {
      // It uses the "validationFunction" (like a rule) to check if the input is valid.
      setIsValid(validationFunction(value));
    }, [value, validationFunction]);
   
    // This part displays the input box and the error message (if there is one).
    return (
      <div>
        <input
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} // Update the container when the user types.
          className={isValid ? '' : 'error'} // Add a special style if the input is not valid.
        />
        {!isValid && <p className="error-message">{errorMessage}</p>} {/* Show the error message if the input is not valid. */}
      </div>
    );
  };

  export default ValidatedInput;