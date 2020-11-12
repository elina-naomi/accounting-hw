import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {editAction} from "../actions/editUserActions";
import EditUser from "../components/EditUser";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editUser: editAction
    },dispatch)
}

function mapStateToProps(state) {
    return {
        user: state.userInfo,
        message: state.message
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditUser);