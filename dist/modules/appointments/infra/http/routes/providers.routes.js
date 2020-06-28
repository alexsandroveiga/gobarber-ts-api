"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ensureAuthenticated = _interopRequireDefault(require(".src/modules/users/infra/http/middlewares/ensureAuthenticated"));

var _ProvidersController = _interopRequireDefault(require("../controllers/ProvidersController"));

var _ProviderMonthAvalabilityController = _interopRequireDefault(require("../controllers/ProviderMonthAvalabilityController"));

var _ProviderDayAvalabilityController = _interopRequireDefault(require("../controllers/ProviderDayAvalabilityController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providersRouter = (0, _express.Router)();
const providersController = new _ProvidersController.default();
const providerMonthAvalabilityController = new _ProviderMonthAvalabilityController.default();
const providerDayAvalabilityController = new _ProviderDayAvalabilityController.default();
providersRouter.use(_ensureAuthenticated.default);
providersRouter.get('/', providersController.index);
providersRouter.get('/:provider_id/month-availability', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    provider_id: _celebrate.Joi.string().uuid().required()
  }
}), providerMonthAvalabilityController.index);
providersRouter.get('/:provider_id/day-availability', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    provider_id: _celebrate.Joi.string().uuid().required()
  }
}), providerDayAvalabilityController.index);
var _default = providersRouter;
exports.default = _default;