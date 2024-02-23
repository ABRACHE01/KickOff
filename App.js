import Routes from './src/navigation/Routes'; 
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
    <Routes/>
    </ApplicationProvider>
    </Provider>
  );
}


