import { deleteSong, getSongs } from "../../store/songs";
import { useDispatch } from "react-redux";

function ConfirmDelete({ song, setShowModal }) {
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();
      formData.append("source", song.source);

    const awsRes = await fetch('/api/songs/mp3', {
      method: "DELETE",
      headers: {
        "Content_Type": "application/json"
      },
      body: formData
    });

    if(awsRes.ok) {

      const res = await dispatch(deleteSong(song.id))

      if (res === 'Song Deleted') {
        dispatch(getSongs());
        setShowModal(false);
      }
    }
  };

  return (
      <form
        action={`/api/songs/${song.id}`}
        method="delete"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p>Are you sure you want to Delete this song?</p>
        <button className='song_form_divs sf_submit' type="submit" value="Delete song">
          Yes
        </button>
      </form>
  );
}

export default ConfirmDelete;
