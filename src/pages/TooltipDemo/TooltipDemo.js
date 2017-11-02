import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { UserTooltip, LoremIpsum } from '../../components';
import { actions as tooltipActions } from './ducks';


const mapStateToProps = state => ({
  currentUser: state.tooltip.currentUser,
  users: state.tooltip.users,
  err: state.tooltip.err,
  fetchedData: state.tooltip.fetchedData,
  isFetching: state.tooltip.isFetching,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    tooltip: bindActionCreators(tooltipActions, dispatch),
  },
});

const propTypes = {
  actions: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  err: PropTypes.any,
};

const defaultProps = {
  err: null,
};

const TooltipDemo = (props) => {
  const {
    actions,
    currentUser,
    users,
    isFetching,
    err,
  } = props;
  const fetchUser = (/* e */) => {
    actions.tooltip.fetchUser(currentUser.id);
  };

  return (
    <div>
      <h1>Lorem Ipsum</h1>
      <h2>
        by
        <UserTooltip
          user={currentUser}
          users={users}
          isFetching={isFetching}
          onMouseEnterHandler={fetchUser}
          caption={currentUser.name}
        />
      </h2>
      {err && (
        <span>JSON.stringify(err)</span>
      )}
      <LoremIpsum />
    </div>
  );
};

TooltipDemo.propTypes = propTypes;
TooltipDemo.defaultProps = defaultProps;


export { TooltipDemo };
export default connect(mapStateToProps, mapDispatchToProps)(TooltipDemo);
