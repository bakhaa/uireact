import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// styles
import styles from './Spinner.css';

class Spinner extends PureComponent {
  render() {
    const className = classNames(
      styles.container,
      this.props.className,
      styles[this.props.type],
      styles[this.props.size],
    );

    switch (this.props.type) {
      case 'dotted':
        return (
          <div className={className}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        );

      case 'round':
      default:
        return (
          <svg viewBox="0 0 50 50" className={className} shapeRendering="auto">
            <circle
              className={styles.path}
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeMiterlimit="10"
            />
          </svg>
        );
    }
  }
}

Spinner.defaultProps = {
  className: '',
  type: 'round',
  size: 'small',
};

Spinner.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['dotted', 'round']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
};

export default Spinner;
