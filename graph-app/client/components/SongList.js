import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router";
import fetchSongsQuery from "../queries/fetchSongs";

function SongList(props) {
  const renderSongs = () => {
    return props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          <Link to={`/song/detail/${song.id}`}> {song.title}</Link>
          <i className="material-icons " onClick={() => deleteSong(song.id)}>
            delete
          </i>
        </li>
      );
    });
  };

  const deleteSong = id => {
    props
      .mutate({
        variables: {
          id: id
        }
      })
      .then(() => props.data.refetch());
  };

  if (props.data.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3 className="center">Songs</h3>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="song/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

const mutation = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongsQuery)(SongList));
