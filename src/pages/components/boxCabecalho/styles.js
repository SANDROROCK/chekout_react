import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
`;
export const Titulo = styled.h2`
  font-family: "Roboto", "sans-serif";
  position: relative;
  padding: 0 30px 0 35px;
  box-sizing: border-box;
  color: #725bc2 !important;
  font-size: 20px;
  margin-top: 20px;
`;
export const Descricao = styled.p`
  justify-content: center;
  color: #999 !important;
  font-size: 11px;
  font-family: "Roboto", "sans-serif";
  margin: 10px 0px 0px;
  line-height: 14px;
`;

export const Num = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20px;
  left: 10px;
  margin-right: 20px;
  line-height: 23px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  box-sizing: border-box;
  background: #725bc2;
  border-color: #725bc2 !important;
  color: #fff;
`;
