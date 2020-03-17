
const list = document.querySelector('.mentor-list');
const form = document.querySelector('.form-group');

const addMentor = (person, id) => {

  let html = `
    <li data-id="${id}">
      <div>${person.mentor} | ${person.industry}</div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
  `;

  list.innerHTML += html;
};

//REMOVE ID
const removeItem = (e) => {
  console.log(e, e.target);

  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.getAttribute('data-id');
    db.collection('mentors').doc(id).delete().then(() => {
      console.log('deleted');
    });
  }
};

const deleteMentor = (id) => {
  const mentorItem = document.querySelectorAll('li');

  mentorItem.forEach(mentor => {
    if (mentor.getAttribute('data-id') === id) {
      mentor.remove();
    }
  });
}

const handleSubmit = (e) => {
  e.preventDefault();

  //create timestamp
  const now = new Date();
  const name = form.mentor.value.trim();
  const genre = form.industry.value.trim();

  //when saving to FB we pass a JS Object
  const newMentor = {
    mentor: name,
    created_at: firebase.firestore.Timestamp.fromDate(now),
    industry: genre
  }

  // console.log(name, genre);
  db.collection('mentors').add(newMentor).then(() => {
    console.log('mentor added');
  }).catch(err => console.log(err));

  form.reset();
}



//ONE TIME GRAB DATA FROM FIRESTORE
// db.collection('mentors')
//   .get()
//   .then((data) => {
//     const { docs } = data;

//     docs.forEach((doc) => {
//       // console.log(doc.id);
//       addMentor(doc.data(), doc.id);
//     });
//   }).catch((err) => console.log(err));

//REAL TIME DB LISTENER
db.collection('mentors').onSnapshot(snapshot => {

  // const { docs } = snapshot;
  snapshot.docChanges().forEach((change) => {
    const { doc, type } = change;

    console.log(change);

    //get type --> added | removed
    if (type === 'added') {
      addMentor(doc.data(), doc.id);
    } else if (type === 'removed') {
      deleteMentor(doc.id);
    }
  });


  // console.log(snapshot.docChanges());
});


//EVENTS
//send data to FS db
form.addEventListener('submit', handleSubmit);

//delete from FS db
list.addEventListener('click', removeItem);