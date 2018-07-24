import MainbarList from '../components/MainbarList/';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    bars: state.mainbar 
})

const mapDispatchToProps = dispatch => ({
    jump: id => {console.log('ok')}
})

export default connect(mapStateToProps, mapDispatchToProps)(MainbarList);