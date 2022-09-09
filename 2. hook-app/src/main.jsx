import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterCustomHook } from './01-useState/CounterCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

ReactDOM.createRoot(document.getElementById('root')).render(<CallbackHook />);
//   <React.StrictMode>
//     {/* <HooksApp />
//     <CounterApp /> */}
//     {/* <CounterCustomHook /> */}
//     {/* <SimpleForm /> */}
//     {/* <FormWithCustomHook /> */}

//   </React.StrictMode>
// );
