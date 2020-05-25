import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import fetchSongsQuery from "../queries/fetchSongs";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query: fetchSongsQuery }]
      })
      .then(() => hashHistory.push("/"));

  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.onSubmit.bind(this)}>
          <br />
          <Link to="/" className="">
            &#60; Go Back
          </Link>
          <br />
          <h3>Create a New Song</h3>
          <label htmlFor="">Song Title:</label>
          <input
            type="text"
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
          <button type="submit" className="btn-large green left">
            Save
            <i className="material-icons"></i>
          </button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
