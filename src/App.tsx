import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home/Home';
import List from './List/List';
import Detail from './Detail/Detail';

import * as Sentry from '@sentry/react-native';

const dsn = '';
const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();
Sentry.init({
  dsn: dsn,
  release: 'testing-sentry',
  debug: true,
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
      routingInstrumentation,
      idleTimeout: 60000,
    }),
  ],
  tracesSampleRate: 1,
});

const Stack = createNativeStackNavigator();

const App = () => {
  const navigation = React.useRef();

  return (
    <NavigationContainer
      ref={navigation}
      onReady={() => {
        // Register the navigation container with the instrumentation
        routingInstrumentation.registerNavigationContainer(navigation);
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Sentry.wrap(App);
