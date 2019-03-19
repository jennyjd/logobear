import React from 'react';
import { connect } from 'react-redux';
import JogItem from '../../../components/JogItem';
import { requestGetJogs } from '../../../actions';
import * as styles from './styles.module.scss';

class Main extends React.Component {
  componentDidMount() {
    this.props.getJogs();
  }

  render() {
    return (
      <div className={}>
        {this.props.jogs.slice(0, 10).map(jog => (
          <JogItem key={jog.id} jog={jog} />
        ))}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    jogs: state.jogs.data,
  }),
  {getJogs: requestGetJogs}
)(Main);
