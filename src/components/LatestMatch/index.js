// Write your code here

import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchDetails

    return (
      <div className="team-card-container">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{result}</p>
        <p>{venue}</p>
        <img src={competingTeamLogo} />
      </div>
    )
  }
}

export default LatestMatch
