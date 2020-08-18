import React, {useRef} from 'react';
import shortId from 'shortid';
import '../styles/components/UserPage.css';

//Axios
import ClientServerConnection from "../ConnectionServer/ClientServerConnection";


class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            constants: {
                id: 'vorobushek202',
                name: 'Vladislav',
                login: 'vl_nov',
                password: 'ne_hochyu_na_front',
            },
            toCorrect: {
                id: 'vorobushek202',
                name: 'Vladislav',
                login: 'vl_nov',
                password: 'ne_hochyu_na_front',
            },
        };
        this.newChange=this.newChange.bind(this);
    }

    async newChange(event) {
        event.preventDefault();
        const values=document.getElementsByClassName('newInput');
        console.log(values.length);
        let obj={};
        for(let i=0; i<values.length; i++){
            obj[values[i].name]=values[i].value;
        }
        await setTimeout(()=>{console.log(obj)},3000);
        const response=await ClientServerConnection.editUser({
            ...obj
        });

    }

    async componentDidMount() {
        const response=await ClientServerConnection.getUser(this.state.constants.id);
        console.log(response.data);
        this.setState({...response.data});
    }

    render() {
        const keys = Object.keys(this.state.constants);
        let i = 0;
        return (
            keys.map(key => {
                i++;
                return (
                    <div>
                        <div className='mainFieldInfo' key={shortId.generate()}>
                            <div className="taskLink">
                                <label>your {key}:</label>
                                <span>
                            <input
                                type={key !== 'password' ? 'text' : 'password'}
                                value={this.state.constants[key]}
                            />
                            </span>
                            </div>

                            <div className="taskLink" key={shortId.generate()}>
                                <label>new {key}:</label>
                                <span>
                            <input
                                className='newInput'
                                type={key !== 'password' ? 'text' : 'password'}
                                name={key}
                            />
                            </span>
                            </div>
                        </div>
                        <div className={i < keys.length ? "displayNoneBlock" : "save"}>
                            <button
                                className='userPageActions blue saveButton'
                                onClick={this.newChange}
                            >Save
                            </button>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default UserPage;