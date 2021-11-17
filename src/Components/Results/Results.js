import "./Results.css";

function Results() {
  return (
    <div style={{ backgroundColor: "#093147", paddingTop: "50px" }} id="results">
      <h2 className="title-results">Final Team Rankings</h2>

      <div >
        <div className="top3">
          {top3Teams.map((team, i) => (
            <div className="team">
              <h4 className="title-team-place">{team.place} Place Winners</h4>
              <h5 className="title-team-name">Team {team.team}</h5>
              <div className="team-members">
                {team.imgs.map((image, i) => (
                  <div className="team-member" >
                    <img src={image} alt="member" className="mem-img"></img>
                    <div>{team.names[i]}</div>
                  </div>

                ))}
              </div>
              <br />
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>



      <div className="container container--xs">
        <h4 className="title-team-place"> Top 20 Teams</h4>
        <div className="row align-items-center">
          <div className="wrapper">
            <div>
              {data.map((item, i) => (
                <div className="result-item">
                  {(i >= 20) ? <p>20 : {item}</p> : <p>{i + 1} : {item}</p>}

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const top3Teams = [
  {
    team: "GAP_DECODE1",
    place: "First",
    imgs: [
      "/images/first/Avishka.jpg",
      "/images/first/pamuditha.jpeg",
      "/images/first/Gayangi.jpeg",
    ],
    names: [
      "Avishka",
      "Pamuditha",
      "Gayangi",
    ]
  },
  {
    team: "teamBHY_DECODE1",
    place: "Second",
    imgs: [
      "/images/second/Hiruna.jpg",
      "/images/second/Yasith.jpg",
      "/images/second/Bashana.jpg",
    ],
    names: [
      "Hiruna",
      "Yasith",
      "Bashana",
    ]
  },
  {
    team: "reachout_coding1",
    place: "Third",
    imgs: [
      "/images/third/Dinindu Thilakarathna.JPG",
      "/images/third/Kavindu Herath.png",
      "/images/third/Praveen Sumanasekara.jpg",
    ],
    names: [
      "Dinindu",
      "Kavindu",
      "Praveen",
    ]
  }
]

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
  "Xcite_DECODE1",
];

export default Results;
