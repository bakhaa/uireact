import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { createSequence } from '../../utils/createSequence';

// styles
import styles from './Avatar.css';

const seq = createSequence();

class Avatar extends PureComponent {
  constructor(props) {
    super(props);

    this.id = `peer_avatar_${seq.next()}`;
    this.sizes = {
      tiny: 14,
      small: 22,
      medium: 28,
      large: 36,
      big: 100,
      super: 150,
    };
  }

  getAvatarSize() {
    const { size } = this.props;
    return Number(size) ? size : this.sizes[size];
  }

  renderDefs() {
    const { photo } = this.props;
    if (photo) {
      return (
        <pattern id={this.id} width="100%" height="100%" patternUnits="objectBoundingBox">
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            xlinkHref={photo}
          />
        </pattern>
      );
    }

    return (
      <linearGradient
        id={this.id}
        gradientUnits="userSpaceOnUse"
        x1="6.79%"
        y1="105.31%"
        x2="93.21%"
        y2="-5.31%"
      >
        <stop stopColor="#f1f1f1">
          <animate attributeName="stop-color" values="#f1f1f1; #cfcfcf;" dur="1.5s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
    );
  }

  renderMask() {
    if (!this.props.online) {
      return (
        <circle fill={`url(#${this.id})`} cx="50" cy="50" r="50" />
      );
    }

    return (
      <path
        // eslint-disable-next-line
        d="M68.393 96.508C62.7 98.762 56.495 100 50 100 22.386 100 0 77.614 0 50S22.386 0 50 0s50 22.386 50 50c0 6.495-1.238 12.7-3.492 18.393C93.083 65.643 88.734 64 84 64c-11.046 0-20 8.954-20 20 0 4.734 1.644 9.083 4.393 12.508z"
        fill={`url(#${this.id})`}
      />
    );
  }

  renderOnline() {
    if (!this.props.online) {
      return null;
    }

    return (
      <circle cx="84" cy="84" r="15" className={styles.online} />
    );
  }

  render() {
    const className = classNames(
      styles.container,
      this.props.className,
      this.props.onClick ? styles.clickable : null,
    );

    const size = this.getAvatarSize();

    return (
      <div style={{ width: size, height: size }} className={className} onClick={this.props.onClick}>
        <svg viewBox="0 0 100 100" width={size} height={size} shapeRendering="auto">
          <defs>
            {this.renderDefs()}
          </defs>
          {this.renderMask()}
          {this.renderOnline()}
        </svg>
      </div>
    );
  }
}

Avatar.defaultProps = {
  size: 'medium',
};

Avatar.propTypes = {
  className: PropTypes.string,
  photo: PropTypes.string,
  size: PropTypes.any,
  online: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Avatar;
