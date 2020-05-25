import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchLyrics from "../queries/fetchLyrics";
import LyricCreate from "./LyricCreate";
import LyricsList from "./LyricsList";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!this.props.data.song) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <br />
        <Link to="/">&#60; Back</Link>
        <h3>{song.title}</h3>
        <LyricsList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchLyrics, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
