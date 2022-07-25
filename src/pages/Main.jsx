import styled from "styled-components";
import { useProgress } from "../store/Progress";

const Layout = styled.main`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Developer = styled.p`
  background-color: #88bfee;
  padding: 12px 20px;
  font-weight: bold;
`;

const Menu = styled.li`
  cursor: pointer;
  margin: 4px 0;
  &:hover {
    background-color: #bfe1ff;
  }
`;

const Main = () => {
  const { action } = useProgress();

  const startNewGame = () => {
    action.new();
    action.startGame();
  };
  const startLoadGame = () => {
    action.loadGame();
    action.startGame();
  };

  return (
    <Layout>
      <div>
        <Title>Emotion Folder</Title>
        <Developer>강원대학교 영상문화학과 201913536 이수민</Developer>
        <ul>
          <Menu onClick={startNewGame}>새로하기</Menu>
          <Menu onClick={startLoadGame}>이어하기</Menu>
        </ul>
      </div>
    </Layout>
  );
};

export default Main;
