//1. Create a signup form and display form data in your web
//page on submission.


document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    document.getElementById('display-username').textContent = username;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-password').textContent = password;

    
    document.getElementById('user-info').style.display = 'block';
 
    document.getElementById('signup-form').reset();
  });
  

  // 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

document.getElementById('read-more-btn').addEventListener('click', function() {
    
    const moreText = document.getElementById('more-text');
    const button = document.getElementById('read-more-btn');
    
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      button.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      button.textContent = "Read More";
    }
  });

  // 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


const form = document.getElementById('student-form');
const tableBody = document.querySelector('#student-table tbody');
const editingIndex = document.getElementById('editing-index');

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const grade = document.getElementById('grade').value;

  if (editingIndex.value === "-1") {
    // Add new row
    addRow(name, age, grade);
  } else {
    // Update existing row
    updateRow(editingIndex.value, name, age, grade);
    editingIndex.value = "-1";
    form.querySelector('button').textContent = "Add Student";
  }

  form.reset();
});

// Function to add a new row to the table
function addRow(name, age, grade) {
  const row = tableBody.insertRow();

  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${grade}</td>
    <td class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </td>
  `;

  row.querySelector('.delete').addEventListener('click', () => row.remove());
  row.querySelector('.edit').addEventListener('click', () => editRow(row));
}

// Function to edit an existing row
function editRow(row) {
  const cells = row.children;

  document.getElementById('name').value = cells[0].textContent;
  document.getElementById('age').value = cells[1].textContent;
  document.getElementById('grade').value = cells[2].textContent;

  const rowIndex = Array.from(tableBody.rows).indexOf(row);
  editingIndex.value = rowIndex;

  form.querySelector('button').textContent = "Update Student";
}

// Function to update a row
function updateRow(index, name, age, grade) {
  const row = tableBody.rows[index];

  row.cells[0].textContent = name;
  row.cells[1].textContent = age;
  row.cells[2].textContent = grade;
}