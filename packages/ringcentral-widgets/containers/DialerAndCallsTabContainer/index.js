import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import callingModes from 'ringcentral-integration/modules/CallingSettings/callingModes';

import TabContentPanel from '../../components/TabContentPanel';
import SpinnerOverlay from '../../components/SpinnerOverlay';
import withPhone from '../../lib/withPhone';
import i18n from './i18n';
import styles from './styles.scss';

class TabContentView extends Component {
  static propTypes = {
    applicable: PropTypes.bool.isRequired,
    showSpinner: PropTypes.bool.isRequired,
    currentLocale: PropTypes.string.isRequired,
    currentPath: PropTypes.string.isRequired,
    goTo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    
    this.getTabs = createSelector(
      () => this.props.currentLocale,
      () => this.props.currentPath,
      (currentLocale, currentPath) => ([
        {
          path: '/dialer',
          label: i18n.getString('dialer', currentLocale),
          isActive() { return currentPath === '/dialer'; },
        },
        {
          path: '/calls',
          label: i18n.getString('allCalls', currentLocale),
          isActive() { return currentPath === '/calls'; }
        },
      ]),
    )
  }
  render() {
    if (this.props.showSpinner) {
      return <SpinnerOverlay />;
    }
    return (
      <TabContentPanel
        {...this.props}
        tabs={this.getTabs()}
        navClassName={styles.nav}
        tabContentClassName={styles.content}
      />
    );
  }
}

function mapToProps(_, {
  phone: {
    locale,
    callMonitor,
    callLogSection,
    callingSettings,
    routerInteraction,
    conferenceCall,
    webphone,
  }
}) {
  const conferenceCallEquipped = !!conferenceCall;
  const isWebphoneMode = (callingSettings.callingMode === callingModes.webphone);
  const applicable = isWebphoneMode && !!(
    conferenceCallEquipped &&
    callMonitor.calls.length &&
    webphone.sessions.length
  )
  || !isWebphoneMode && (
    callMonitor.calls.length > 0 ||
    (callLogSection && callLogSection.show)
  );
  
  return {
    applicable,
    currentLocale: locale.currentLocale,
    showSpinner: !locale.ready,
    currentPath: routerInteraction.currentPath,
  };
}

function mapToFunctions(_, {
  phone: {
    routerInteraction,
  },
}) {
  return {
    goTo(path) {
      routerInteraction.push(path);
    },
  };
}

const DialerAndCallsTabContainer = withPhone(connect(
  mapToProps,
  mapToFunctions,
)(TabContentView));

export {
  mapToProps,
  mapToFunctions,
  DialerAndCallsTabContainer as default,
};
