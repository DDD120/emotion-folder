import { useState } from "react";
import styled from "styled-components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
  AiOutlineFullscreenExit,
  AiOutlineFullscreen,
  AiFillHome,
} from "react-icons/ai";
import { useProgress } from "../../store/Progress";

const Layout = styled.main`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Settings = styled.aside`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FullscreenBtn = styled.button`
  background-color: #eeeeee;
  padding: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
`;

const Container = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { action } = useProgress();
  const handle = useFullScreenHandle();

  const handleFullscreen = () => {
    isFullscreen ? handle.enter() : handle.exit();
    setIsFullscreen((prev) => !prev);
  };

  const handleGoMain = () => {
    action.goHome();
  };

  return (
    <FullScreen handle={handle}>
      <Layout>
        <Settings>
          <FullscreenBtn onClick={handleFullscreen}>
            {isFullscreen ? (
              <AiOutlineFullscreenExit />
            ) : (
              <AiOutlineFullscreen />
            )}
          </FullscreenBtn>
          <AiFillHome onClick={handleGoMain} />
        </Settings>

        {children}
      </Layout>
    </FullScreen>
  );
};

export default Container;
