import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

// styles
import styles from './IconButton.css';

class IconButton extends PureComponent {
  getIconSize() {
    const { size } = this.props;
    switch (size) {
      case 'small':
        return 16;
      case 'large':
        return 30;
      default:
        return 22;
    }
  }

  renderIcon() {
    const { glyph } = this.props;
    const size = this.getIconSize();

    return <Icon glyph={glyph} className={styles.icon} size={size} />;
  }

  render() {
    const { className, theme, size, disabled, id, flat, style, active, ...otherProps } = this.props;

    const buttonClassName = classNames(
      styles.container,
      styles[size],
      {
        [styles.disabled]: disabled,
        [styles.defaultStyle]: !flat,
        [styles.flat]: flat,
        [styles[theme]]: flat,
        [styles.active]: active,
      },
      className,
    );

    return (
      <button
        className={buttonClassName}
        id={id}
        type="button"
        disabled={disabled}
        style={style}
        onClick={this.props.onClick}
        {...otherProps}
      >
        <span className={styles.fix}>
          {this.renderIcon()}
        </span>
      </button>
    );
  }
}

IconButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  glyph: PropTypes.string,
  theme: PropTypes.oneOf(
    ['default', 'primary', 'success', 'danger', 'info', 'warning'],
  ),
  size: PropTypes.oneOf(
    ['small', 'normal', 'large'],
  ),
  flat: PropTypes.bool,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  active: true,
  size: 'normal',
  flat: false,
  theme: 'default',
  disabled: false,
};

export default IconButton;
