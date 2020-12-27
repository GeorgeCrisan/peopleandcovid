import Paper from '@material-ui/core/Paper';
import { css } from 'emotion';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
    margin: '32px auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    color: 'rgba(3, 168, 124, 1)',
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AboutView() {
  const classes = useStyles();

  return (
    <div style={{ padding: '0px 16px' }}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <h1 className={titleStyle}> Disclaimer for People And Covid </h1>
          <Typography className={classes.title} color="textSecondary" gutterBottom>

            <p style={{ fontSize: 20, textDecoration: 'underline' }} > If you require any more information or have any questions about our site, please feel free to contact me by email at georgerdp@gmail.com.
            Please use this email address if you want your story to be removed or amended.
            </p>
            <h3 className={titleStyle}> Disclaimers for peopleandcovid.info</h3>

            All the information on this website - peopleandcovid.info - is published in good faith and for general information purpose only. peopleandcovid.info does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (peopleandcovid.info), is strictly at your own risk. peopleandcovid.info will not be liable for any losses and/or damages in connection with the use of our website.

            <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
            </p>
            Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information. Our Privacy Policy was created by the Privacy Policy Generator.

            Consent
            By using our website, you hereby consent to our disclaimer and agree to its terms.

            Update
            Should we update, amend or make any changes to this document, those changes will be prominently posted here.
        
          <p style={{fontSize: 20}}> Thank you for visiting and stay safe! </p>
        </Typography>
        </CardContent>
      </Card>
    </div >
  );
}


const paperStyle = css`
  margin: auto;
  background: grey;
`;

const titleStyle = css`
  font-familiy: "Fira Sans", sans-serif;
  color: rgba(3, 168, 124, 1);
  text-align: center;
`;

