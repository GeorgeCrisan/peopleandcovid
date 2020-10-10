import React, {useState, useEffect} from 'react';
import {FormControl, InputLabel, Select, TextField, MenuItem, } from '@material-ui/core';
import { css } from "emotion";

interface FormState  {
  name: string;
  gender: string;
  title: string;
  storytext: string;
  country: string;
  city: string;

};

function ShareYourStory() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    gender: 'other',
    title: '',
    storytext: '',
    country: '',
    city: ''
  });

  return (

    <div className={formWrapper}>
      <form className={""} noValidate autoComplete="off">
        <TextField id="outlined-basic" value={formState.title} label="Story Title" variant="outlined" />
        <TextField
          style={{width: "100%"}}
          id="outlined-multiline-static"
          label="Story text"
          multiline
          rows={6}
          value={formState.storytext}
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Name (optional)" variant="outlined" />
        <FormControl variant="outlined" className={''}>
        <InputLabel id="demo-simple-select-outlined-label">Sex</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={formState.gender}
          onChange={( e:any )=>setFormState((prevState) => { return {...prevState, gender: e.target.value};})}
          label="Age"
        >
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" value={formState.country} label="Country (Optional)" variant="outlined" />
      <TextField id="outlined-basic" value={formState.city} label="City (Optional)" variant="outlined" />
      </form>
    </div>

  );
} 

export default ShareYourStory;

const formWrapper = css`
  margin: 32px auto;
  padding: 0 16px;
  width: 100%;
  max-width: 800px;
`;