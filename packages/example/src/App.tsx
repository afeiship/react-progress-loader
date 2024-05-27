import ReactProgressLoader from '@jswork/react-progress-loader/src';
import './index.css';
import '@jswork/react-progress-loader/src/style.scss';
import logoSpin from './assets/logo-spin.gif';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <h1>react-progress-loader</h1>
      <div className="relative overflow-hidden h-80 bg-gray-200 my-4">
        <ReactProgressLoader
          visible={visible}
          start={'5%'}
          end={'30%'}
          className="border border-solid border-gray-300 bg-gray-50 px-10 py-2 text-sm text-white rounded-md"
        >
          <div className="fcc y">
            <img src={logoSpin} alt="logo" className="w-10 h-10" />
            <p className="text-center text-gray-400">Loading...</p>
          </div>
        </ReactProgressLoader>
        <div className="overflow-scroll absolute p-2 inset-0 text-gray-600 *:mb-4 debug-red border-slate-500 border-2 rounded-md">
          <p
            id="2O5RJF6A">第二节开始后两队你来我往，场上比分交替增加，麦克丹尼尔斯底角投中三分，半场前6分50秒时森林狼队以38-43落后。琼斯立即回应三分率队连拿7分，独行侠队领先12分。爱德华兹拿下3分，欧文三分回应，唐斯连续两次突破得手，森林狼队追至47-55。东契奇三分还击，戈贝尔连拿3分，半场结束时森林狼队以52-60落后8分。</p>
          <p
            id="2O5RJF6B">独行侠队的东契奇上半场得到15分，欧文得到14分，琼斯得到11分；森林狼队的爱德华兹得到12分、6个篮板和5次助攻，麦克丹尼尔斯得到12分。</p>
          <p
            id="2O5RJF6C">两支球队在第三节开始后继续拉锯，独行侠队牢牢保持领先，欧文打3分成功，鲍威尔两罚全中，本节进行了4分钟时他们以74-64领先10分。爱德华兹上演突破暴扣，他进攻开火连拿8分，麦克丹尼尔斯也投中三分，他们带领球队打出13-1的反击高潮，第三节还剩下3分50秒时森林狼队以79-77反超。东契奇四罚三中，他率队回敬6分重新领跑。唐斯打3分，里德三分中的，他们率队打出8-2的小高潮再次反超2分，哈迪突破打进，三节结束时两队战成87平。</p>
          <p
            id="2O5RJF6D">欧文突破开启第四节，康利和安德森回敬5分反超。欧文和东契奇联手5分重新领跑，康利和里德轮流得分，森林狼队以98-97领先1分。欧文罚球追平，之后两队连续战平，104平后华盛顿三分命中，里德两罚一中，独行侠队以107-105领先。康利抢投三分不中，东契奇后仰跳投命中，独行侠队领先4分。</p>
          <p
            id="2O5RJF6E">唐斯三分不中，欧文中投得手，第四节还有1分5秒时独行侠队以111-105领先。康利突破被帽，加福德空接扣篮得手，同时造成戈贝尔犯规，加罚命中，独行侠队以114-105领先。唐斯三分不中，欧文被犯规两罚全中，独行侠队以116-105领先。爱德华兹打进安慰球，森林狼队以107-116落败。</p>
          <p id="2O5RJF6F">森林狼队首发阵容：康利、爱德华兹、麦克丹尼尔斯、唐斯、戈贝尔</p><p
          id="2O5RJF6G">独行侠队首发阵容：东契奇、欧文、琼斯、华盛顿、加福德</p><p>作者：小柳</p>
        </div>
      </div>
      <footer className="x-2">
        <button className="btn btn-primary btn-sm" onClick={() => setVisible(true)}>Show</button>
        <button className="btn btn-secondary btn-sm" onClick={() => setVisible(false)}>Hide</button>
      </footer>
    </div>
  );
}

export default App;
