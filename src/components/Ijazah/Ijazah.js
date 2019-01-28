import React, { Component } from "react";
import "./Ijazah.scss";

export default class Ijazah extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    });
  };

  render() {
    const{city,img,name,info} = this.props.ijazah;
    return (
      <article className="ijazah">
        <div className="img-container">
            <img 
                src={img}
                alt=""
            />
            <span className="close-btn">
                <i className="fas fa-window-close"/>
            </span>
        </div>
        
        <div className="ijazah-info">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>
                info{" "}
                <span onClick={this.handleInfo}>
                    <i className="fas fa-caret-square-down" />
                </span>
            </h5>
            {this.state.showInfo && <p>{info}</p> }
        </div>
      </article>
    );
  }
}
