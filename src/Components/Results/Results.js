import "./Results.css";

function Results() {
  return (
    <div style={{ backgroundColor: "#093147", paddingTop: "50px" }} id="results">
      <h2 className="title-results">Final Team Rankings</h2>
      <div className="container container--xs">
        <div className="row align-items-center">
          <div className="wrapper">
            <div>
              {data.map((item, i) => (
                <div className="result-item">
                  {(i == 20) ? <p>{i} : {item}</p> : <p>{i + 1} : {item}</p>}

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
  "GAP_DECODE1",
  "teamBHY_DECODE1",
  "reachout_coding1",
  "Rule_Breakers",
  "NoName_DECODE1",
  "Dec0ders_DECODE1",
  "Heisen_DECODE1",
  "XHackers_DECODE1",
  "Etcetera_DECODE1",
  "codeJitsu_DECODE1",
  "FbLinker_DECODE1",
  "Kyojin_MX6",
  "CodeEros_DECODE1",
  "BiNaRyC_DECODE1",
  "3Noobs_DECODE1",
  "Amateur_DECODE1",
  "Ravana_DECODE1",
  "DragonCoders_MX6",
  "Team_Viki_DECODE1",
  "madurangalakbima",
  "blueeagles727",
];

export default Results;
