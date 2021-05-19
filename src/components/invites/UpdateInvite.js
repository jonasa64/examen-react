import {Component} from 'react';
import {connect} from 'react-redux';
import {updateInvite} from '../store/actions/inviteActions';
import {storage} from '../../config/config';

class UpdateInvite extends Component{
    constructor(props) {
        super(props);
        this.state = {title: '', date: '', location: '', image: '', description: ''}
    }

    componentDidMount(){
        this.setState({title: this.props.invite.data.title})
        this.setState({date: this.props.invite.data.date})
        this.setState({location: this.props.invite.data.location})
        this.setState({image: this.props.invite.data.image})
        this.setState({description: this.props.invite.data.description})
    }

    uploadImage = file => {
        const storageRef = storage.ref().child(`recipe-images/${file.name}`);
        const metadata = {
            contentType: `image/${file.name.split('.').pop()}`,
        };
        storageRef.put(file,metadata).on('state_changed', (snap) => {

        }, (err) => {
            console.log(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            this.setState({image: url})
        })
    }

    onChangeImageHandler = async e => {
       await this.uploadImage(e.target.files[0])
    }

    onChangeHandler = e => {
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value
        });
    }

    onSubmitHandler = async e => {
        e.preventDefault();
       await this.props.updateInvite(this.state, this.props.invite.data.id)
        this.props.history.push('/invtaions');
    }


    render(){
        return (
            <div>
                <form onSubmit={this.onSubmitHandler.bind(this)}  encType="multipart/form-data">
                    <div className="mb3">
                        <label className="form-label" htmlFor="title">Title (requried)</label>
                        <input name="title" className='form-control' type="text" id="title" value={this.state.title}
                               onChange={this.onChangeHandler.bind(this)}/>
                    </div>
                    <div className="mb3">
                        <label className="form-label" htmlFor="date">Date (requried format 2021-05-16)</label>
                        <input name="date" className='form-control' type="text" id="date" value={this.state.date}
                               onChange={this.onChangeHandler.bind(this)}/>
                    </div>

                    <div className="mb3">
                        <label className="form-label" htmlFor="location">Location (requried)</label>
                        <input name="location" className='form-control' type="text" id="location" value={this.state.location}
                               onChange={this.onChangeHandler.bind(this)}/>
                    </div>

                    <div className="mb3">
                        <label className="form-label" htmlFor="desc">Description (Optional)</label>
                        <textarea name="description" className='form-control' id="desc" rows="3" cols="6" onChange={this.onChangeHandler.bind(this)}>{this.state.description}</textarea>
                    </div>
                    <div className='mb3'>
                        <label className="form-label" htmlFor="image">Image (Optional)</label>
                        <img src={this.state.image} alt={this.state.title}/>
                        <input  onChange={this.onChangeImageHandler.bind(this)} type="file" id="image"/>
                    </div>


                    <button className="btn btn-primary" type="submit">Update Invitation</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        invite: state.invite.invite,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInvite: (data, id) => dispatch(updateInvite(data, id))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(UpdateInvite);