import React, {useState, useEffect} from 'react';
import {FormControl, InputLabel, Select, TextField, MenuItem, Button, Paper} from '@material-ui/core';
import { css , cx} from "emotion";
import formImage from '../../images/story-form.jpg';
import formImage2 from '../../images/story-form2.jpg';
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
    <>
      <div className={cx(banner,banner2)} >

        <div className={insideBanner}>
          <p className={mainP} >
            Tell the world how you feel, share your thoughts, be yourself. </p>
          <p className={secP} > 
            You do not have to provide personal or sensitive
            informations if you don't want to.
          </p>
          <p className={secP}  > All the stories are moderated before are being listed publicly. 
          </p>
        </div>
      </div>
      <Paper variant='outlined' className={formWrapper}>
        <FormControl style={{padding: "32px 16px 16px 16px", width: "100%", boxSizing: 'border-box'}}   variant="outlined">
          <TextField  id="outlined-basic" value={formState.title} label="Story Title" variant="outlined" />
        </FormControl>

        <FormControl style={{padding: "16px 16px 0 16px" , width: "100%", boxSizing: 'border-box'}} variant="outlined">
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
          <TextField className={formField} style={{ boxSizing: 'border-box', marginTop: 16}} id="outlined-basic" label="Name (optional)" variant="outlined" />
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
        </div>
        <div className={formFooter} >
        <FormControl  className={formField} style={{padding: "0 16 0 0", marginTop: 16}}   variant="outlined">
            <TextField id="outlined-basic" value={formState.country} label="Country (Optional)" variant="outlined" />
          </FormControl>
          <FormControl  className={formField} style={{padding: "0 16 0 0", marginTop: 16 }}   variant="outlined">
            <TextField id="outlined-basic" value={formState.city} label="City (Optional)" variant="outlined" />
          </FormControl>
        </div>
      <div className={formButtons}>
        <Button style={{height: 46, marginBottom: 16, minWidth: 200}} color='secondary' variant='outlined'> Cancel </Button>
        <ButtonCustom onClick={(event)=> null } variant='outlined' size='large' color='default' > Submit your story </ButtonCustom>
      </div>
    </Paper>
    <div className={banner} style={{marginBottom: 16}}>
        <p className={mainP}   >
          Sometimes it helps to know how other feel and sometimes is nice to be able to express yourself.</p>
        <p className={secP} > 
          You do not have to provide personal or sensitive
          informations if you don't want to.
        </p>
        <p className={secP} style={{marginBottom: 16}}  > All the stories are moderated before are being listed publicly. 
        </p>
      </div>
    </>
  );
} 

export default ShareYourStory;

const insideBanner = css`
  margin: auto;
  width: 90%;
`;

const banner = css`
  max-width: 800px;
  margin: auto;
  height: 280px;
  padding: 16px;
  background-image: url(${formImage});
  background-size: cover;
  background-position: 50%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
  box-sizing: border-box; 
  position: relative;
    z-index: 1;
    &:after {
      display: block;
      content: ' ';
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(0,30,30,0.5);
    }
`;

const banner2 = css`
  background-image: url(${formImage2});
`;

const formWrapper = css`
  margin: 16px auto;
  box-sizing: border-box;
  background: #f8f8f8;
  border-radius: 5px;
  width: 100%;
  max-width: 800px;
`;

const formFooter = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 16px 0 16px;
  box-sizing: border-box;
  flex-flow: column;
  @media (min-width: 540px) {
    flex-flow: row nowrap;
  }
`;

const formField = css`
width: 100%;
@media (min-width: 540px) {
  width: 45%;
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


const mainP = css`
  color: #fff;
  padding: 0 0 16px 0;
  font-size: 20px;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  text-shadow: 1px 0px 0px #555;
  position: relative;
  z-index: 5;
`;

const secP = css`
color: #fff;
padding: 16px 0 0 0;
margin: 0 0 0 0;
font-size: 14px;
text-align: center;
font-family: "Fira Sans", sans-serif;
textShadow: 1px 0px 0px #555;
position: relative;
z-index: 5;
`;