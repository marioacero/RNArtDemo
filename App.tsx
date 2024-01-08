import RootNavigator from '@navigation/RootNavigator';
import store from '@state/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
