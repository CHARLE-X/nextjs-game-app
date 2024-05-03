"use client";

import React, { useState, useEffect } from "react";
import Question from "./question";
import styles from './page.module.css';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}


const Game: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([] as Question[]);

  const questions: Question[] = [
    {
      question: "Who won the 2010 World cup?",
      options: [
       "(A). Italy",
       "(B). England", 
       "(C). Japan", 
       "(D). Spain"
        ],
      correctAnswer: "(D). Spain",
    },
    {
      question:
        "Which player scored the fastest hat-trick in the Premier League?",
      options: [
        "(A).Sadio Mane",
        "(B). Cristiano Ronaldo",
        "(C).Hazard",
        "(D). Salah",
      ],
      correctAnswer: "(A).Sadio Mane",
    },
    {
      question:
        "Which player, with 653 games, has made the most Premier League appearances?",
      options: [
        "(A).Pep Guardiola",
        "(B).Steven Gerrard",
        "(C).Gareth Barry",
        "(D).Ashly Cole",
      ],
      correctAnswer: "(C).Gareth Barry",
    },
    {
      question:
        "With 260 goals, who is the Premier Leagues all-time top scorer?",
      options: [
      "(A).Alan Shearer", 
      "(B).Ryan Giggs",
      "(C).Berlin",
      "(D).Madrid"
        ],
      correctAnswer: "(A).Alan Shearer",
    },
    {
      question: "Which country has won the most World Cups?",
      options: [
        "(A).Spain",
        "(B).Argentina",
        "(C).Brazil", 
        "(D).England"
        ],
      correctAnswer: "(C).Brazil",
    },
    {
      question:
        "Who won the Man of the Match award in the 2014 World Cup final?",
      options: [
        "(A).Mario Goetze",
        "(B).Sergio Aguero",
        "(C).Lionel Messi",
        "(D).Bastian Schweinsteiger",
      ],
      correctAnswer: "(A).Mario Goetze",
    },
    {
      question:
        "Which footballer holds the record for the highest number of assists in the Premier League?",
      options: [
        "(A).Cesc Fabregas",
        "(B).Ryan Giggs",
        "(C).Frank Lampard",
        "(D).Paul Scholes",
      ],
      correctAnswer: "(B).Ryan Giggs",
    },
    {
      question:
        "Jamie Vardy was signed by Leicester from which non-league side?",
      options: [
        "(A).Ketting Town",
        "(B).Alfreton Town",
        "(C)Grimsby Town",
        "(D)Fleetwood Town",
      ],
      correctAnswer: "(D)Fleetwood Town",
    },
    {
      question:
        "David Beckham became president of which newly founded club in 2018?",
      options: [
        "(A).Bergamo Calcio",
        "(B).Inter Miami",
        "(C).West London Blue",
        "(D).The Potteries",
      ],
      correctAnswer: "(B).Inter Miami",
    },
    {
      question: "Who is the current top scorer in the UEFA Champions League?",
      options: [
        "(A).Alan Shearer",
        "(B).Thierry Henry",
        "(C).Cristiano Ronaldo",
        "(D).Robert Lewandowski",
      ],
      correctAnswer: "(C).Cristiano Ronaldo",
    },
    {
      question:
        "Which team has won the African Cup of Nations a record 7 times?",
      options: [
      "(A).Cameroon",
      "(B).Egypt", 
      "(C).Senegal", 
      "(D).Ghana"
        ],
      correctAnswer: "(B).Egypt",
    },
    {
      question:
        "With 202 clean sheets, which goalkeeper has the best record in the Premier League?",
      options: [
      "(A).Onana",
      "(B).Leno", 
      "(C).Petr Cech", 
      "(D).David De Gea"
        ],
      correctAnswer: "(C).Petr Cech",
    },
    {
      question:
        "Liverpool have won six Champions Leagues and Manchester United have won three, but who are England's third most successful team in the competition with two titles?",
      options: [
      "(A).Birmingham city",
      "(B).Nottingham Forest", 
      "(C).QPR", 
      "(D).Aston Villa"
        ],
      correctAnswer: "(B).Nottingham Forest",
    },
    // Add more questions...
  ];

  // Function to shuffle questions 
  const shuffleArray = (array: Question[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    // Shuffle the array of questions 
    setShuffledQuestions(shuffleArray([...questions]));
  }, []);

  const handleSelectOption = (selectedOption: string) => {
    const currentQuestion = shuffledQuestions[questionIndex];
    setScore(prevScore => selectedOption === currentQuestion.correctAnswer ? prevScore + 1 : prevScore);
  setQuestionIndex(questionIndex + 1);
   
  };
  const result = score < 10 ? "OMO YOU NO SABI BALL" : "AGBA BALLER";

  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(/images/1051881.jpg)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
    <div className="question-container">
      {questionIndex < shuffledQuestions.length ? (
       <div className="options">
         <Question
          question={shuffledQuestions[questionIndex].question}
          options={shuffledQuestions[questionIndex].options}
          correctAnswer={shuffledQuestions[questionIndex].correctAnswer}
          onSelectOption={handleSelectOption}
        />
        </div>
      ) : (
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">GAME OVER!</h1>
          <h2 className="text-5xl font-bold">Your final score is: {score}</h2>
      <h1 className="text-5xl font-bold">{result}</h1>
      <h1 className="text-5xl font-bold">
          <a href="/" className={styles.restartLink}>Click to Restart</a>
          </h1>
    </div>
  </div>
            </div>
      )}
    </div>
    </div>
  );
};

export default Game;
