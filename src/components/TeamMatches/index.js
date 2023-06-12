import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {matchesData: [], isLoading: true}

  componentDidMount() {
    this.getteamData()
    this.renderMatchTeams()
  }

  getteamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(recentMatch => ({
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        date: recentMatch.date,
        firstInnings: recentMatch.first_innings,
        manOfTheMatch: recentMatch.man_of_the_match,
        result: recentMatch.result,
        secondInnings: recentMatch.second_innings,
        umpires: recentMatch.umpires,
        venue: recentMatch.venue,
      })),
    }

    this.setState({matchesData: updatedData})
  }

  renderMatchTeams = () => {
    const {matchesData} = this.state
    const {teamBannerUrl} = matchesData
    console.log(teamBannerUrl)
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`blog-container${id}`}>{this.renderMatchTeams()}</div>
    )
  }
}

export default TeamMatches
