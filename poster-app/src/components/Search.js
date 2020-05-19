import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Search.css';
import ErrorMessage from './ErrorMessage';
import {Form, FormControl, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

const API_KEY=process.env.REACT_APP_API_KEY;

let abortController = new AbortController();
export default class Home extends Component {
            
    //new code
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            displayResults: '',
            displayData:[ ],
            img: '',
            searchText:'',
            resultLength: '',
            data : ''
        }
    }
<<<<<<< HEAD
    
    componentDidMount(){
        this._isMounted =true;
       
    }
=======
>>>>>>> origin/master
    
     searchText = (e) =>{
            e.preventDefault();
            console.log(e.target.value);
            this.setState({searchText : e.target.value})
     }

     handleSearch = (e) =>{
        e.preventDefault();
        console.log(this.state.searchText);
        this.searchRequest();
    }

    searchRequest = async () =>{
        console.log(API_KEY)
        try{
            const searchText = this.state.searchText;
            const response = await axios.get("https://api.pexels.com/v1/search?query=" +searchText ,
            {headers: {
                "Authorization" : API_KEY
              }
            })
        let resultLength = response.data.total_results;
        let url=response.data.photos;
<<<<<<< HEAD
        if(resultLength >0 && this._isMounted){
            this.setState({displayData : url});
            this.setState({resultLength : false})
          }
        else{
            this.setState({resultLength : true})        
          }
       }
        catch(e){
            console.log(e);
        }
    }

    viewDetails = (val1, val2, event) => {
        // this.setState({data:true})
        console.log(val2)
        console.log(val1)
        if(val1 && val2){
            this.props.history.push({
                pathname: "/results",
                state: {
                    pId : val1,
                    ulr: val2
                }
            })}
            // else{
            //     alert("Hello")
            // }
        }
    
        componentWillUnmount() {
            this._isMounted = false;
            // this.abortController.abort();
          }

=======
            if(resultLength >0){
                this.setState({displayData : url});
                this.setState({resultLength : false})
            }
            else{
                this.setState({resultLength : true})        
            }
        }
            catch(e){
                console.log(e);
            }
        }
>>>>>>> origin/master
    render() {
        let response = this.state.displayData;
        return (
            <React.Fragment>
                <Form className="search-container">
                    <FormControl type="text" value={this.state.searchText} id="search-text" onChange={this.searchText} placeholder="search text" />
                    <Button  id="search-button" onClick={this.handleSearch}>Search</Button>
                </Form>
                <div className="results-container"> 
                {
                    this.state.resultLength ? <ErrorMessage /> : 
                    response.map((result) => {
                        return (

                            <div className="poster-results"><ul key= {result.id} className="lists-display">
                            <li className="results-li"> <img src= {result.src.portrait} alt="different Images" height = "400px" width="260px" /> <h5>Poster ID: {result.id} </h5> <Link to ={{pathname:'/results',    state: {
                    pId : result.id,
                    url: result.src.portrait
                }}}
                            className="view-details" id= {result.id}  >View Details</Link>  </li>
                            </ul> </div>)
                        {/* // <div className="poster-results"><ul key= {result.id} className="lists-display">
                        // <li className="results-li"> <img src= {result.src.portrait} alt="different Images" height = "400px" width="260px" /> <h5>Poster ID: {result.id} </h5> <Button className="view-details" id= {result.id} variant="link" onClick={this.viewDetails(result.id, result.src.portrait)} >View Details</Button>  </li> */}
                        {/* x<li className="results-li"> <img src= {result.src.portrait} alt="different Images" height = "400px" width="260px" /> <h5>Poster ID: {result.id} </h5> <Button className="view-details" id= {result.id} variant="link" onClick={this.viewDetails(result.id, result.src.portrait)} value={result.id , result.src.portrait}>View Details</Button>  </li> */}
                        {/* </ul> </div>) */}
                    } )
                }
                </div>
             </React.Fragment>
        )
    }
}

