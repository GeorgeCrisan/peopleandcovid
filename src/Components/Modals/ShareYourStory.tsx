import React, {useState, useEffect} from 'react';
import {FormControl, InputLabel, Select, TextField, MenuItem, Button, } from '@material-ui/core';
import { css } from "emotion";
//import formImage from '../../images/story-form.jpg';
import ButtonCustom from '../ButtonCustom';

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
        <FormControl style={{padding: 16, width: "100%", boxSizing: 'border-box'}}   variant="outlined">
          <TextField  id="outlined-basic" value={formState.title} label="Story Title" variant="outlined" />
        </FormControl>

        <FormControl style={{padding: 16, width: "100%", boxSizing: 'border-box'}} variant="outlined">
          <TextField
            id="outlined-multiline-static"
            label="Your Story"
            multiline
            rows={6}
            value={formState.storytext}
            variant="outlined"
          />
        </FormControl>
        
        <div className={formFooter}>
          <TextField style={{ boxSizing: 'border-box', marginTop: 16}} id="outlined-basic" label="Name (optional)" variant="outlined" />
          <FormControl style={{ minWidth: 200, marginTop: 16 }}   variant="outlined">
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
          <FormControl style={{padding: "0 16 0 0", marginTop: 16 }}   variant="outlined">
            <TextField id="outlined-basic" value={formState.country} label="Country (Optional)" variant="outlined" />
            <TextField style={{marginTop: 16}} id="outlined-basic" value={formState.city} label="City (Optional)" variant="outlined" />
          </FormControl>
        </div>
      <div className={formButtons}>
        <Button style={{height: 46, marginBottom: 16, minWidth: 200}} color='secondary' variant='outlined'> Cancel </Button>
        <ButtonCustom onClick={(event)=> null } variant='outlined' size='large' color='default' > Submit your story </ButtonCustom>
      </div>
    </div>

  );
} 

export default ShareYourStory;

const formWrapper = css`
  margin: 16px auto;
  box-sizing: border-box;
  background: #f8f8f8;
  width: 100%;
  max-width: 800px;
`;

const formFooter = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  flex-flow: column;
  @media (min-width: 540px) {
    flex-flow: row nowrap;
  }
`;

const formButtons = css`
  display: flex;
  margin: 32px;
  flex-flow: column;
  justify-content: space-around;
  @media (min-width: 540px) {
    flex-flow: row nowrap;
  }
`;