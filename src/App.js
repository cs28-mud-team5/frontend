import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

//Functionality
import { DungeonContext } from "./contexts/DungeonContext";
import PrivateRoute from "./components/PrivateRoute";
//Components
import Auth from "./components/Auth";
import Register from "./components/Register";
import GameContainer from "./components/GameContainer";

const App = () => {
  const [player, setPlayer] = useState({
    uuid: "",
    name: "",
    title: "",
    description: "",
    players: [],
    room_id: null,
    error_msg: "",
  });

  const [room, setRoom] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [currentPlayerRoom, setCurrentPlayerRoom] = useState(null);

  return (
    <div>
      <DungeonContext.Provider
        value={{
          player,
          setPlayer,
          room,
          setRoom,
          rooms,
          setRooms,
          currentPlayerRoom,
          setCurrentPlayerRoom,
        }}
      >
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/game" component={GameContainer} />
        </Switch>
      </DungeonContext.Provider>
    </div>
  );
};

export default App;
