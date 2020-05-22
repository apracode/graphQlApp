import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

class SongDetail extends Component {
  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <br />
        <Link to="/" className="">
          &#60; Go Back
        </Link>
        <br />
        <h3 className="center">{this.props.data.song.title}</h3>
      </div>
    );
  }
}
const query = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      title
    }
  }
`;

export default graphql(query, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
