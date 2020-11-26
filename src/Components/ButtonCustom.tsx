import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles<any>({
  button: {
    background: "rgba(3, 18, 14, 0.05)",
    border: "1px solid rgba(3, 168, 124, 1)",
    borderRadius: 0,
    marginBottom: 0,
    color: 'rgba(3, 168, 124, 1)',
    height: 48,
    fontFamily: '"Fira Sans", sans-serif',
    padding: '0 30px',
    textDecoration: 'none',
    width: 278,
    "&:hover, &:focus": {
      border: "5px solid rgba(3, 168, 124, 1)",
      fontWeight: "bold"
    }
  },
  blue: {
    border: "2px solid #004080",
    background: '#004080',
    color: 'white',
    minWidth: "240px",
    textTransform: 'capitalize',
    "&:hover, &:focus": {
      color: '#004080'
    }
  }
});


interface CustomBProps {
  children: string;
  size: string;
  variant: string;
  color: string,
  disabled?: boolean;
  onClick: (event:React.MouseEvent) => void
};

const CustomButton: React.FC<CustomBProps> = ({disabled, onClick, color, variant, children}) => {
  const classes = useStyles();
  return (
    <Button disabled={disabled} onClick={(event) => {onClick(event)}} variant="outlined" size="large" className={clsx(classes.button, classes[color] ?? null )}> {children} </Button>
  );
}

export default CustomButton;