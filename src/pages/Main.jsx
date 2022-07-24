import { useProgress } from "../store/Progress";

const Main = ({ setStartGame }) => {
  const [, action] = useProgress();

  const startNewGame = () => {
    action.new();
    setStartGame(true);
  };
  const startLoadGame = () => {
    action.loadGame();
    setStartGame(true);
  };

  return (
    <div>
      <h1>Emotion Folder</h1>
      <p>강원대학교 영상문화학과 201913536 이수민</p>
      <ul>
        <li onClick={startNewGame}>새로하기</li>
        <li onClick={startLoadGame}>이어하기</li>
      </ul>
    </div>
  );
};

export default Main;
