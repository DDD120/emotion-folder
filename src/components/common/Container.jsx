import { useState } from "react";
import styled from "styled-components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";

const Layout = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FullscreenBtn = styled.button`
  position: absolute;
  background-color: #eeeeee;
  padding: 4px;
  font-size: 1.2rem;
  top: 10px;
  right: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Container = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handle = useFullScreenHandle();

  const handFullscreen = () => {
    isFullscreen ? handle.enter() : handle.exit();
    setIsFullscreen((prev) => !prev);
  };

  return (
    <FullScreen handle={handle}>
      <Layout>
        <FullscreenBtn onClick={handFullscreen}>
          {isFullscreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
        </FullscreenBtn>
        {children}
      </Layout>
    </FullScreen>
  );
};

export default Container;
