import React, { useState, useRef, useEffect } from 'react';
import '../style/addStory.css';
import { useDispatch, useSelector } from "react-redux";
import { postStory, addNewStory } from '../Story/storySlice.js';
import { jwtDecode } from "jwt-decode";
import { putUser } from '../Useres/usersSlice.js';

const ModalLoginForm = ({ DeceadId }) => {
  const story = useSelector(state => state.story.stories);
  const status = useSelector(state => state.story.status);
  const dispatch = useDispatch();
  const [numStories, setnumStories] = useState(sessionStorage.getItem('isLoggedIn') ? parseInt(sessionStorage.getItem('amountStories')) : null);

  const [isModalVisible, setModalVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLoginButtonClick = () => {
    setModalVisibility(true);
  };

  const handleModalClose = () => {
    setModalVisibility(false);
  };

  window.onclick = function (event) {
    const modal = document.getElementById('id01');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleChange = () => {
    const input = inputRef.current;
    input.style.height = 'auto'; // Reset height to auto to recalculate scrollHeight
    input.style.height = `${input.scrollHeight}px`; // Set height to match scrollHeight
    setInputValue(input.value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let formDataObject = {
      nickname: formData.get('name'),
      relation_type: selectedOption,
      story: formData.get('story'),
      email_for_messages: formData.get('email'),
      deceasdId: DeceadId,
    };
    dispatch(postStory(formDataObject));
    dispatch(addNewStory(formDataObject))
    if (sessionStorage.getItem('isLoggedIn')) {
      let obj={name:"",id_person:'',email:'',amount_stories:0}
      let id = sessionStorage.getItem('userId');
      dispatch(putUser({id,obj}));
    }
    handleModalClose();
  }

  return (
    <div>
      <button onClick={handleLoginButtonClick} style={{ width: 'auto' }} className='btn-add-story'>
        Add Story
      </button>

      {isModalVisible && (
        <div id="id01" className="modal">
          <form
            className="modal-content animate"
            onSubmit={handleFormSubmit}
          >
            <div className="imgcontainer">
              <span
                onClick={handleModalClose}
                className="close"
                title="Close Modal"
              >
                &times;
              </span>

            </div>

            <div className="container">
              <label htmlFor="name">
                <b>Nick Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Nick-Name"
                name="name"
                required
                id='inp-name'
              />

              <label htmlFor="story">
                <b>Story</b>
              </label>
              <textarea
                type="text"
                placeholder="Enter Story"
                name="story"
                required
                id="story"
                onChange={handleChange}
                ref={inputRef}
              />
              <div className='not-required-container'>
                <div className='not-required-data'>
                  <label htmlFor="dropdown">
                    <b>Relation Type:</b>
                  </label>
                  <select id="dropdown" value={selectedOption} onChange={handleSelectChange} name="relation_type">
                    <option className='opt-relation' value="">Choose an option</option>
                    <option className='opt-relation' value="family">משפחה</option>
                    <option className='opt-relation' value="friend">חבר/ה</option>
                    <option className='opt-relation' value="acquaintance">מכר/ה</option>
                    <option className='opt-relation' value="other">אחר</option>
                  </select>
                  <p id='comment'>נשמח שתמלא שדה זה על אף שאינו חובה</p>
                </div>
                <div className='not-required-data'>
                  <label htmlFor="email">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    id='email'
                  />
                  <p id='comment'>נשמח שתכניס/י את כתובת המייל שלך לעידכונים </p>
                </div>
              </div>
              <button id='sub-btn' onSubmit={handleFormSubmit} type="submit">sent</button>
              <label>
                <input
                  type="checkbox"
                  checked="checked"
                  name="remember"
                />
                אני מסכימ/ה  לתקנון
              </label>
            </div>

            <div className="container" style={{ backgroundColor: 'rgba(20, 20, 20, 0.743)' }}>
              <button
                type="button"
                onClick={handleModalClose}
                className="cancelbtn"
              >
                Cancel
              </button>
              <span className="psw">
                למעבר ל<a href="#">תקנון האתר</a>
              </span>
            </div>
          </form>
        </div >
      )}
    </div >
  );
};
export default ModalLoginForm;