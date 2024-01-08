import {API} from '@services/API';
import {useQuery} from '@tanstack/react-query';

export const useFetchEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => API.fetchEvents(),
  });
};
