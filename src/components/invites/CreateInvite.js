import {Component} from 'react'
import {createNewInvite} from '../store/actions/inviteActions';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateInvite extends Component{
    constructor(props) {
        super(props);
        this.state = {title: '', date: '', location: '', image: '', description: ''}
    }

    onChangeTitleHandler = e => {
        this.setState({title: e.target.value})
    }

    onChangeDateHandler = e => {
        this.setState({date: e.target.value})
    }

    onChangeLocationHandler = e => {
        this.setState({location: e.target.value})
    }

    onChangeDescHandler = e => {
        this.setState({description: e.target.value})
    }

    onChangeImageHandler = e => {
        this.setState({image: e.target.files[0]})
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.props.createNewInvite(this.state)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmitHandler.bind(this)}  encType="multipart/form-data">
                    <div className="mb3">
                        <label className="form-label" htmlFor="title">Title (requried)</label>
                        <input className='form-control' type="text" id="title" value={this.state.title}
                               onChange={this.onChangeTitleHandler.bind(this)}/>
                    </div>
                    <div className="mb3">
                        <label className="form-label" htmlFor="date">Date (requried format 2021-05-16)</label>
                        <input className='form-control' type="text" id="date" value={this.state.date}
                               onChange={this.onChangeDateHandler.bind(this)}/>
                    </div>

                    <div className="mb3">
                        <label className="form-label" htmlFor="location">Location (requried)</label>
                        <input className='form-control' type="text" id="location" value={this.state.location}
                               onChange={this.onChangeLocationHandler.bind(this)}/>
                    </div>

                    <div className="mb3">
                        <label className="form-label" htmlFor="desc">Description (Optional)</label>
                        <textarea className='form-control' id="desc" rows="3" cols="6" onChange={this.onChangeDescHandler.bind(this)}>{this.state.description}</textarea>
                    </div>
                     <div className='mb3'>
                         <label className="form-label" htmlFor="image">Image (Optional)</label>
                         <input  onChange={this.onChangeImageHandler.bind(this)} type="file" id="image"/>
                     </div>


                    <button className="btn btn-primary" type="submit">New Invitation</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createNewInvite: (data) => dispatch(createNewInvite(data))
    }
}


export default connect(null, mapDispatchToProps)(CreateInvite);