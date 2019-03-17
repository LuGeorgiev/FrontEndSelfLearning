import React,{Component} from 'react';
import observer from '../../infrastructure/observer';
import '../../styles/notifications.css';

const DEFAULT_STATE = {
    message:'',
    success:'',
    error:'',
    loading: ''
}

export default class Notification extends Component{
    constructor(props){
        super(props);
        this.state = DEFAULT_STATE;

        observer.subscribe(observer.events.notification, this.so);
    }

    showNotification = (data)=>{
        let message = data.message;
        let type = data.type;
        this.setState({[type]:type,message:message})
    }
    hideNotification = event =>{
        this.setState(DEFAULT_STATE);
    }

    render =()=>{
        let notificationId ;
        if (this.state.success) {
            notificationId='successBox';
        } else if(this.state.error){
            notificationId = 'errorBox';
        } else if( this.state.loaging){
            notificationId = 'loadingBox';
        }

        if (this.state.message) {
            return (            
                <div id={notificationId} className="notification"><span>{this.state.message}}</span></div>
            )            
        } else {
            return null;
        }
    }

}