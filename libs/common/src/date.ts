import moment = require('moment');

export class DateUtils {
  static localDate(): Date {
    return moment()
      .utc()
      .toDate();
  }
}
