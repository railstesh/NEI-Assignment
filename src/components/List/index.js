import { Grid, Paper } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listData } from '../../common/listData';
import { requestList } from '../../redux/actions';

const ListForm = React.lazy(() => import('./ListForm'));

const styles = {
  Paper: {
    padding: 20,
    margin: 'auto',
    textAlign: 'center',
    width: 600,
  },
};

const List = () => {
  const dispatch = useDispatch();

  const { lists, isLoading } = useSelector((state) => state.listReducer); // data get from list reducer

  useEffect(() => {
    getLists();
  }, []);

  const getLists = () => {
    dispatch(requestList(listData));
  };

  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12} style={styles.Paper}>
          <Paper elevation={4} style={styles.Paper}>
            <ListForm lists={lists} isLoading={isLoading} />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default List;
