import React from "react";
import {
  WrapperMain,
  Sect,
  Memoji,
  ContainerImg,
  MemojiMain,
  WrapperArticle,
  Icons,
  WrapperArticleIcons,
  WrapperIcons
} from "./body-elements";
import memoji from "../../Img/memojic-mac.png";
import memoji3 from "../../Img/memoji3.png";
import jsIcon from "../../icon/jsIcon.png";
import htmlIcon from "../../icon/htmlIcon.png";
import cssIcon from "../../icon/cssIcon.png";
import pythonIcon from "../../icon/pythonIcon.png";
import reacIcon from "../../icon/reactIcon.png";
import dataIcon from "../../icon/databaseIcon.png";
const ArticleMain = () => {
  const iconBanner = [
    
    {
      img: htmlIcon,
      color: "0 0 0 10px #FF6C22, 0 0 50px #FF894E,0 0 100px #FFBB99",
      time: 'calc(125s / 11)',
    },
    {
      img: cssIcon,
      color: "0 0 0 10px #15B1BB, 0 0 50px #55a2d3,0 0 100px #8dc0e2",
      time: 'calc(125s / 13)',
    },
    {
      img: jsIcon,
      color: "0 0 0 10px #F6D843, 0 0 50px #F8DE62,0 0 100px #FAE893",
      time: 'calc(125s / 16)',
    },
    {
      img: pythonIcon,
      color: "0 0 0 10px #0174BE, 0 0 50px #55a2d3,0 0 100px #8dc0e2",
      time: 'calc(125s / 18)',
    },
    {
      img: reacIcon,
      color: "0 0 0 10px #A0E9FF, 0 0 50px #B3EDFF,0 0 100px #D3F5FF",
      time: 'calc(125s / 15)',
    }, 
    {
      img: dataIcon,
      color: "0 0 0 10px #6499E9, 0 0 50px #83ADED,0 0 100px #B8D0F5",
      time: 'calc(125s / 20)',
    },
    
   
  ];
  
  return (
    <WrapperMain>
      <Sect>
        <WrapperArticle>
          <ContainerImg>
            <MemojiMain src={memoji3}></MemojiMain>
            <Memoji src={memoji} />
          </ContainerImg>
          <WrapperIcons>
          {iconBanner.map((icon, index) => (
            <WrapperArticleIcons key={index} >
              <Icons src={icon.img} key={icon.key} style={{boxShadow: icon.color, animationDuration: icon.time }}  />
            </WrapperArticleIcons>
          ))}
          </WrapperIcons>
        </WrapperArticle>
      </Sect>
    </WrapperMain>
  );
};

export default ArticleMain;
