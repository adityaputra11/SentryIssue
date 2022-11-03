import * as Sentry from '@sentry/react-native';

export const fakeFetch = () => {
  /** This is only example that we have custom span to extend transaction sentry but the real case more complicated because we use action redux */
  const transaction = Sentry.getCurrentHub()?.getScope()?.getTransaction();
  const timeStamp = new Date().getTime() / 1000;
  const span = transaction?.startChild({
    description: 'Testing',
    op: 'fake-fetch',
    startTimestamp: timeStamp,
  });

  setTimeout(() => {
    span?.finish();
  }, 10000);
};
