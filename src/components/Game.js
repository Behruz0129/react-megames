import React from "react";
// Styling and Animation
import styled from "styled-components";
import {motion} from "framer-motion";
// Redux
import {useDispatch} from "react-redux";
import {loadDetail} from "../actions/detailAction";

function Game({name, released, image, id}) {
  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 1.3rem;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

export default Game;
