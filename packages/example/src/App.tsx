import ReactProgressLoader from '@jswork/react-progress-loader/src';
import './index.css';
import '@jswork/react-progress-loader/src/style.scss';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <h1>react-progress-loader</h1>
      <div className="relative overflow-hidden size-40 bg-gray-200 my-4">
        <ReactProgressLoader visible={visible} className="layout-abs-center-x">
          <span className="ch bg-gray-300 p-2 rounded-full">Loading...</span>
        </ReactProgressLoader>
      </div>
      <footer className="x-2">
        <button className="btn btn-primary btn-sm" onClick={() => setVisible(true)}>Show</button>
        <button className="btn btn-secondary btn-sm" onClick={() => setVisible(false)}>Hide</button>
      </footer>
    </div>
  );
}

export default App;
