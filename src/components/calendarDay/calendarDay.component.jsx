//Libraries
import React from "react";

//Styles
import "./calendarDay.styles.scss";
import "bootstrap/dist/css/bootstrap.css";

class CalendarTask extends React.Component {
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
              <div className="row item-header">
                <div className="col item-col">
                  <div className="col-month">MAR</div>
                  <div className="col-day">08</div>
                </div>
              </div>
              <div className="row">
                <div className="col">100000000000000</div>
              </div>
            </div>

            <div className="col item">
              <div className="row item-header">
                <div className="col item-col">
                  <div className="col-month">MAR</div>
                  <div className="col-day">09</div>
                </div>
              </div>
              <div className="row">
                <div className="col">1dddddddddddddddddddddddddd</div>
              </div>
            </div>

            <div className="col item">Dia 3</div>
            <div className="col item">Dia 4</div>
            <div className="col item">Dia 5</div>
            <div className="col item">Dia 6</div>
            <div className="col item">Dia 7</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarTask;
