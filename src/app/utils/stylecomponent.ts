"use client";
import styled from "styled-components";

export const StyledComponentWithParams = styled.div<{
  Row?: string;
  Column?: string;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.Column}, 1fr);
  grid-template-rows: repeat(${(props) => props.Row}, 1fr);
  grid-gap: 10px;
  margin-top: 30px;
`;

export const StyledPageLayout = styled.div`
 margin: 5px;
 box-sizing: border-box;
 box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
export const StyledSelectCurrecies = styled.div`
  display: block;
  text-align: center;
  color: white;
  background-color: black;
  font-size: large;
  padding: 5px;
  border-radius: 3px;
  margin-top: o.9em;
  align-self: center;
  margin-bottom: 1em;
`
export const StyledSelectRowColumn = styled.div`
display: block;
  text-align: left;
  font-size: large;
  padding: 5px;
  border-radius: 3px;
  margin: o.9em 0.9;
 
`