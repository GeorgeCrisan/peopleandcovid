import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink, orange, grey, blue, green, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment';
import { css } from 'emotion';
import { Story } from './Views/StoriesList';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import FacebookShareButton from 'react-share/lib/FacebookShareButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterShareButton from 'react-share/lib/TwitterShareButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: blue[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: red[400],
    },
  }
});

let timeOut: any;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    background: grey[50],
    margin: "16px 0 16px 0",
  },
  typography: {
    padding: theme.spacing(2),
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    '&:hover': {
      borderRadius: 0,
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),

  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatarAny: {
    backgroundColor: orange[500],
  },
  avatarMale: {
    backgroundColor: blue[500],
  },
  avatarFemale: {
    backgroundColor: pink[500],
  }
}));


type Props = {
  story: Story,
  storyDetail: boolean
};

const StoryBox: React.FC<Props> = ({ story, storyDetail = false }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const [open, setOpen] = React.useState(false);
  const [messageType, setMessageType] = React.useState<string>('one');

  const handleClickPoper = (event: { currentTarget: any; }) => {
    clearTimeout(timeOut);
    setOpen(!open);


    setMessageType(event.currentTarget.id);

    timeOut = setTimeout(() => {
      setOpen(false);
    }, 2000);

    setAnchorEl(event.currentTarget);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        style={{ marginBottom: 0, paddingBottom: 0, display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' }}
        avatar={
          <Avatar style={{ fontFamily: '"Fira Sans", sans-serif' }} aria-label="recipe" className={story.data.gender === 'other' ? classes.avatarAny : story.data.gender === 'male' ? classes.avatarMale : classes.avatarFemale}>
            {story.data.gender === 'other' ? 'O' : story.data.gender === 'male' ? 'M' : 'F'}
          </Avatar>
        }
        title={<h3 className={storyHeader2} >{`Story by ${story.data.name}`}</h3>}
        subheader={
          story.data.createdat?.seconds ?
            moment(new Date(story.data.createdat.seconds * 1000)).format('Do MMMM YYYY')
            :
            moment().format('Do MMMM YYYY')
        }
        action={<div style={{ color: grey[700], marginTop: 12 }}>
          {(story.data.country || story.data.city) &&
            <div className={locationDesk}>
              <div className={location}>
                <p style={{ fontSize: 14 }}>
                  <LocationOnIcon style={{ fontSize: 16, position: 'relative', top: 4 }} />{`${story.data.country}, ${story.data.city}`}
                </p>

              </div>
              <p className={location} style={{ fontSize: 10, marginTop: 8 }} > Story ID: {story.id} </p>

            </div>}
        </div>}
      />
      <CardContent style={{ marginTop: 0 }} >
        <h2 className={storyDetail ? storyDetailStyle : storyHeader}> {story.data.title} </h2>
        <Typography className={!storyDetail ? clampText : 'noclass'} variant="body2" color="textSecondary" component="p">
          {story.data.storytext}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleClickPoper} id='one' aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <Popper style={{ marginBottom: 16, maxWidth: 300 }} id={'noneid'} placement='top' open={open} anchorEl={anchorEl}>

          <Paper>
            <Typography className={classes.typography}> {messageType === 'one' ? "Comming soon." : "The story has been reported and will be reviewed by a moderator."} </Typography>
          </Paper>

        </Popper>

        <TwitterShareButton style={{ width: 24, height: 24, margin: 'auto 10px' }} title='Share your story' hashtags={['#covid19']} url={`https://peopleandcovid.web.app/story/${story.id}`}>
          <TwitterIcon style={{ color: 'rgb(29, 161, 242)' }} />
        </TwitterShareButton>

        <FacebookShareButton style={{ width: 24, height: 24, margin: 'auto 10px' }} hashtag='#covid19' url={`https://peopleandcovid.web.app/story/${story.id}`} >
          <FacebookIcon style={{ color: '#4267B2' }} />
        </FacebookShareButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <span className={storyHeader2} style={{ fontSize: 14, color: '#4267B2', margin: 0, padding: 0 }} > {!expanded ? 'More' : <span className={rotate} >Less</span>} </span>
          <ExpandMoreIcon style={{ color: "rgba(3, 168, 124, 1)" }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between' }}>
              {false && <Button onClick={() => { console.log('hi1'); }} size='small' variant="contained" color='secondary' >
                <span style={{ color: '#fff' }} >Donate</span>
              </Button>}

              <Button onClick={handleClickPoper} id='two' size='small' variant="contained" color='secondary' >
                <span style={{ color: '#fff' }} >Report</span>
              </Button>

              {!storyDetail ?
                <Link style={{ textDecoration: 'none', marginLeft: "auto" }} to={`./story/${story.id}`}>
                  <Button size='small' variant="contained" color='primary' >
                    <span style={{ color: '#fff' }} >Read full story</span>
                  </Button>
                </Link>
                :
                <Link style={{ textDecoration: 'none', marginLeft: "auto" }} to={`../`}>
                  <Button size='small' variant="contained" color='primary' >
                    <span style={{ color: '#fff' }} >Go To Stories</span>
                  </Button>
                </Link>
              }
            </div>
          </ThemeProvider>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const storyHeader = css`
    font-family: 'Fira Sans', sans-serif;
    color: #344;
    padding-right: 16px;
    text-align: left;
`;

const clampText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const location = css`
    text-align: right;
    width: 300px;
    font-family: 'Fira Sans', sans-serif;
    color: #344;
    padding: 0;
    p {
      text-align: right;
      font-family: 'Fira Sans', sans-serif;
      color: #344;
      padding: 0;
      margin: 0;
    }
`;

const storyHeader2 = css`
    font-family: 'Fira Sans', sans-serif;
    color: #444;
    font-size: 16px;
    padding-right: 16px;
    margin: 0 0px;
`;

const storyDetailStyle = css`
  font-family: 'Fira Sans', sans-serif;
  color: #344;
  padding-right: 16px;
  text-align: center;
`;

const locationDesk = css`
  display: none;
  @media (min-width: 540px) {
    display: flex;
    flex-flow: column;
    padding-right: 16px;
  }
  
`;

const rotate = css`
  transform: rotate(180deg);
  display: block;
`;

export default StoryBox;