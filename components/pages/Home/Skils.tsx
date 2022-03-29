import type { NextPage } from "next";
import styled from "styled-components";

const Skils: NextPage = () => {
  const SecTitle = styled.h2`
    font-size: 1.5em;
  `;
  const ListWrap = styled.ul`
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `;
  const ListItem = styled.li`
    list-style: none;
    width: 200px;
    height: 300px;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 5px 7px 9px #a9a9a9;
  `;
  const ImgWrap = styled.div`
    width: 100px;
    height: 100%;
    margin: auto;
    display: flex;
  `;
  const Img = styled.img`
    width: 100%;
  `;

  return (
    <div>
      <SecTitle>Skils</SecTitle>
      <div>
        <ListWrap>
          <ListItem>
            <ImgWrap>
              <Img src="/Img/javascript.svg" alt="" />
            </ImgWrap>
          </ListItem>
          <ListItem>
            <ImgWrap>
              <Img src="/Img/vue.svg" alt="" />
            </ImgWrap>
          </ListItem>
          <ListItem>
            <ImgWrap>
              <Img src="/Img/react.svg" alt="" />
            </ImgWrap>
          </ListItem>
          <ListItem>
            <ImgWrap>
              <Img src="/Img/typescript.svg" alt="" />
            </ImgWrap>
          </ListItem>
          <ListItem>
            <ImgWrap>
              <Img src="/Img/redux.svg" alt="" />
            </ImgWrap>
          </ListItem>
        </ListWrap>
      </div>
    </div>
  );
};

export default Skils;
