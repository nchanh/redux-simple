import {useDispatch, useSelector} from "react-redux";
import {addNewHobby, setActiveHobby} from "../actions/hobby";
import HobbyList from "../componentes/Home/HobbyList";

HomePage.propTypes = {};

const randomNumber = () => Math.floor(Math.random() * 9999);

function HomePage(props) {
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleAddHobby = () => {
    const hobbyId = randomNumber();
    const newHobby = {
      id: hobbyId,
      title: `title ${hobbyId}`,
    };

    dispatch(addNewHobby(newHobby));
  }

  const handleHobbyClick = (hobby) => {
    dispatch(setActiveHobby(hobby));
  };

  return (
    <div className="home-page">
      <h1>REDUX HOOKS - Home page</h1>

      <button onClick={handleAddHobby}>Add hobby</button>

      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;