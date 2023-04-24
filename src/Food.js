import React, {useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';

function Food() {
  const { name } = useParams();
  const navigate = useNavigate()

  return navigate(`/${name}`)
}

export default Food;