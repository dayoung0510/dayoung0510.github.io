import React, { useState } from 'react';
import Weekly from 'components/organisms/Todolist/Weekly';
import Yearly from 'components/organisms/Todolist/Yearly';
import Monthly from 'components/organisms/Todolist/Monthly';
import BucketList from 'components/organisms/Todolist/BucketList';
import CoreValues from 'components/organisms/Todolist/CoreValues';
import { TabButton, TabPanel, ButtonBar } from 'components/atoms/todoList/Tabs';

type TabArray = {
  name: string;
  component: React.ReactElement;
};

const useTabs = (initialTab: number, allTabs: TabArray[]) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const contents = [
  { idx: 0, name: '위클리', component: <Weekly /> },
  { idx: 1, name: '먼슬리', component: <Monthly /> },
  { idx: 2, name: '이얼리', component: <Yearly /> },
  { idx: 3, name: '버킷리스트', component: <BucketList /> },
  { idx: 4, name: '코어밸류', component: <CoreValues /> },
];

const TodoPanel: React.FC = () => {
  const { currentItem, changeItem } = useTabs(0, contents);

  return (
    <div style={{ height: '100%' }}>
      <ButtonBar>
        {contents.map((item, idx) => {
          return (
            <TabButton key={item.idx} onClick={() => changeItem(idx)}>
              {item.name}
            </TabButton>
          );
        })}
      </ButtonBar>
      <TabPanel>{currentItem.component}</TabPanel>
    </div>
  );
};

export default TodoPanel;
