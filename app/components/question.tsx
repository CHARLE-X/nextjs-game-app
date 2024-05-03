import React from 'react'

interface QuestionProps{
  question:string;
  options: string[]; // Make options optional with `?`
  correctAnswer: string;
  onSelectOption: (option: string) => void;
}

const Question: React.FC<QuestionProps> =({ question, options, onSelectOption }) => { 

  return (
    <div>
    <h2>{question}</h2>
    {options && options.length > 0 && (
      options.map((option, index) => (
        <button key={index} onClick={() => onSelectOption(option)}>
          {option}
       </button>
      ))
    )}
  </div>
);
};

export default Question