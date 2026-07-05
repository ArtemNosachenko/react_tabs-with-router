import { Link, useParams } from 'react-router-dom';
import { tabs } from './Tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            <li data-cy="Tab" className={tabId === 'tab-1' ? 'is-active' : ''}>
              <Link to="/tabs/tab-1">Tab 1</Link>
            </li>
            <li data-cy="Tab" className={tabId === 'tab-2' ? 'is-active' : ''}>
              <Link to="/tabs/tab-2">Tab 2</Link>
            </li>
            <li data-cy="Tab" className={tabId === 'tab-3' ? 'is-active' : ''}>
              <Link to="/tabs/tab-3">Tab 3</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
