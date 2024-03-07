import uuid from 'react-native-uuid'


export const useHelper = () => {
  const getUuid = () => uuid.v4().toString()


  return {
    getUuid
  }
}