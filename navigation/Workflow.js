import React from 'react';
import { NavigationActions } from 'react-navigation';
import Stack from './Stack';
import { withMappedNavigationProps } from 'react-navigation-props-mapper'

class Workflow extends React.Component {
    navigateTo(routeName) {
      this.navigator && this.navigator.dispatch(
        NavigationActions.navigate({ routeName: routeName })
      );
    }

    componentDidMount(){
       // this.componentDidCatch()
    }

    render() {
      return (
        <Stack ref={nav => { this.navigator = nav; }} />
      );
    }
  }