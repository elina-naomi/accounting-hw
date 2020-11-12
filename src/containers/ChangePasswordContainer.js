import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {editAction} from "../actions/editUserActions";
import EditUser from "../components/EditUser";
import ChangePassword from "../components/ChangePassword";
import {changePasswordAction} from "../actions/changePasswordActions";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changePassword: changePasswordAction
    },dispatch)
}

function mapStateToProps(state) {
    return {
        user: state.userInfo,
        message: state.message
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword);