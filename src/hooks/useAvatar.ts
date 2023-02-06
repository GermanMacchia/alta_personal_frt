import { useQuery } from '@tanstack/react-query'
import { getAvatarByID } from '../api/apiAvatar'

export const useAvatar = (id: string) => {
  const avatarQuery = useQuery(['avatar', id], () => getAvatarByID(id), {
    refetchOnMount: false,
  })

  return {
    avatar: avatarQuery.data?.data[0],
    isLoading: avatarQuery.isLoading,
  }
}
