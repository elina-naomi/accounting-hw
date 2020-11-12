import {bindActionCreators} from "redux";
import {loginAction} from "../actions/loginActions";
import {connect} from "react-redux";
import Login from "../components/Login";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: loginAction
    },dispatch)
}

function mapStateToProps(state) {
    return {
        message: state.message,
        user: state.userInfo
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);