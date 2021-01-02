import React, { Component } from 'react';
import Axios from 'axios';
import HTMLparser from 'react-html-parser';
import { Icon } from 'semantic-ui-react';
import './activePost.css';
import Moment from 'moment';
import NavBar from '../NavBar/NavBarElements'
import SearchBar from '../SearchBar/SearchBarElement'
import FilterBar from '../FilterBar/FilterBarElements'
class ActiveBlogPost extends Component {
    constructor(props) {
        super(props)
        //decalring a state variable to store api data
        this.state = {
            finishermagStore: [],
            postShow: [],
            show: false,
            showflag: false
        };
    }
    handleShow = (id) => {
        // console.log(i);
        const { finishermagStore } = this.state;
        const data = finishermagStore.find((item) => item.id === id);
        this.setState({
            postShow: data,
            show: true,
            showflag: true
        });

    }

    //featch finishermag api data
    componentDidMount() {
        Axios.get('https://finishermag.com/wp-json/wp/v2/posts')
            .then((res) => {
                this.setState({
                    finishermagStore: res.data,
                });
            });
    }

    handleBack = () =>{
        this.setState({
            show:false,
        });
    }

    formatDate = (value) => {
        Moment.locale('en');
        var dt = Moment(value).format('MMM d yyyy');
        var span1 = dt.split(" ")[0];
        var span2 = dt.split(" ")[1];
        var span3 = dt.split(" ")[2];
        return(<div className="span1 feed-left-column"><span className="h5">{span1}</span><br></br><span className="h2">{span2}</span><br></br><span className="h5">{span3}</span></div>)
    }
    formatImagePosition()
    {
        alert("Yes");
    }

    render() {
        const { finishermagStore, postShow, showflag, show } = this.state;
        console.log(postShow.content);

        return (
            <div className="mainDiv">
                <NavBar />

            <div className=" text-left">
                {show ?
                    <>
                        <div className="container show_data">
                            <button onClick={()=>this.handleBack()}>back</button>
                            {showflag ? <div className="main_data">{HTMLparser(postShow.content.rendered)}</div> : ""}
                        </div>
                    </>
                    :
                    <div>
                        <SearchBar />
                        <div className="blogAlign">
                        <FilterBar />
                        
                        <div className="blog_card">
                        {finishermagStore.map((item) => {
                            return (
                                <div onClick={() => this.handleShow(item.id)} key={item.id}>
                                    <div className="topic_card">
                                        
                                        {this.formatDate(item.date)}
                                        
                                        <div className="blog_topic">
                                            <h3>{item.title.rendered}</h3>
                                            <p>{HTMLparser(item.excerpt.rendered)}</p>
                                            {/* <p>{HTMLparser(item.content.rendered)}</p> */}
                                        </div>
                                        <div className="blog_angleArrow">
                                            <span><Icon size="large" color="blue" name='angle right' /></span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        </div>
                    </div>



                    </div>

                }

            </div>
            </div>
        );
    }
}

export default ActiveBlogPost;
