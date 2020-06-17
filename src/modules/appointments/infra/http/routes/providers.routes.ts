import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvalabilityController from '../controllers/ProviderMonthAvalabilityController';
import ProviderDayAvalabilityController from '../controllers/ProviderDayAvalabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvalabilityController = new ProviderMonthAvalabilityController();
const providerDayAvalabilityController = new ProviderDayAvalabilityController();

providersRouter.use(ensureAuthenticaded);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvalabilityController.index,
);

providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayAvalabilityController.index,
);

export default providersRouter;
