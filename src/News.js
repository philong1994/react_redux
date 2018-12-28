import React, { Component } from 'react';
import { connect } from 'react-redux';
class News extends Component {
    // useEditStatusInstore = () => {
    //     var dispatch = this.props.dispatch;
    //     dispatch({type:'CHANGE_EDIT_STATUS'})
    // }
    render() {
        return (
            <div>
                NEWS
                <button onClick={()=>this.props.useEditStatusInstore()}>Click đi</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInstore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(News);