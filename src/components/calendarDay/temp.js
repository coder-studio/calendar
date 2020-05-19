{this.createCalendar().map((calendarDay, id) => (            
    <div className="col item">
      <div className="row item-header">
        <div className="col item-col">
          <div className="col-month">
            {moment(calendarDay).format("MMM").toUpperCase()}
          </div>
          <div className="col-day">
            {moment(calendarDay).format("DD")}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {moment(calendarDay).format("DD") == "15" ? "OK" : ""}
          {id}
        </div>
      </div>
    </div>
  </div>
}
))}