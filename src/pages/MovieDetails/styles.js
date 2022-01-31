import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: flex;
  padding-left: 5%;
  padding-right: 5%;
  @media (max-width: 800px) {
    padding-top: 4%
  } 
`;
export const Cape = styled.img`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 320px;
  height: 450px;
  background-size: cover;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  border-radius: 8px
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
export const Gender = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

export const StarIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: yellow;
  
`;

export const HeartIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: red;
  cursor: pointer;
`;
