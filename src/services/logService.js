import * as Sentry from '@sentry/browser';

function init() {
  Sentry.init({dsn: "https://56ad4b516ae94ab29259c0971e44e924@sentry.io/1729582"});
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};