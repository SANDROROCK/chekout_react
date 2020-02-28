import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
export const Container = styled.div`
  flex-wrap: nowrap;
  flex-direction: row;
  grid {
    width: 100%;
    position: relative;
    background: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 10px;
    box-sizing: border-box;
    transition: all 0.2s;
  }
  form {
    width: 100%;
    position: relative;
    background: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 10px;
    box-sizing: border-box;
    transition: all 0.2s;
  }
`;

export const Input = styled.input`
  margin-top: 8px;
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

export const Label = styled.label`
  font-family: Roboto, sans-serif !important;
  margin: 10px 10px 10px;
  font-size: 11px;
  color: #4d4d4d;
  font-weight: 700;
`;

export const Botao = styled(Button)`
  width: 100%;
  background-color: #3fc583 !important;
  color: #fff !important;
  border: 0;
  text-align: center;
  line-height: normal;
  border-radius: 5px;
  padding: 12px 0px;
  font-size: 16px;
  font-weight: 700;
`;
