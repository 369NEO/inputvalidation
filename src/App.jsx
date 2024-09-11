import './App.css'
// This line brings in the special input box we created earlier.
import ValidatedInput from './assets/components/InputVal.jsx'
// This is the main function that sets up the webpage.


function App() {
  // This is the rule: it checks if the text is at least 5 characters long.
  const validateLength = (value) => value.length >= 5;
  // This part displays everything on the page.
  return (
    <div> 
      <h1>Validated Input</h1> {/* This is the title of the page. */}
      {/* This is where we use the special input box. */}
      <ValidatedInput 
        validationFunction={validateLength} // We give it the rule to check the length.
        errorMessage="Input is too short (minimum 5 characters)" // This is the message to show if the rule is broken.
      /> 
    </div>
  )
}

export default App
