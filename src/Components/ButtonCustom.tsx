import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles<any>({
  button: {
    background: "rgba(20,20,20,0.4)",
    border: "2px solid rgba(3, 168, 124, 1)",
    borderRadius: 5,
    marginBottom: 16,
    color: 'rgba(3, 168, 124, 1)',
    height: 48,
    padding: '0 30px',
    textDecoration: 'none'
  },
  blue: {
    border: "2px solid #004080",
    background: '#004080',
    color: 'white',
    minWidth: "240px",
    textTransform: 'capitalize',
    "&:hover, &:focus": {
      background: "rgba(0, 100,200,0.2)",
      color: '#004080'
    }
  }
});


type CustomBProps = {
  children: string,
  size: string,
  variant: string,
  color: string,
  onClick: (event:React.MouseEvent) => void
};

function CustomButton(props: CustomBProps) {
  const classes = useStyles();
  return (
    <Button onClick={(event) => { props.onClick(event)}} variant="outlined" size="large" className={clsx(classes.button, classes[props.color] ?? null )}> {props.children} </Button>
  );
}

export default CustomButton;