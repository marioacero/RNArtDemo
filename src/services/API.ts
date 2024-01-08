import apiClient from './apiClient';
import {EventsApiResponse} from '@models/APITypes';

export const API = {
  fetchEvents: async () => {
    const result = await apiClient.get<EventsApiResponse>('events?limit=20');
    return result.data;
  },
};
