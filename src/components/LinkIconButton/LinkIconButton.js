import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

// styles
import styles from '../IconButton/IconButton.css';

class LinkIconButton extends PureComponent {
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
    const {
      theme,
      size,
      flat,
      style,
      active,
      href,
      target,
      id,
      ...otherProps
    } = this.props;

    const className = classNames(
      styles.container,
      styles[size],
      {
        [styles.defaultStyle]: !flat,
        [styles.flat]: flat,
        [styles[theme]]: flat,
        [styles.active]: active,
      },
      this.props.className,
    );

    return (
      <a
        href={href}
        target={target}
        className={className}
        style={style}
        id={id}
        {...otherProps}
      >
        <span className={styles.fix}>
          {this.renderIcon()}
        </span>
      </a>
    );
  }
}

LinkIconButton.propTypes = {
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
  href: PropTypes.string,
  flat: PropTypes.bool,
  active: PropTypes.bool,
  target: PropTypes.string,
};

LinkIconButton.defaultProps = {
  style: {},
  size: 'normal',
  active: false,
  flat: false,
  theme: 'default',
};

export default LinkIconButton;
