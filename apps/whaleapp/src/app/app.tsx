// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { SharedUiComponents } from '@tusklabs/shared/ui-components';

export function App() {
  return (
    <div>
      <NxWelcome title="whaleapp" />
      <SharedUiComponents />
    </div>
  );
}

export default App;
