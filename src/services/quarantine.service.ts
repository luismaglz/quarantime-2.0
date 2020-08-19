import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as dayjs from "dayjs";
import { Dayjs } from "dayjs";

@Injectable()
export class QuarantineService {
  protected startDate: BehaviorSubject<Dayjs> = new BehaviorSubject(
    dayjs("03-17-2020")
  );

  constructor() {}

  setStartDate(date: Dayjs) {
    this.startDate.next(date);
  }
}
