/**
 * class Session - data modeling
 */
export default class Session {
  /**
   * Recuperate trip data
   * @param {object} data - The data value
   */
  constructor(data) {
    this._day = data.day
    this._kilogram = data.kilogram
    this._calories = data.calories
  }

  /**
   * Get the day value.
   * @return {date} The _day value.
   */
  get day() {
    const date = new Date(this._day)
    const day = date.getDate()
    return day
  }

  /**
   * Get the kilogram value.
   * @return {string} The _kilogram   value.
   */
  get kilogram() {
    return this._kilogram
  }

  /**
   * Get the calories value.
   * @return {number} The _caloriesvalue.
   */
  get calories() {
    return this._calories
  }
}
