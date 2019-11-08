import React from 'react';
import {connect} from 'react-redux';
import {Row, Col, Image} from 'react-bootstrap';

import PageHeader from '../components/page-header';
import RecentAdditionsList from '../components/recent-additions-list';


import imageGHSiteLink from '../images/boot-red.jpg';

import {resetFilteredList, sortByLastModified, sortByRating, changeTitle, changePage} from '../actions';

import './home-page.css';

class HomePage extends React.Component {
  render() {
    return (
      <div id="home-page">
        <PageHeader hidden={false}/>
        <PageHeader hidden={true}/>

        <Row>
          <Col className="">
            <h3>Welcome to the GameHaus Library Catalog</h3>
            <p>GameHaus Cafe started with around 600 games when we opened in November of 2013. 
              We currently have {this.props.gamesList.length} board and card games in our system. 
              Search above to find the game you're looking for.
            </p>
            <p>More information about our cafe can be found at <a href="http://www.gamehauscafe.com" >gamehauscafe.com.</a>
            </p>
            <div className='img-container mb-3'>
              <a href="http://www.gamehauscafe.com" >
                <Image fluid src={imageGHSiteLink} alt="gamehaus logo link" />
              </a>
            </div>

            <Row className="store-info">
              <Col>
                <h4>Contact Info</h4>
                <ul className='list-unstyled' >
                  <li><i className="fas fa-phone text-danger"></i> 818.937.9061</li>
                  <li><i className="fas fa-envelope text-danger"></i> contact@gamehauscafe.com</li>
                  <li>
                    <i className="fas fa-map-marker-alt text-danger"></i> 1800 South Brand Blvd. #107 
                    <br /><span className="ml-3">Glendale, CA 91204</span>
                  </li>
                </ul>
              </Col>


              <Col>
                <h4>Hours and Entry Fee</h4>
                <table className="table table-sm table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Day</th>
                      <th scope="col">Open</th>
                      <th scope="col">Close</th>
                      <th scope="col">Cover Fee</th>
                      <th scope="col">Reservation Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Monday</th>
                      <td colspan="2" className="text-center">Closed</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                     <tr>
                      <th scope="row">Tuesday</th>
                      <td>11:00am</td>
                      <td>11:00pm</td>
                      <td>$5</td>
                      <td>$5</td>
                    </tr>
                     <tr>
                      <th scope="row">Wednesday</th>
                      <td>11:00am</td>
                      <td>11:00pm</td>
                      <td>$5</td>
                      <td>$5</td>
                    </tr>
                     <tr>
                      <th scope="row">Thursday</th>
                      <td>11:00am</td>
                      <td>11:00pm</td>
                      <td>$5</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <th scope="row">Friday</th>
                      <td>11:00am</td>
                      <td>12:00am</td>
                      <td>$5</td>
                      <td>$10</td>
                    </tr>
                    <tr>
                      <th scope="row">Saturday</th>
                      <td>11:00am</td>
                      <td>12:00am</td>
                      <td>$7.50</td>
                      <td>$10</td>
                    </tr>
                    <tr>
                      <th scope="row">Sunday</th>
                      <td>11:00am</td>
                      <td>9:00pm</td>
                      <td>$7.50</td>
                      <td>$10</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>

          <Col  sm={4} lg={3} xl={2} className="bg-secondary">
            <h3>Recently Added </h3>
            <RecentAdditionsList />
          </Col>
        </Row>
        
      </div>
    )
  }
}


const mapStateToProps = state => ({
    gamesList: state.games.allGamesList
});

export default connect(mapStateToProps)(HomePage);