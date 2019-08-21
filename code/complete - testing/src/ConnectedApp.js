import App from './App';
import { dispatch, connect } from 'react-redux';
import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';

export default connect(mapStateToProps,mapDispatchToProps)(App);