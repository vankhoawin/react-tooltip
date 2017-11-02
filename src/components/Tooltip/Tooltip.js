import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';


const propTypes = {
  isCached: PropTypes.bool.isRequired,
  caption: PropTypes.string.isRequired,
  onMouseEnterHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

class Tooltip extends Component {
  constructor() {
    super();

    this.container = null;

    this.state = {
      isHovering: false,
    };
  }

  componentDidMount() {
    this.container.addEventListener('mouseenter', this.onMouseEnterShowTooltipHandler);
    this.container.addEventListener('mouseleave', this.onMouseLeaveShowTooltipHandler);
  }

  componentWillUnmount() {
    this.container.removeEventListener('mouseenter', this.onMouseEnterShowTooltipHandler);
    this.container.removeEventListener('mouseleave', this.onMouseLeaveShowTooltipHandler);
  }

  onMouseEnterShowTooltipHandler = (e) => {
    const {
      isCached,
      onMouseEnterHandler,
    } = this.props;

    e.preventDefault();
    this.setState({ isHovering: true });

    if (isCached) {
      return;
    }

    onMouseEnterHandler();
  }

  onMouseLeaveShowTooltipHandler = (e) => {
    e.preventDefault();
    this.setState({ isHovering: false });
  }

  attachContainerRef = (ref) => {
    this.container = ref;
  }

  render() {
    const { children, caption } = this.props;
    const { isHovering } = this.state;

    return [
      <div
        key="1"
        className={classNames(styles.tooltip, {
          [styles.hide]: !isHovering,
        })}
      >{children}
      </div>,
      <span
        key="2"
        ref={this.attachContainerRef}
      >
        {caption}
      </span>,
    ];
  }
}

Tooltip.propTypes = propTypes;


export default Tooltip;
