import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// styles
import styles from '../Button/Button.css';

const LinkButton = ({
  theme,
  size,
  wide,
  rounded,
  children,
  view,
  target,
  href,
  id,
  className,
}) => {
  const _className = classNames(
    styles.container,
    styles[theme],
    styles[view],
    styles[size],
    {
      [styles.wide]: wide,
      [styles.rounded]: rounded,
    },
    className,
  );
  return (
    <a href={href} target={target} className={_className} id={id}>
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.oneOf(
    ['default', 'primary', 'success', 'danger', 'info', 'warning'],
  ),
  size: PropTypes.oneOf(
    ['small', 'normal', 'large'],
  ),
  view: PropTypes.oneOf(
    ['button', 'outline', 'link'],
  ),
  href: PropTypes.string,
  target: PropTypes.string,
};

LinkButton.defaultProps = {
  theme: 'default',
  view: 'button',
  size: 'normal',
  wide: false,
  rounded: true,
};

export default LinkButton;
