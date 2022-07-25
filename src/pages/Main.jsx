import styled from "styled-components";
import { useProgress } from "../store/Progress";

const Layout = styled.main`
  text-align: center;
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
        <h1>Emotion Folder</h1>
        <p>강원대학교 영상문화학과 201913536 이수민</p>
        <ul>
          <li onClick={startNewGame}>새로하기</li>
          <li onClick={startLoadGame}>이어하기</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Main;
