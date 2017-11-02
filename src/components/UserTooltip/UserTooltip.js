import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

import Popup from './Popup';


const propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onMouseEnterHandler: PropTypes.func.isRequired,
};

const UserTooltip = ({
  user,
  users,
  isFetching,
  onMouseEnterHandler,
  caption,
}) => (
  <Tooltip
    isCached={!!users[user.id]}
    onMouseEnterHandler={onMouseEnterHandler}
    caption={caption}
  >
    <div>
      {isFetching && (
        <span>Fetching...</span>
      )}
      {!isFetching && users[user.id] &&
        <Popup userData={users[user.id]} />
      }
    </div>
  </Tooltip>
);

UserTooltip.propTypes = propTypes;


export default UserTooltip;
