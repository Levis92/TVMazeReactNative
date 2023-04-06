import React, {PropsWithChildren} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient();

type AllTheProvidersProps = PropsWithChildren;

const AllTheProviders = ({children}: AllTheProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>{children}</NavigationContainer>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: Parameters<typeof render>[0],
  options?: Parameters<typeof render>[1],
) => render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
