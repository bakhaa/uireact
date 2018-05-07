import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// custom components
import Spinner from '../Spinner/Spinner';
// styles
import styles from './Button.css';

class Button extends PureComponent {
  renderLoading() {
    const { loading, size } = this.props;

    if (!loading) {
      return null;
    }

    return <Spinner type="dotted" className={styles.spinner} size={size} />;
  }

  render() {
    const {
      id,
      type,
      form,
      disabled,
      theme,
      size,
      wide,
      rounded,
      children,
      view,
      loading,
    } = this.props;

    const className = classNames(
      styles.container,
      styles[theme],
      styles[view],
      styles[size],
      {
        [styles.wide]: wide,
        [styles.rounded]: rounded,
        [styles.pending]: loading,
      },
      this.props.className,
    );

    return (
      <button
        id={id}
        className={className}
        type={type}
        form={form}
        disabled={disabled || loading}
        onClick={this.props.onClick}
      >
        {children}
        {this.renderLoading()}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  wide: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
  form: PropTypes.string,
  view: PropTypes.oneOf(['button', 'outline', 'link']),
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
  theme: PropTypes.oneOf(
    ['default', 'primary', 'success', 'danger', 'info', 'warning'],
  ),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: (event) => {
    console.log('click button', event.target); // eslint-disable-line
  },
  form: '',
  id: '',
  className: '',
  type: 'button',
  theme: 'default',
  view: 'button',
  size: 'normal',
  wide: false,
  rounded: true,
  loading: false,
  disabled: false,
};

export default Button;
