import styled from "styled-components";

const Layout = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = ({ children }) => {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  );
};

export default Container;
