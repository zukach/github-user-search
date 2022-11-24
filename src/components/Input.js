import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'
import search from '../assets/icon-search.svg'

function Input(props) {
  const [input, setInput] = useState("");
  const handleChange = event => {
    setInput(event.target.value);
  }

  const handleClick = () => {
    axios({
      method: 'get',
      url: `https://api.github.com/users/${input}`,
    })
      .then(function (response){
        props.setInfo(response.data);
        console.log(response.data);
      })
  }

  return (
    <InputHolder modeStatus={props.modeStatus}>
      <img src={search}/>
      <Search onChange={handleChange} modeStatus={props.modeStatus} type="text" placeholder='Search Github username'/>
      <SearchButton onClick={handleClick} modeStatus={props.modeStatus}>Search</SearchButton>
    </InputHolder>
  )
}
const InputHolder = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  width: 100%;
  background-color: ${(props) => (props.modeStatus ? "#1E2A47" : "#FFF")};
  border-radius: 10px;
  &>img{
    width: 20px;
    height: 20px;
    margin-left: 16px;
  }
`;

const Search = styled.input`
  height: 60px;
  font-size: 13px;
  font-weight: 400;
  border: none;
  background-color: ${(props) => (props.modeStatus ? "#1E2A47" : "#FFF")};
  ::placeholder{
    text-align: center;
    color: ${(props) => (props.modeStatus ? "#FFF" : "#4B6A9B")};
    font-size: 13px;
  }
`;

const SearchButton = styled.button`
  width: 84px;
  height: 50px;
  background-color: #0079FF;
  border-radius: 10px;
  border: none;
  margin-right: 7px;
  font-size: 14px;
  font-weight: 700;
  color: #FFF;
`;

export default Input