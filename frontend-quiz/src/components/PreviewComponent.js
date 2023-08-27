import React from "react";

function PreviewComponent({ question, options }) {
  return (
    <div className="p-4 border border-gray-300">
      <h2 className="font-bold mb-4">Preview</h2>
      <p>{question}</p>
      <ul>
        {options.map((opt, index) => (
          <li key={index} className={opt.correct ? "text-green-500" : ""}>
            {opt.option} {opt.correct ? "(Correct)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviewComponent;
