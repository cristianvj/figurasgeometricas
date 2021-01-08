import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
  body:{
    padding: '0 4rem',
  },
  header: {
    textAlign: 'center',
    '& h1': {
      color: '#f54a3d',
      margin: '5vh 0 0 0',
      fontSize: '3rem',
      fontWeight: '300',
      '& span': {
        fontWeight: '700'
      }
    },
    '& h2': {
      color: '#61686b',
      fontSize: '0.75rem',
      fontWeight: '300'
    }
  }
})