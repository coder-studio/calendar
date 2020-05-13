//Libraries
import React from "react";

//Styles
import "./calendar.styles.scss";
import "bootstrap/dist/css/bootstrap.css";

class Calendar extends React.Component {
  constructor() {
    super();

    this.state = {
      calMonth: 1,
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row header">
            <div className="col">Seg</div>
            <div className="col">Ter</div>
            <div className="col">Qua</div>
            <div className="col">Qui</div>
            <div className="col">Sex</div>
            <div className="col">Sab</div>
            <div className="col">Dom</div>
          </div>
          <div className="row">
            <div className="col item">
              jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
              <div className="day">01</div>
            </div>
            <div className="col item">Dia 2 </div>
            <div className="col item">Dia 3 </div>
            <div className="col item">Dia 4 </div>
            <div className="col item">
              <div className="task">
                Compromisso sdadsa sdasd asd adasdas dasd asd asd asd asdasda
                sda sdasd asdasd
              </div>
              teste
            </div>
            <div className="col item">Dia 6 </div>
            <div className="col item">Dia 7 </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
