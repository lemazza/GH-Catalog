import React from 'react';
import PageHeader from '../components/page-header';
import PageSideBar from '../components/page-side-bar';

export default class GamePage extends React.Component {
  render() {
    return (
      <div id="game-page">
        <PageHeader />
        <PageSideBar />

      </div>
    )
  }
}