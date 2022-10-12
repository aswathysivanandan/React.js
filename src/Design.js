import * as React from "react";
import styled from "styled-components";
// import PlayButton from "@/assets/images/play_button.svg";
// import PlayButton from "./play_button.svg";
import laptop from "./laptop.png";

const Head = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  color: #010126;
  @media (min-width: 700px) {
    max-width: 720px;
  };
`;
const Sub = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  color: #757575;
  @media (min-width: 700px) {
    max-width: 720px;
  };
`;
const Play = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #757575;
  margin-left: 0.5rem;
`;

const Div = styled.div`
  background: #ffffff;
  //padding-left:5rem;
  // margin-left: 1rem;
`;
const Box = styled.div`
  // width: 226px;
  // height: 50px;
  // left: 194px;
  // top: 2873px;
`;

const Label = styled.button`
  font-family: "Lato";
  font-style: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 226px;
  height: 50px;

  border-radius: 0px;
  flex: none;
  border: 0px solid #08083a;
  font-size: 14px;

  align-self: stretch;
  flex-grow: 0;
  background: linear-gradient(90deg, #e5ab18 -0.14%, #dc4638 100.15%);
  color: #ffffff;
`;
const Input = styled.input`
  //position: absolute;
  // width: 1440px;
  // height: 890px;
  border: 1px solid white;
  width: 20rem;
  height: 68px;
  background: #08083a;
  padding: 10px 12px;
  color: #ffffff;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  margin-top: -4.3rem;
`;
const LogoImage = styled.img`
  @media (min-width: 550px) {
    width: 550px;
    margin-left: 50px;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;
const Divlaptop = styled.div`
  @media (max-width: 700px) {
    width: 100%;
  }
  .playbutton {
    // position: absolute;
    // left: 285px;
    // top: 175px;
  }
`;

const PlayImage = styled.div`
  width: 3rem;
`;
const Span = styled.span`
  // background: -webkit-linear-gradient(90deg, #e5ab18 -0.14%, #dc4638 100.15%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  color: #0e3eda;
`;

const RootContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .getStartedContainer{
    display: flex;
    flex-wrap: wrap;
  }
  .playButtonContainer {
    margin-left: 0.5rem;
    display: flex;
  }
  @media (min-width: 700px) {
    margin-left: 5rem;
  };
`;

function Glimpse() {

  return (
    <RootContainer>
      {/* <PageHeader>{t('loginPageTitle')}</PageHeader> */}
      <div>
        <Div>
          <Head>
            Get A Glimpse Of How <br />
            <Span>Our Automation Works </Span>
          </Head>
          <Sub>
            Want to know how our automation makes wonders? Have a look at our
            Maxyf's unique features. Let Maxyfi track, maintain and follow-up
            your Accounts Receivables to get paid faster!
          </Sub>
          <br />
        </Div>
        <div className="getStartedContainer">
          <Label>Get Started for Free</Label>
          <div className="playButtonContainer">
            {/* <PlayImage>
              <PlayButton />
            </PlayImage> */}
            <Play>See how Maxyfi works</Play>
          </div>
        </div>
      </div>
      <Divlaptop>
        <LogoImage src={laptop.src} />
        {/* <PlayImage>
          <PlayButton />
        </PlayImage> */}
      </Divlaptop>
    </RootContainer>
  );
}



const StyledFill = styled.div`
  flex: 1;
  margin-left:40px;
  flex-direction: column;
  // border: 1px solid green;
`;
export default Glimpse;
