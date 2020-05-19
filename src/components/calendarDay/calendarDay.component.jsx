//Libraries
import React from "react";
import moment from "moment";
import "moment/locale/pt-br";

//Components
import { MonthSelector } from "../monthSelector/monthSelector.component";

//Styles
import "./calendarDay.styles.scss";
import "bootstrap/dist/css/bootstrap.css";

class CalendarTask extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMonth: moment(),
    };
  }

  componentWillMount() {
    moment.locale("pt-br");
  }

  onMonthChange = (e) => {
    this.setState({ currentMonth: moment().month(e.target.value) });
  };

  createCalendar() {
    //Variables
    const startWeekDay = moment(this.state.currentMonth)
      .startOf("month")
      .format("d");
    const startDate = moment(
      moment(this.state.currentMonth).startOf("month")
    ).subtract(startWeekDay, "days");

    //Calendar Days
    let calendarWeeks = [];
    let calendarDays = [];

    calendarDays.push(moment(startDate).add(0, "d"));
    for (let i = 1; i <= 42; i++) {
      if (i % 7 == 0 && i != 0) {
        calendarWeeks.push(calendarDays);
        calendarDays = [];
      }
      calendarDays.push(moment(startDate).add(i, "d"));
    }

    return calendarWeeks;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row header">
            <div className="col">
              <MonthSelector
                currentMonth={this.state.currentMonth.format("M")}
                onMonthChange={this.onMonthChange}
              />
            </div>
          </div>
          <div className="row header">
            {moment.weekdaysShort().map((weekday) => (
              <div key={weekday.id} className="col">
                {weekday.toUpperCase()}
              </div>
            ))}
          </div>
          {this.createCalendar().map((weeks) => (
            <div className="row">
              {weeks.map((calendarDate) => (
                <div className="col item">
                  <div
                    className={
                      moment(calendarDate).format("M") ==
                      this.state.currentMonth.format("M")
                        ? "row item-header"
                        : "row item-header-out"
                    }
                  >
                    <div className="col item-col">
                      <div className="col-month">
                        {moment(calendarDate).format("MMM").toUpperCase()}
                      </div>
                      <div className="col-day">
                        {moment(calendarDate).format("DD")}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      {moment(calendarDate).format("DD") == "15" ? "OK" : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CalendarTask;
