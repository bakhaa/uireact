import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// styles
import styles from './Icon.css';

// $FlowFixMe
const files = require.context('./svg', false, /.*\.svg$/);
files.keys().forEach(files);

const SIZES = {
  small: 18,
  default: 24,
  large: 42,
};

class Icon extends PureComponent {
  getIconPadding() {
    const size = this.getIconSize(this.props.size);

    if (size < 20) {
      return 2;
    } else if (size >= 20 && size <= 40) {
      return 4;
    }

    return 6;
  }

  getIconSize() { return (Number(this.props.size) ? this.props.size : SIZES[this.props.size]); }

  renderInvertedIcon() {
    const { onClick, theme } = this.props;
    const size = this.getIconSize();
    const className = classNames(
      styles.container,
      styles.inverted,
      {
        [styles[theme]]: theme,
        [styles.clickable]: onClick,
      },
      this.props.className,
    );
    const style = {
      width: size,
      height: size,
      padding: this.getIconPadding(),
    };

    return (
      <div className={className} onClick={onClick} style={style} id={this.props.id}>
        <svg className={styles.icon} width="100%" height="100%" shapeRendering="auto">
          <use xlinkHref={`#${this.props.glyph}`} />
        </svg>
      </div>
    );
  }

  renderIcon() {
    const { onClick, theme } = this.props;
    const size = this.getIconSize(this.props.size);
    const className = classNames(
      styles.container,
      {
        [styles[theme]]: theme,
        [styles.clickable]: onClick,
      },
      this.props.className,
    );

    return (
      <div
        className={className}
        style={{ width: size, height: size }}
        onClick={onClick}
        id={this.props.id}
      >
        <svg
          width={size}
          height={size}
          className={styles.icon}
          shapeRendering="auto"
        >
          <use xlinkHref={`#${this.props.glyph}`} />
        </svg>
      </div>
    );
  }

  render() {
    if (this.props.inverted) {
      return this.renderInvertedIcon();
    }

    return this.renderIcon();
  }
}

Icon.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  glyph: PropTypes.string,
  theme: PropTypes.oneOf(
    ['default', 'primary', 'success', 'danger', 'info', 'warning'],
  ),
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  id: '',
  className: '',
  glyph: '',
  size: SIZES.default,
  theme: 'default',
  inverted: false,
  onClick: () => {},
};

export default Icon;
