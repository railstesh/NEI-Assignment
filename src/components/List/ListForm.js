import {
  Card,
  CardActions,
  CardContent,
  createMuiTheme,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core';

import {
  AccessAlarm,
  CheckBoxOutlineBlank,
  EmailRounded,
  CallRounded,
  ArrowDropUp,
} from '@material-ui/icons';

var styles = {
  Paper: {
    margin: 'auto',
    padding: 10,
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    width: 500,
    borderRadius: 15,
    backgroundColor: '',
  },
  arrowIcon: {
    color: '#fff',
    fontSize: '60px',
    marginTop: '-44px',
  },
};

export const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        '& .hidden-button': {
          display: 'none',
          position: 'absolute',
          zIndex: '9',
          top: 48,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
        },
        '&:hover .hidden-button': {
          display: 'flex',
        },
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const ListForm = ({ lists, isLoading }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        <Paper elevation={7} style={styles.Paper}>
          <h4>Loading</h4>
        </Paper>
      ) : lists && lists.length > 0 ? (
        lists.map((item, key) => {
          const colorCode =
            item.event === 'Warmup'
              ? 'red'
              : item.event === '1:1'
              ? 'green'
              : 'blue';
          return (
            <Card className={classes.root} className="event-color">
              <div
                className={`event event-${
                  item.event === '1:1' ? 1 : item.event
                }`}
              >
                <CardContent>
                  <Typography component="div">
                    <Box
                      textAlign="center"
                      color="#ffff"
                      fontWeight="fontWeightBold"
                    >
                      {item.name}
                    </Box>
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="hidden-button">
                    <Paper elevation={7} style={styles.Paper}>
                      <ArrowDropUp style={styles.arrowIcon} />

                      <Typography component="div">
                        <Box textAlign="left" fontWeight="fontWeightBold">
                          {item.name}
                        </Box>
                      </Typography>

                      <Typography component="div">
                        <Box textAlign="left">
                          <IconButton>
                            <CheckBoxOutlineBlank
                              style={{
                                background: colorCode,
                                color: colorCode,
                              }}
                            />
                          </IconButton>
                          {item.event}
                        </Box>
                      </Typography>
                      <Typography paragraph>
                        <Box textAlign="left">
                          <IconButton area-label="alarm">
                            <AccessAlarm />
                          </IconButton>
                          {item.time.start} : {item.time.end}
                        </Box>
                      </Typography>

                      <Typography component="div">
                        <Box textAlign="left" fontWeight="fontWeightBold">
                          Contact Details :
                        </Box>
                      </Typography>

                      <Typography component="div">
                        <Box textAlign="left">
                          <IconButton>
                            <CallRounded />
                          </IconButton>
                          {item.phoneNumber}
                        </Box>
                      </Typography>

                      <Typography component="div">
                        <Box textAlign="left">
                          <IconButton area-label="alarm">
                            <EmailRounded />
                          </IconButton>
                          {item.email}
                        </Box>
                      </Typography>
                    </Paper>
                  </div>
                </CardActions>
              </div>
            </Card>
          );
        })
      ) : (
        <h4>No list found</h4>
      )}
    </ThemeProvider>
  );
};

export default ListForm;
