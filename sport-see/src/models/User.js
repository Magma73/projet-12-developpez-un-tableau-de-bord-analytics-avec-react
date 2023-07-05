/**
 * class User - data modeling
 */
export default class User {
  /**
   * Recuperate trip data
   * @param {object} data - The data value
   */
  constructor(data) {
    this._id = data.id
    this._firstName = data.userInfos.firstName
    this._lastName = data.userInfos.lastName
    this._age = data.userInfos.age
    this._todayScore = data.todayScore
    this._keyData = data.keyData
    this._calorieCount = data.keyData.calorieCount
    this._proteinCount = data.keyData.proteinCount
    this._carbohydrateCount = data.keyData.carbohydrateCount
    this._lipidCount = data.keyData.lipidCount
  }

  /**
   * Get the id value.
   * @return {number} The _id value.
   */
  get id() {
    return this._id
  }

  /**
   * Get the firstName value.
   * @return {string} The _firstName value.
   */
  get firstName() {
    return this._firstName
  }

  /**
   * Get the lastName value.
   * @return {string} The _lastName  value.
   */
  get lastName() {
    return this._lastName
  }

  /**
   * Get the age value.
   * @return {number} The _age value.
   */
  get age() {
    return this._age
  }
  /**
   * Get the todayScore value.
   * @return {number} The _todayScore value.
   */
  get todayScore() {
    return this._todayScore * 100
  }
  /**
   * Get the keyData value.
   * @return {object} The _keyData value.
   */
  get keyData() {
    return this._keyData
  }
  /**
   * Get the calorieCount value.
   * @return {number} The _calorieCount value.
   */
  get calorieCount() {
    const calorieCount = this._calorieCount / 1000
    return calorieCount.toLocaleString('fr-FR', { minimumFractionDigits: 3, maximumFractionDigits: 3 })
  }

  /**
   * Get the proteinCount value.
   * @return {number} The _proteinCount value.
   */
  get proteinCount() {
    return this._proteinCount
  }
  /**
   * Get the carbohydrateCount value.
   * @return {number} The _carbohydrateCount value.
   */
  get carbohydrateCount() {
    return this._carbohydrateCount
  }
  /**
   * Get the lipidCount value.
   * @return {number} The _lipidCount value.
   */
  get lipidCount() {
    return this._lipidCount
  }
}
