import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  margin: 0px;
  border: 0px;
  padding: 0px;
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    padding: 15px;
    background: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 10px;
    box-sizing: border-box;
    transition: all 0.2s;
  }
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

export const PaperDiv = styled(Paper)`
  width: 350px;

  position: relative;
  padding: 17px;
  margin: 0 0 10px;
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  transition: all 0.2s;
`;

export const Input = styled.input`
  width: 100%;
  outline: 0;
  padding: 9px 10px;
  font-size: 13px;
  background: #fff;
  border: 1px solid #b3b3b3;
  -webkit-appearance: none;
  transition: all 0.4s;
  font-weight: 400;
  font-family: Roboto, sans-serif !important;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Label = styled.p`
  font-family: Roboto, sans-serif !important;
  font-size: 11px;
  color: #4d4d4d;
  font-weight: 700;
`;

export const Botao = styled(Button)`
  background-color: #999 !important;
  color: #fff !important;
  border: 0;
  text-align: center;
  line-height: normal;
  border-radius: 5px;
  margin: 0px 0px 0px 5px;

  font-size: 12px;
  font-family: Roboto, sans-serif !important;
`;
