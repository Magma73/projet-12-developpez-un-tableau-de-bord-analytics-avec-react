import axios from 'axios'
import { USER_MAIN_DATA } from '../__mocks__/mockData'
import { USER_ACTIVITY } from '../__mocks__/mockData'
import { USER_AVERAGE_SESSIONS } from '../__mocks__/mockData'
import { USER_PERFORMANCE } from '../__mocks__/mockData'

const API_URL = 'http://localhost:3000/user/'

const getUserMainData = async (userId) => {
  try {
    const { data } = await axios.get(API_URL + userId)
    console.log('Données API : ', data)
    return data.data
  } catch (error) {
    console.log(error.code)
    if (error.code === 'ERR_NETWORK') {
      console.log('mockés')
      const mockedDatas = USER_MAIN_DATA.find((data) => data.id === Number(userId))
      console.log(mockedDatas)
      return mockedDatas
    } else {
      console.log(error)
    }
  }
}

const getUserActivity = async (userId) => {
  try {
    const { data } = await axios.get(API_URL + userId + '/activity')
    console.log('Données API : ', data)
    return data.data
  } catch (error) {
    console.log(error.code)
    if (error.code === 'ERR_NETWORK') {
      console.log('mockés')
      const mockedDatas = USER_ACTIVITY.find((data) => data.userId === Number(userId))
      console.log(mockedDatas)
      return mockedDatas
    } else {
      console.log(error)
    }
  }
}

const getUserAverageSessions = async (userId) => {
  try {
    const { data } = await axios.get(API_URL + userId + '/average-sessions')
    console.log('Données API : ', data)
    return data.data
  } catch (error) {
    console.log(error.code)
    if (error.code === 'ERR_NETWORK') {
      console.log('mockés')
      const mockedDatas = USER_AVERAGE_SESSIONS.find((data) => data.userId === Number(userId))
      console.log(mockedDatas)
      return mockedDatas
    } else {
      console.log(error)
    }
  }
}

const getUserPerformance = async (userId) => {
  try {
    const { data } = await axios.get(API_URL + userId + '/performance')
    console.log('Données API : ', data)
    return data.data
  } catch (error) {
    console.log(error.code)
    if (error.code === 'ERR_NETWORK') {
      console.log('mockés')
      const mockedDatas = USER_PERFORMANCE.find((data) => data.userId === Number(userId))
      console.log(mockedDatas)
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
