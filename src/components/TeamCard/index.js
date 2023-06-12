// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

const TeamCard = props => {
  const {each} = props
  const {teamImageUrl, name, id} = each

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="teams-card">
        <img src={teamImageUrl} alt="ipl logo" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
