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
    <div style={{ backgroundColor: "#071330" }}>
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
    question: "What is the starting date?",
    answer: "00-00-2021 ",
  },
  {
    question: "What is the team size?",
    answer: "Between 0-0 members",
  },
  {
    question: "Who can participate?",
    answer: "tttttttttttttttttttttttttt ttttttttttttttttttttttttttttttttt",
  },
  {
    question: "Is there a registration fee?",
    answer: "wwww",
  },
];

export default Faq;
