import React from 'react';
import {MenuWrapper} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDotCircle, faHome, faPoll} from '@fortawesome/free-solid-svg-icons';
const MenuItem = ({title, selected}) => {
    return (
        <MenuWrapper selected={selected}>
            <FontAwesomeIcon
                icon={renderIcon(title)}
                size="1x"
                style={{ marginRight: '10px'}}
            />
            {title}
        </MenuWrapper>
    );
};

const renderIcon = (title) => {
    switch (title) {
      case 'Home':
        return faHome;
      case 'All Products':
        return faPoll;
      default:
        return faDotCircle;
    }
  };

export default MenuItem;