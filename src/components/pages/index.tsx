import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import pause from '../../assets/svgs/pause-circle.svg';
import play from '../../assets/svgs/play-circle.svg';

/** importing Pages */
import Home from './Home';
import CharacterSelection from './CharacterSelection';
import { Battle } from './Battle';
import theme from '../../theme/theme';
import menuTheme from '../../assets/audio/route209.mp3';
import cynthia from '../../assets/audio/cynthiatheme.mp3';
import useSound from 'use-sound';

const Pages: React.FC = () => {
  const [audio, setAudio] = useState(true);
  const [stage, setStage] = useState<'menu' | 'battle'>('menu');
  const [menu, { stop: stopmenu }] = useSound(menuTheme);
  const [battle, { stop: stopbattle }] = useSound(cynthia);
  const handleStartGameClick = () => {
    menu();
  };

  const handleStartBattleClick = () => {
    stopmenu();
    setTimeout(() => battle(), 200);
    setStage('battle');
  };

  const handlePlayPause = () => {
    setAudio((prev) => !prev);
  };

  useEffect(() => {
    if (stage === 'menu') {
      if (!audio) {
        stopmenu();
      } else {
        menu();
      }
    } else if (stage === 'battle') {
      if (!audio) {
        stopbattle();
      } else {
        battle();
      }
    }
  }, [audio]);

  return (
    <AppWrapper className="app-wrapper">
      <AudioContainer onClick={() => setAudio((prev) => !prev)}>
        {audio ? 'Stop' : 'Play'} Music
        {audio ? <Icon src={pause}></Icon> : <Icon src={play}></Icon>}
      </AudioContainer>
      <Router>
        <Route
          exact
          path="/"
          component={() => <Home clickHandler={handleStartGameClick} />}
        />
        <Route
          path="/character-selection"
          component={() => (
            <CharacterSelection clickHandler={handleStartBattleClick} />
          )}
        />
        <Route path="/battle" component={Battle} />
      </Router>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  min-width: 1228px;
  width: 80%;
  max-width: 1400px;
  min-height: 709px;
`;
const AudioContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #94a3b8;
  padding: 8px 20px;
  border-radius: 999px;
  background-color: ${theme.colors.blueGray[50]};
  transition: all 0.3s ease;
  user-select: none;

  :hover {
    cursor: pointer;
    background-color: ${theme.colors.blueGray[100]};
  }

  :active {
    background-color: ${theme.colors.blueGray[200]};
  }
`;

const Icon = styled.img`
  height: 25px;
  margin-left: 5px;
`;

export default Pages;
