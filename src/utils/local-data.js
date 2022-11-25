let notes = [
  {
    id: "notes-1",
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    imgUrl:
      "https://images.unsplash.com/photo-1669090787997-1d7878a44be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTM4NTU2OQ&ixlib=rb-4.0.3&q=80&w=1080",
    archived: false,
  },
  {
    id: "notes-2",
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    imgUrl:
      "https://images.unsplash.com/photo-1668696381185-46c77ee52d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTM4NTU0OQ&ixlib=rb-4.0.3&q=80&w=1080",
    archived: false,
  },
  {
    id: "notes-3",
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    imgUrl:
      "https://images.unsplash.com/photo-1668977309586-50c338c48cf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTM4NTUyOA&ixlib=rb-4.0.3&q=80&w=1080",
    archived: false,
  },
  {
    id: "notes-4",
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    imgUrl:
      "https://images.unsplash.com/photo-1667788383778-3795ae7fb418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTM4NTUwNw&ixlib=rb-4.0.3&q=80&w=1080",
    archived: false,
  },
  {
    id: "notes-5",
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    imgUrl:
      "https://images.unsplash.com/photo-1666866011772-7c9442d479bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTM4NTQ5MQ&ixlib=rb-4.0.3&q=80&w=1080",
    archived: false,
  },
  {
    id: "notes-6",
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    imgUrl:
      "https://images.unsplash.com/photo-1666825847731-34936d58e91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTM4NTQ1Ng&ixlib=rb-4.0.3&q=80&w=1080",
    archived: false,
  },
];

function getAllNotes() {
  return notes;
}

function getNote(id) {
  const foundedNote = notes.find((note) => note.id === id);
  return foundedNote;
}

function getActiveNotes() {
  const activeNotes = notes.filter((note) => !note.archived);
  return activeNotes;
}

function getArchivedNotes() {
  const archivedNotes = notes.filter((note) => note.archived);
  return archivedNotes;
}

function addNote({ title, body, imgUrl }) {
  notes = [
    ...notes,
    {
      id: `notes-${+new Date()}`,
      title: title || "(untitled)",
      body: body || "(empty)",
      createdAt: new Date().toISOString(),
      imgUrl,
      archived: false,
    },
  ];
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
}

function archiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: true };
    }
    return note;
  });
}

function unarchiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: false };
    }

    return note;
  });
}

function editNote({ id, title, body }) {
  const noteToEdit = notes.find((note) => note.id === id);
  noteToEdit.title = title;
  noteToEdit.body = body;

  notes = notes.map((note) => {
    if (note.id === id) {
      return note;
    }
    return note;
  });
}

export {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
  addNote,
};
