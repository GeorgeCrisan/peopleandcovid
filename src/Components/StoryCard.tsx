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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    background: grey[50],
    margin: "16px 0 16px 0",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
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
  const [expanded, setExpanded] = React.useState(true);
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
          <h2 className={ storyDetail ? storyDetailStyle : storyHeader}> {story.data.title} </h2>
          <Typography className={clampText} variant="body2" color="textSecondary" component="p">
            {story.data.storytext}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
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
                <Button size='small' variant="contained" color='secondary' >
                    <span style={{ color: '#fff' }} >Report</span>
                  </Button>
                {!storyDetail && <Link style={{ textDecoration: 'none',  marginLeft: "auto" }} to={`./story/${story.id}`}>
                  <Button size='small' variant="contained" color='primary' >
                    <span style={{ color: '#fff' }} >Read full story</span>
                  </Button>
                </Link>}
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

export default StoryBox;