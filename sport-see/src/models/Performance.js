import PerformanceData from './PerformanceData'
/**
 * class Performance - data modeling
 */
export default class Performance {
  /**
   * Recuperate performance data
   * @param {object} data - The data value
   */
  constructor(data) {
    this._kindMapping = {
      1: 'Cardio',
      2: 'Énergie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    }
    this._data = data.data.map((element) => new PerformanceData(element))
  }

  /**
   * Get the kind value.
   * @return {object} The _kind value.
   */
  get kind() {
    return this._kindMapping
  }

  /**
   * Get the data value.
   * @return {object} The _data value.
   */
  get data() {
    return this._data
  }
}
