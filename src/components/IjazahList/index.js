import React, { Component } from "react";
import "./IjazahList.scss";
import Ijazah from "../Ijazah/Ijazah";
import { ijazahData } from "../ijazahData";

export default class IjazahList extends Component {
  state = {
    ijazahs: ijazahData
  };
  render() {
    const {ijazahs} = this.state;

    return (
      <section className="ijazahlist">
        {ijazahs.map(ijazah => {
          return <Ijazah key={ijazah.id} ijazah={ijazah} />;
        })}
      </section>
    );
  }
}
