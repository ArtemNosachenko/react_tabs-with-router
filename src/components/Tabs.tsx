import { Tabs as ReactTabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

type TabItem = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: TabItem[];
};

export const Tabs = ({ tabs }: Props) => {
  const navigate = useNavigate();
  const { tabId } = useParams();

  const activeIndex = tabs.findIndex(tab => tab.id === tabId);

  const hasValidTab = activeIndex !== -1;

  const selectedIndex = hasValidTab ? activeIndex : -1;

  return (
    <ReactTabs
      selectedIndex={selectedIndex}
      onSelect={(index) => {
        if (tabs[index]) {
          navigate(`/tabs/${tabs[index].id}`);
        }
      }}
    >
      <TabList>
        {tabs.map((tab) => (
          <Tab key={tab.id} data-cy="Tab">
            <Link
              to={`/tabs/${tab.id}`}
              data-cy="TabLink"
              style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {tab.title}
            </Link>
          </Tab>
        ))}
      </TabList>

      {tabs.map((tab) => (
        <TabPanel key={tab.id}>
          <div data-cy="TabContent">
            {hasValidTab ? tab.content : 'Please select a tab'}
          </div>
        </TabPanel>
      ))}

      {!hasValidTab && (
        <div data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </ReactTabs>
  );
};
