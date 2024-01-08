import {Event} from '@models/Event';
import {routes} from './routes';

export type HomeNavigatorType = {
  [routes.Home]: undefined;
  [routes.Details]: {event: Event};
};
