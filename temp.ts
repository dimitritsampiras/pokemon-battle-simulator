 /**
   * Click handler when user cliks a move
   * @param e click event
   */
  const clickMoveHander: DivClick = (e) => {
    // moves are active
    if (gameState.turn === 'usr') {
      const move = getMoveFromEvent(e);
      clickAudio();
      /**
       * This setter uses the move
       *  -- changes turn to opp
       *  -- starts the animation for the move
       *  -- sets game text
       */
      setGameState((previousState) => {
        return {
          ...previousState,
          turn: previousState.turn === 'usr' ? 'opp' : 'usr', //change turn
          usingMove: {
            user: 'usr',
            moveCat: MOVES[move].category === 'status' ? 'status' : 'atk',
          },
          gameText: `${userPokemon.name} used ${MOVES[move].name}`,
        };
      });

      /**
       * This setter applies the damage.
       */
      setTimeout(() => {
        setOpponentPokemon((prev) => {
          return {
            ...prev,
            activeStats: {
              ...prev.activeStats,
              hp:
                prev.activeStats.hp -
                  damage(userPokemon, MOVES[move], opponentPokemon) >
                0
                  ? prev.activeStats.hp -
                    damage(userPokemon, MOVES[move], opponentPokemon)
                  : 0,
            },
          };
        });
      }, 1000);
      /**
       * This setter adds text if there was a modifier
       */
      setTimeout(() => {
        setGameState((previousState) => {
          return {
            ...previousState,
            gameText: '',
          };
        });
        if (multiplier(MOVES[move], opponentPokemon) >= 2)
          setGameState((previousState) => {
            return {
              ...previousState,
              gameText: `It was super effective`,
            };
          });
        else if (multiplier(MOVES[move], opponentPokemon) < 1)
          setGameState((previousState) => {
            return {
              ...previousState,
              gameText: `It was not very effective`,
            };
          });
        else return;
      }, 2000);
      // cant click on moves while active
    }
  };

  /**
   * Occurs when game state changes (ie. after user clicks on move).
   * Sets game state back to user after 6000 miliseconds.
   */
  useEffect(() => {
    let move = genRandomMove(opponentPokemon);
    /**
     * move animation
     * change back to regular position after X seconds
     */
    setTimeout(() => {
      setGameState((prevstate) => {
        return {
          ...prevstate,
          usingMove: undefined,
        };
      });
    }, 200);
    /**
     * Opponent uses move.
     */
    setTimeout(() => {
      if (gameState.turn === 'opp') {
        setGameState((previousState) => {
          return {
            ...previousState,
            usingMove: {
              user: 'opp',
              moveCat: move.category === 'status' ? 'status' : 'atk',
            },
            gameText: `${opponentPokemon.name} used ${move.name}`,
          };
        });
      }
      /**
       * move animation
       * change back to regular position after X seconds
       */
      setTimeout(() => {
        setGameState((prevstate) => {
          return {
            ...prevstate,
            usingMove: undefined,
          };
        });
      }, 300);
    }, 4000);

    setTimeout(() => {
      setUserPokemon((prev) => {
        return {
          ...prev,
          activeStats: {
            ...prev.activeStats,
            hp:
              prev.activeStats.hp - damage(userPokemon, move, opponentPokemon) >
              0
                ? prev.activeStats.hp -
                  damage(userPokemon, move, opponentPokemon)
                : 0,
          },
        };
      });
    }, 5000);

    setTimeout(() => {
      setGameState((prevstate) => {
        return {
          ...prevstate,
          turn: 'usr',
          gameText: '',
        };
      });
    }, 7000);
  }, [gameState.turn]);