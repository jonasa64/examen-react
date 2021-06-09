import {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {updateInvite,createNewInvite} from '../store/actions/inviteActions';
import {setMessage} from '../store/actions/messageActions';
import Resizer from "react-image-file-resizer";
import DatePicker from "react-datepicker";
import {storage} from '../../config/config';
import parse from 'date-fns/parse'
import "react-datepicker/dist/react-datepicker.css";
class UpdateInvite extends Component{
    constructor(props) {
        super(props);
        this.state = {title: '', date: new Date(), location: '', image: '', description: ''}
    }

    componentDidMount(){
        console.log(this.props);
        if(this.props.invite && this.props.match.params.id){
            this.setState({title: this.props.invite.title})
            this.setState({date: parse(this.props.invite.date, 'yyyy-MM-dd', new Date())})
            this.setState({location: this.props.invite.location})
            this.setState({image: this.props.invite.image})
            this.setState({description: this.props.invite.description})
        }
    }

    uploadImage = file => {
        if(this.validateImage(file.name.split('.').pop())){
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
        } else {
            this.props.setMessage('Allowed images are png, jpg or jpeg', 'danger')
        }

    }

    onChangeImageHandler = async e => {
        if(e.target.files[0]){
            const image = await this.resizeFile(e.target.files[0]);
            await this.uploadImage(image)
        }
    }

    onChangeHandler = e => {
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value
        });
    }

    validateImage = (imageExt) => {
        if(imageExt === 'png' || imageExt === 'jpg' || imageExt === 'jpeg'){
            return true;
        }

        return false;
    }

   resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                260,
                260,
                file.name.split('.').pop(),
                100,
                0,
                (uri) => {
                    resolve(uri);
                },
                "file"
            );
        });

    validateRequiredFields = () => {
        if(this.state.location === '' || this.state.date === '' || this.state.title === '' ){
            return false;
        }
        return true;
    }


    onSubmitHandler = async e => {
        e.preventDefault();
        if(this.validateRequiredFields()) {
            if(this.props.invite && this.props.match.params.id){
               await this.props.updateInvite(this.state, this.props.invite.id)
                this.props.history.push('/invtaions');
            }
            await this.props.createNewInvite(this.state);
            this.props.history.push('/invtaions');
        } else {
            this.props.setMessage('Pleas fill out all required files', 'danger')
        }
    }



    render(){

        if(!this.props.user){
            return <Redirect to="/login"/>
        }

        return (
            <div>
                <form onSubmit={this.onSubmitHandler.bind(this)}  encType="multipart/form-data">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Title (requried)</label>
                        <input name="title" className='form-control' type="text" id="title" value={this.state.title}
                               onChange={this.onChangeHandler.bind(this)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="date">Date (requried)</label>

                        <DatePicker className='form-control' id="date" selected={this.state.date} onChange={date => this.setState({date})} />
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
                        {this.state.image && <img src={this.state.image} alt={this.state.title } width="260" height="260"/>}
                        <label className="form-label" htmlFor="image">Image (Optional)</label>
                        <input  onChange={this.onChangeImageHandler.bind(this)} type="file" id="image"/>
                    </div>


                    <button className="btn btn-primary" type="submit">{this.props.match.params.id ? "Update" : "Create"} Invitation</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        invite: state.invite.invite,
        user: state.auth.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInvite: (data, id) => dispatch(updateInvite(data, id)),
        createNewInvite: (data) => dispatch(createNewInvite(data)),
        setMessage: (message, type) => dispatch(setMessage(message, type))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(UpdateInvite);