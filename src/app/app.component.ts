import { Component } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Finding specific dates in given date range & count";
  start_date = moment();
  end_date = moment(this.start_date).add(3, "months");
  total_days = this.end_date.diff(this.start_date, "days");
  selected_day = "31,2";
  day_array = [];
  myday = this.start_date;
  count = 0;

  constructor() {
    this.selected_day.split(",").forEach(day => {
      let days = [
        moment(this.myday)
          .add(0, "months")
          .set("date", day),
        moment(this.myday)
          .add(1, "months")
          .set("date", day),
        moment(this.myday)
          .add(2, "months")
          .set("date", day)
      ];
      days.forEach(item => {
        if (item.get("date") == day) {
          console.log(item.format("ll"));
          this.count++;
          this.day_array.push(item.format("YYYY-MM-DD"));
        }
      });
    });
  }
}
