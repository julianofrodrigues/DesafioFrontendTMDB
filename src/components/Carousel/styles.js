import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: space-between;
  line-height: 1;
  border-radius: 25px;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

export const MovieContainer = styled.img`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  margin-left: 20%;
  color: white;
  width: 220px;
  height: 350px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const TextCarroseulNull = styled.div`

  margin-bottom: 16px;
  display: flex !important;
  width:90vw !important;
  justify-content: center;
  align-content: center;
  line-height: 1;


`;



