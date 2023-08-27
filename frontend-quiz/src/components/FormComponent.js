import React, { useState } from "react";
import OptionsComponent from "./OptionsComponent";

function FormComponent({ onFormChange }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
    onFormChange({
      question,
      options: newOptions,
    });
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    onFormChange({
      question: e.target.value,
      options,
    });
  };

  return (
    <div className="p-4 border-r-2">
      <textarea
        className="w-full p-2 mb-4 border rounded"
        placeholder="Enter your question"
        value={question}
        onChange={handleQuestionChange}
      />
      <OptionsComponent options={options} onChange={handleOptionsChange} />
    </div>
  );
}

export default FormComponent;
