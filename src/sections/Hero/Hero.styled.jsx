import styled from 'styled-components';
import {device} from '../../styles/mixins';
import mainBG from '../../assets/images/hero-bg.png';
import mainBGM from '../../assets/images/hero-bg-mobile.png';
import mainBGT from '../../assets/images/hero-bg-tablet.png';
import mainBGTV from '../../assets/images/hero-bg-tablet-vert.png';
import mainBGD from '../../assets/images/hero-bg-desktop.png';
import mainBGU from '../../assets/images/hero-bg-ultra.png';
import bat from '../../assets/images/bat.png';
import batT from '../../assets/images/bat-t.png';
import batU from '../../assets/images/bat-u.png';
import webU from '../../assets/images/web-u.png';
import channelBGU from '../../assets/images/channel-bg-u.png';
import channelBGM from '../../assets/images/channel-bg-m.png';

export const HeroBg = styled.div`
  background: ${`url(${webU})`} no-repeat left 1285px, ${`url(${channelBGM})`} no-repeat left 550px, ${`url(${bat})`} no-repeat 0 273px , ${`url(${mainBG})`} no-repeat;
  width: 100%;
  background-size: 60%, 100%, 100%, 100%;
  
  ${device.mobile} {
    background: ${`url(${webU})`} no-repeat left 1385px, ${`url(${channelBGM})`} no-repeat left 550px, ${`url(${bat})`} no-repeat 0 273px, ${`url(${mainBGM})`} no-repeat;
    background-size: 61%, 100%, 100%, 100%;
  }
  ${device.tablet} {
    background: ${`url(${webU})`} no-repeat left 1190px, ${`url(${channelBGU})`} no-repeat left 550px, ${`url(${batT})`} no-repeat 0 312px, ${`url(${mainBGT})`} no-repeat;
    background-size: 41%, 150%, 100%, 100%;
  }

  ${device.tabletLandscape} {
    background: ${`url(${webU})`} no-repeat left 1350px, ${`url(${channelBGU})`} no-repeat left 900px, ${`url(${batT})`} no-repeat 0 396px, ${`url(${mainBGTV})`} no-repeat;
    background-size: 41%, 110%, 100%, 100%;
  }

  ${device.desktop} {
    background: ${`url(${webU})`} no-repeat left 1425px, ${`url(${channelBGU})`} no-repeat left 900px, ${`url(${batU})`} no-repeat 0 405px, ${`url(${mainBGD})`} no-repeat;
    background-size: 34%, 100%, 100%, 100%;
  }

  ${device.ultraWide} {
    background: ${`url(${webU})`} no-repeat left 1860px, ${`url(${channelBGU})`} no-repeat left 1000px, ${`url(${batU})`} no-repeat 0 548px, ${`url(${mainBGU})`} no-repeat;
    background-size: 34%, 100%, 100%, 100%;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  

  ${device.mobile} {
    padding-bottom: 24px;
  } 
  
  ${device.tablet} {
    align-items: flex-start;
    padding: 48px 0 0 40px;
  }

  ${device.tabletLandscape} {
    padding: 48px 0 0 48px;
  }

  ${device.desktop} {
    padding: 56px 0 0 172px;
  }

  ${device.ultraWide} {
    padding: 70px 0 0 229px;
  }
`;

export const HeroTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
  padding: 16px 16px 0 16px;

  ${device.mobile} {
    font-size: 28px;
  }
  
  ${device.tablet} {
    width: 400px;
    font-size: 32px;
    text-align: left;
    padding: 0;
    margin: 0 0 24px 0;
  }

  ${device.tabletLandscape} {
    width: 465px;
    font-size: 38px;
    margin: 0 0 32px 0;
  }

  ${device.desktop} {
    width: 532px;
    font-size: 42px;
  }

  ${device.ultraWide} {
    width: 715px;
    font-size: 56px;
    margin: 0 0 50px 0;
  }
`;

export const HeroImg = styled.img`
  width: 290px;
  margin-right: 46px;

  ${device.mobile} {
    width: 360px;
    min-width: 340px;
    padding: 0 18px;
  }

  ${device.tablet} {
    margin-right: 0;
    position: absolute;
    top: -13px;
    right: -215px;
    width: 526px;
    padding: 0;
  }

  ${device.tabletLandscape} {
    top: -33px;
    right: -148px;
    width: 640px;
  }

  ${device.desktop} {
    top: -33px;
    right: 9px;
    width: 740px;
  }
  
  ${device.ultraWide} {
    top: -33px;
    width: 1006px;
  }
`;

export const HeroSubTitle = styled.p`
  min-width: 288px;
  text-align: center;
  font-weight: 400;
  opacity: 0.8;
  line-height: 140%;
  margin:  0 16px 24px 16px;

  ${device.mobile} {
    width: 343px;
    margin: 0 16px 32px 16px;
  }

  ${device.tablet} {
    width: 430px;
    text-align: left;
    margin-left: 0;
    margin-bottom: 34px;
    font-size: 17px;
  }

  ${device.tabletLandscape} {
    width: 522px;
    margin-bottom: 48px;
    font-size: 18px;
  }

  ${device.desktop} {
    width: 532px;
    font-size: 20px;
    margin-bottom: 56px;
  }

  ${device.ultraWide} {
    width: 708px;
    font-size: 26px;
    margin: 0 0 70px 0;
  }
`;

