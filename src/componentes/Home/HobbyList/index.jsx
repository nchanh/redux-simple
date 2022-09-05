import PropTypes from 'prop-types';
import './HobbyList.css'

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
}

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
}

function HobbyList(props) {
  const {hobbyList, activeId, onHobbyClick} = props;

  const handleHobbyClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  }

  return (
    <ul>
      {hobbyList.map(hobby => (
        <li
          key={hobby.id}
          onClick={() => handleHobbyClick(hobby)}
          className={hobby.id === activeId ? 'active' : ''}
        >{hobby.title}</li>
      ))}
    </ul>
  )
}

export default HobbyList;