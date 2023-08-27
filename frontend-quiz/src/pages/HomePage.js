import React, { useState } from "react";
import FormComponent from "../components/FormComponent";
import PreviewComponent from "../components/PreviewComponent";

function HomePage() {
  const [questionData, setQuestionData] = useState({
    question: "",
    options: [],
    correctOption: -1,
  });

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <FormComponent onFormChange={setQuestionData} />
      </div>
      <div className="w-1/2 p-4">
        <PreviewComponent {...questionData} />
      </div>
    </div>
  );
}

export default HomePage;
