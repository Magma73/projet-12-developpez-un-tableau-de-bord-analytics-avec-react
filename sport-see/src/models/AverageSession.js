/**
 * class AverageSession - data modeling
 */
export default class AverageSession {
  /**
   * Recuperate trip data
   * @param {object} data - The data value
   */
  constructor(data) {
    this._day = data.day
    this._sessionLength = data.sessionLength
  }

  /**
   * Get the day value.
   * @return {string} The _day value.
   */
  get day() {
    const frenchDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    return frenchDays[this._day - 1]
  }

  /**
   * Get the sessionLength value.
   * @return {number} The _sessionLength   value.
   */
  get sessionLength() {
    return this._sessionLength
  }
}
