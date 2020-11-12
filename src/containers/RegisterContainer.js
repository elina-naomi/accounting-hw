import {bindActionCreators} from "redux";
import {loginAction} from "../actions/loginActions";
import {connect} from "react-redux";
import Register from "../components/Register";
import {registerAction} from "../actions/registerActions";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        register: registerAction
    },dispatch)
}

function mapStateToProps(state) {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);