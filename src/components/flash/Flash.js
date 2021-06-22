import {Component} from 'react'
import {connect} from 'react-redux';
import {removeMessage} from '../store/actions/messageActions';
class Flash extends Component{
    constructor(props) {
        super(props);
        this.state = {message: '', visibility: false, type: ''}
    }

    componentDidMount(){
            this.setState({visibility: true});
            this.setState({message: this.props.message})
            this.setState({type:this.props.type})
            setTimeout(() => {
                this.setState({visibility: false});
                this.props.removeMessage();
            }, 3000)
    }


    render(){
        return (
            this.state.visibility && <div className={`mt-5  alert alert-${this.state.type}`}>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.message.message,
        type: state.message.type
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeMessage: () => dispatch(removeMessage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flash);