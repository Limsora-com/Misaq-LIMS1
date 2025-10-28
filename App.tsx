
import React, { useState } from 'react';
import { FirebaseProvider } from './services/firebaseService';
import TabBar from './components/layout/TabBar';
import DailyActivityReport from './components/daily-activity/DailyActivityReport';
import SterilityLog from './components/sterility-log/SterilityLog';
import LabChemicalLedger from './components/lab-ledger/LabChemicalLedger';
import LabelGenerator from './components/label-generator/LabelGenerator';
import StabilitySuite from './components/stability-suite/StabilitySuite';
import ConnectionStatus from './components/layout/ConnectionStatus';

export type TabId = 'daily-activity' | 'sterility-log' | 'lab-ledger' | 'label-generator' | 'stability';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('daily-activity');

  return React.createElement(
    FirebaseProvider,
    null,
    React.createElement(
      'div',
      { className: 'min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8' },
      React.createElement(
        'div',
        { className: 'max-w-7xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden' },
        React.createElement(TabBar, { activeTab: activeTab, setActiveTab: setActiveTab }),
        React.createElement(
          'div',
          { className: 'p-6 sm:p-8 lg:p-10' },
          activeTab === 'daily-activity' && React.createElement(DailyActivityReport, null),
          activeTab === 'sterility-log' && React.createElement(SterilityLog, null),
          activeTab === 'lab-ledger' && React.createElement(LabChemicalLedger, null),
          activeTab === 'label-generator' && React.createElement(LabelGenerator, null),
          activeTab === 'stability' && React.createElement(StabilitySuite, null)
        )
      )
    ),
    React.createElement(ConnectionStatus, null)
  );
};

export default App;