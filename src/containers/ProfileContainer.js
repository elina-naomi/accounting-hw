import {connect} from "react-redux";
import Profile from "../components/Profile";
import {bindActionCreators} from "redux";
import {loginAction} from "../actions/loginActions";

function mapStateToProps(state) {
    return {
        user: state.userInfo,
        message: state.message
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: loginAction
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);