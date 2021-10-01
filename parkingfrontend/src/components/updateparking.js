import React,{Component} from 'react';
import axios from 'axios';


export default class updateparking extends Component{

    constructor(props){
        super(props);
        this.onChangeOption = this.onChangeOption.bind(this);
        this.onChangesno = this.onChangesno.bind(this);
        this.onChangessize = this.onChangessize.bind(this);
        this.onChangecno = this.onChangecno.bind(this);
        this.onChangerno = this.onChangerno.bind(this);
        this.onChangedt = this.onChangedt.bind(this);
        this.onChangedes = this.onChangedes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Option:'',
            sno:'',
            ssize:'',
            cno:'',
            rno:'',
            dt:'',
            des:''
        }
    }

    componentDidMount(){
        axios.get('/parking/getp/' + this.props.match.params.id)
        .then(response=>{
            this.setState({
                Option: response.data.Option,
                sno: response.data.sno,
                ssize: response.data.ssize,
                cno: response.data.cno,
                rno: response.data.rno,
                dt: response.data.dt,
                des: response.data.des
            });
        })
        .catch(function (error){
            console.log(error);
        })
    }

    onChangeOption(e){
        this.setState({
            Option:e.target.value
        });
    }

    onChangesno(e){
        this.setState({
            sno:e.target.value
        });
    }

    onChangessize(e){
        this.setState({
            ssize:e.target.value
        });
    }

    onChangecno(e){
        this.setState({
            cno:e.target.value
        });
    }
    
    onChangerno(e){
        this.setState({
            rno:e.target.value
        });
    }

    onChangedt(e){
        this.setState({
            dt:e.target.value
        });
    }

    onChangedes(e){
        this.setState({
            des:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj={
            Option: this.state.Option,
            sno: this.state.sno,
            ssize: this.state.ssize,
            cno: this.state.cno,
            rno: this.state.rno,
            dt: this.state.dt,
            des: this.state.des
        };

        axios.put('/parking/update/' + this.props.match.params.id, obj)
        .then((response)=>{
            alert("Parking Slot Successfully Updated!!")
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })

        this.props.history.push("/retrieve");
    }

    render() {
        return (
        <div className="container">
          <form onSubmit={this.onSubmit} style={{marginTop:100}}>
            <div className="form-group">
                <label htmlFor="Option">Car Parking Type:</label><br/>
                <input type="text" className="form-control" value={this.state.Option} onChange={this.onChangeOption} readOnly/>
                </div>
                <br/>
            <div className="form-group">
                <label htmlFor="sno">Parking Slot No:</label>
              <input type="number"  className="form-control" value={this.state.sno} onChange={this.onChangesno} />
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="ssize">Parking Slot Size (in inches):</label>
              <input type="text" className="form-control" value={this.state.ssize} onChange={this.onChangessize} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="cno">Car Plate No:</label>
              <input type="text" className="form-control" value={this.state.cno} onChange={this.onChangecno} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="rno">Customer Registration ID:</label>
              <input type="text" pattern="[A-Z]{1}[0-9]{4}" className="form-control" value={this.state.rno} onChange={this.onChangerno} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="dt">Entry Date:</label>
                    <input type="text" className="form-control" value={this.state.dt} onChange={this.onChangedt} readOnly/>
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="des">Description:</label>
                    <input type="text" className="form-control" value={this.state.des} onChange={this.onChangedes} />
            </div>
            
            <br/>
            <button type="submit" className="btn btn-primary">
              Update Parking
            </button>
          </form>
          <br/>
          <br/>
        </div>
        );
      }
}