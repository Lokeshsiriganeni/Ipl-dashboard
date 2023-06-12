// Write your code here

// Write your code here

import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamLists: [],
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    const updatedData = data.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({teamLists: updatedData})
  }

  render() {
    const {teamLists} = this.state

    return (
      <div className="app-container">
        <h1>IPL Dashboard</h1>
        <ul className="tab-container">
          {teamLists.map(eachTeam => (
            <TeamCard each={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
