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
    // this._kind = data.kind
    this._data = data.data.map((element) => new PerformanceData(element))
  }

  /**
   * Get the kind value.
   * @return {object} The _kind value.
   */
  get kind() {
    return this._kindMapping
    // return Object.keys(this._kind).map((kindNumber) => this._kindMapping[this._kind[kindNumber]])
  }

  /**
   * Get the data value.
   * @return {object} The _data value.
   */
  get data() {
    return this._data
  }
}

// export default class Performance {
//   constructor(data) {
//     this._kind = {
//       1: 'cardio',
//       2: 'energy',
//       3: 'endurance',
//       4: 'strength',
//       5: 'speed',
//       6: 'intensity',
//     }
//     this._data = data.map((element) => ({
//       value: element.value,
//       kind: this._kind[element.kind],
//     }))
//   }

//   get kind() {
//     return this._kind
//   }

//   get data() {
//     return this._data
//   }
// }
