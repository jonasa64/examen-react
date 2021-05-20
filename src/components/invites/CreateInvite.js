import {Component} from 'react'
import {createNewInvite} from '../store/actions/inviteActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {storage} from '../../config/config';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateInvite extends Component{
    constructor(props) {
        super(props);
        this.state = {title: '', date: '', location: '', image: '', description: ''}
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

    onChangeImageHandler =  async e => {
        await this.uploadImage(e.target.files[0])
    }

    onChangeHandler = e => {
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value
        });
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.props.createNewInvite(this.state)
    }

    render(){
        if(!this.props.user){
            return <Redirect to="/login"/>
        }
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <form onSubmit={this.onSubmitHandler.bind(this)}  encType="multipart/form-data">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="title">Title (requried)</label>
                            <input name="title" className='form-control' type="text" id="title" value={this.state.title}
                                   onChange={this.onChangeHandler.bind(this)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="date">Date (requried format 2021-05-16)</label>
                            <input name="date" className='form-control' type="text" id="date" value={this.state.date}
                                   onChange={this.onChangeHandler.bind(this)}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="location">Location (requried)</label>
                            <input name="location" className='form-control' type="text" id="location" value={this.state.location}
                                   onChange={this.onChangeHandler.bind(this)}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="desc">Description (Optional)</label>
                            <textarea name="description" className='form-control' id="desc" rows="3" cols="6" onChange={this.onChangeHandler.bind(this)}>{this.state.description}</textarea>
                        </div>
                        <div className='mb-3'>
                            <label className="form-label" htmlFor="image">Image (Optional)</label>
                            <input  onChange={this.onChangeImageHandler.bind(this)} type="file" id="image"/>
                        </div>


                        <button className="btn btn-primary" type="submit">New Invitation</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStatToProps = state => {
    console.log(state);
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createNewInvite: (data) => dispatch(createNewInvite(data))
    }
}


export default connect(mapStatToProps, mapDispatchToProps)(CreateInvite);