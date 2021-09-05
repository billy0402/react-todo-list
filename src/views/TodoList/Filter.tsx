import React from 'react';

import styles from './index.scss';

type FilterProps = {
  filterIsDoneTodo: boolean;
  switchFilterIsDoneTodo: () => void;
};

const Filter = (props: FilterProps) => {
  return (
    <div className={styles.filter}>
      <input
        type='checkbox'
        checked={props.filterIsDoneTodo}
        onChange={props.switchFilterIsDoneTodo}
      />
      隱藏已完成事項
    </div>
  );
};

export default Filter;
