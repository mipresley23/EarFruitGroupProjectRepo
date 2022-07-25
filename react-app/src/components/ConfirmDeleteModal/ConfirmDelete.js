import { deleteSong, getSongs } from "../../store/songs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ConfirmDelete({ songId, setShowModal }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteSong(songId))
    .then(() => {
      dispatch(getSongs());
      setShowModal(false);
    })
  };

  return (
    <form
      action={`/api/songs/${songId}`}
      method="delete"
      onSubmit={(e) => handleSubmit(e)}
    >
      <p>Are you sure you want to Delete this song?</p>
      <button type="submit" value="Delete song">
        Yes
      </button>
    </form>
  );
}

export default ConfirmDelete;
