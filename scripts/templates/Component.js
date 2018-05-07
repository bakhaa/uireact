import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
<% if (styles) { -%>
import classNames from 'classnames';

// styles
import styles from './<%= name %>.css';
<% } -%>

class <%= name %> extends PureComponent {
  render() {
<% if (styles) { -%>
    const className = classNames(styles.container, this.props.className);

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
<% } else { -%>
    return (
      <div>
        {this.props.children}
      </div>
    );
<% } -%>
  }
}

<%= name %>.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

<%= name %>.defaultProps = {
  className: '',
};

export default <%= name %>;
