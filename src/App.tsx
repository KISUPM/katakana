import { useContext } from 'react';
import { Box } from "@chakra-ui/react";
import './App.css';
import SelectMode from './Pages/SelectMode';
import { AppContext } from './Context/AppContext';
import Endless from './Pages/Endless';
import Round from './Pages/Round';

function App() {
  const App = useContext(AppContext);

  return (
    <Box w="100vw" h="100vh" background="#1c1c1c" color="white">
      {App.mode === "" &&
        <SelectMode />
      }
      {App.mode === "endless" &&
        <Endless />
      }
      {App.mode === "round" &&
        <Round />
      }
    </Box>
  );
}

export default App;
