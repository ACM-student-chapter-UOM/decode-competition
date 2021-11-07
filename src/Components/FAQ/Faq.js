import "./faq1.css";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div style={{ backgroundColor: "#071330" }} id="faq">
      <div className="container container--xs">
        <div className="row align-items-center">
          <div className="wrapper1">
            <div className="accordion1">
              {data.map((item, i) => (
                <div className="item1">
                  <div className="title1" onClick={() => toggle(i)}>
                    <b>{item.question}</b>
                    <FiPlus
                      className={
                        selected === i
                          ? "question-icon rotate"
                          : "question-icon"
                      }
                    />
                  </div>
                  <div
                    className={selected === i ? "content1 show" : "content1"}
                  >
                    <b> {item.answer}</b>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//sample data
const data = [
  {
    question: "How many members for a team can we have?",
    answer: "You can have 3 members per team.",
  },
  {
    question: "Is the competition only for the students of UoM / state universities?",
    answer: "No, this competition is open for any undergraduate studying in Sri Lanka.",
  },
  {
    question: "Can the 3 members of the team be undergraduates of different universities?",
    answer: "No, all the members should be from the same institution.",
  },
  {
    question: "Can I form a team with 2 members or participate individually?",
    answer: "No, you must form a 3 member team.",
  },
  {
    question: "Can we use the personal hackerrank account to submit answers?",
    answer: "The hackerank account name should be the team name.",
  },
  {
    question: "How long is the competition?",
    answer: "The competition is 4 hours long.",
  },
  {
    question: "How can I register a team for the competition?",
    answer: "You can use this link https://forms.gle/AJUK1967Vs3B1E2e7",
  },
  {
    question: "When does the competition take place?",
    answer: "13th November 2021 from 8.00 a.m. to 12.00 p.m. (Duration - 4 hours)",
  },
  {
    question: "Do multiple submissions for the same challenge inflict a penalty?",
    answer: "No",
  },
  {
    question: "Is the submission time taken into account?",
    answer: "Only if two teams have the same score on a particular challenge.",
  },
  {
    question: "Do the challenges have a difficulty rating?",
    answer: "No",
  },
];

export default Faq;
