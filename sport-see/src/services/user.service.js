import axios from 'axios'
import { USER_MAIN_DATA } from '../__mocks__/mockData'
import { USER_ACTIVITY } from '../__mocks__/mockData'
import { USER_AVERAGE_SESSIONS } from '../__mocks__/mockData'
import { USER_PERFORMANCE } from '../__mocks__/mockData'

/**
 * UserService - Handle API calls
 * @module UserService
 */

const API_URL = 'http://localhost:3000/user/'

/**
 * Function getUserMainData - Send User Main Datas using axios api or mocked datas
 * @param {number} userId- The userId
 * @returns {Promise<object>} - User Main Datas
 */

const getUserMainData = async (userId) => {
  try {
    const { data } = await axios.get(`${API_URL}${userId}`)
    return data.data
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      const mockedDatas = USER_MAIN_DATA.find((data) => data.id === Number(userId))
      return mockedDatas
    } else {
      console.log(error)
    }
  }
}

/**
 * Function getUserActivity - Send User Activity Datas using axios api or mocked datas
 * @param {number} userId- The userId
 * @returns {Promise<object>} - User Activity Datas
 */
const getUserActivity = async (userId) => {
  try {
    const { data } = await axios.get(`${API_URL}${userId}/activity`)
    return data.data
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      const mockedDatas = USER_ACTIVITY.find((data) => data.userId === Number(userId))
      return mockedDatas
    } else {
      console.log(error)
    }
  }
}

/**
 * Function getUserAverageSessions - Send User Average Sessions Datas using axios api or mocked datas
 * @param {number} userId- The userId
 * @returns {Promise<object>} - User Average Sessions Datas
 */
const getUserAverageSessions = async (userId) => {
  try {
    const { data } = await axios.get(`${API_URL}${userId}/average-sessions`)
    return data.data
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      const mockedDatas = USER_AVERAGE_SESSIONS.find((data) => data.userId === Number(userId))
      return mockedDatas
    } else {
      console.log(error)
    }
  }
}

/**
 * Function getUserPerformance - Send User Performance Datas using axios api or mocked datas
 * @param {number} userId- The userId
 * @returns {Promise<object>} - User Performance Datas
 */
const getUserPerformance = async (userId) => {
  try {
    const { data } = await axios.get(`${API_URL}${userId}/performance`)
    return data.data
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      const mockedDatas = USER_PERFORMANCE.find((data) => data.userId === Number(userId))
      return mockedDatas
    } else {
      console.log(error)
    }
  }
}

const UserService = {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
}

export default UserService
