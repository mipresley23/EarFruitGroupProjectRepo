import { deleteSong, getSongs } from "../../store/songs";
import { useDispatch } from "react-redux";

function ConfirmDelete({ songId, setShowModal }) {
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();



    const res = dispatch(deleteSong(songId))
    if (res.ok) {
      dispatch(getSongs());
      setShowModal(false);
    }
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
