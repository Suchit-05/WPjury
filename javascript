display name 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Welcome Message</title>
</head>
<body>
  <h2>Greeting Message</h2>
  <button onclick="showWelcomeMessage()">Enter Your Name</button>
  <p id="output"></p>
  <script>
    function showWelcomeMessage() {
      const name = prompt("Please enter your name:");
      {
        const message = `Hello ${name} Welcome To World of JavaScript`;
        document.getElementById("output").textContent = message;
      }
    }
  </script>
</body>
</html>

count alphabet 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Count Character Occurrences</title>
</head>
<body>

  <h2>Count Occurrences of a Character in Array</h2>

  <p>Array: ['a', 'b', 'a', 'c', 'z']</p>

  <input type="text" id="charInput" maxlength="1" placeholder="Enter a character" />
  <button onclick="countOccurrences()">Count Occurrences</button>

  <p id="result"></p>

  <script>
    const arr = ['a', 'b', 'a', 'c', 'z'];

    function countOccurrences() {
      const char = document.getElementById('charInput').value;
      if (!char) {
        alert("Please enter a character");
        return;
      }
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
          count++;
        }
      }
      document.getElementById('result').textContent = `Occurrences of '${char}' is ${count}`;
    }
  </script>

</body>
</html>


add to array
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Add Color to Array</title>
</head>
<body>

  <h2>Color Array</h2>
  <p id="colorList"></p>

  <input type="text" id="newColor" placeholder="Enter a color" />
  <button onclick="addColor()">Add Color</button>

  <script>
    let colors = ["Red", "Green", "Blue"];

    // Display initial array
    document.getElementById('colorList').textContent = "Colors: " + colors.join(", ");

    function addColor() {
      const input = document.getElementById('newColor').value.trim();

      // Check case-insensitive presence
      const exists = colors.some(color => color.toLowerCase() === input.toLowerCase());

      if (exists) {
        alert(input + " is already in the array.");
      } else {
        colors.push(input);
        alert(input + " added to the array!");
        document.getElementById('colorList').textContent = "Colors: " + colors.join(", ");
      }

      // Clear input box
      document.getElementById('newColor').value = "";
    }
  </script>

</body>
</html>

change bg color
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Change Background Color</title>
  <style>
    body {
      transition: background-color 0.5s ease;
      font-family: Arial, sans-serif;
      text-align: center;
      padding-top: 50px;
    }
    button {
      padding: 10px 20px;
      font-size: 18px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <button id="colorBtn">Change Background Color</button>

  <script>
    const colors = ["#FF6347", "#4682B4", "#32CD32", "#FFD700", "#6A5ACD", "#FF69B4"];
    let index = 0;

    document.getElementById("colorBtn").addEventListener("click", function() {
      // Change background color
      document.body.style.backgroundColor = colors[index];

      // Update index to next color, cycle back to 0 after last
      index = (index + 1) % colors.length;
    });
  </script>

</body>
</html>


cart function
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Book Shopping Cart</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 30px auto;
      padding: 10px;
    }
    h1 {
      text-align: center;
      color: #2c3e50;
    }
    label {
      display: block;
      margin: 10px 0 5px;
    }
    input[type="text"], input[type="number"] {
      width: 100%;
      padding: 7px;
      box-sizing: border-box;
    }
    button {
      margin-top: 10px;
      padding: 10px 15px;
      background-color: #27ae60;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
      border-radius: 3px;
    }
    button:hover {
      background-color: #2ecc71;
    }
    table {
      width: 100%;
      margin-top: 20px;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: center;
    }
    th {
      background-color: #2980b9;
      color: white;
    }
    .delete-btn {
      background-color: #e74c3c;
      padding: 5px 10px;
      border: none;
      color: white;
      cursor: pointer;
      border-radius: 3px;
    }
    .delete-btn:hover {
      background-color: #c0392b;
    }
  </style>
</head>
<body>

  <h1>Book Shopping Cart</h1>

  <form id="bookForm">
    <label for="bookName">Book Name:</label>
    <input type="text" id="bookName" required placeholder="Enter book name" />

    <label for="bookQty">Quantity:</label>
    <input type="number" id="bookQty" min="1" value="1" required />

    <button type="submit">Add / Update Book</button>
  </form>

  <table id="cartTable" style="display:none;">
    <thead>
      <tr>
        <th>Book Name</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody id="cartBody">
      <!-- Cart items go here -->
    </tbody>
  </table>

  <script>
    let cart = [];

    const form = document.getElementById('bookForm');
    const cartTable = document.getElementById('cartTable');
    const cartBody = document.getElementById('cartBody');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission refresh

      const bookName = document.getElementById('bookName').value.trim();
      const bookQty = parseInt(document.getElementById('bookQty').value);

      if (bookName === "" || bookQty < 1) {
        alert("Please enter valid book name and quantity.");
        return;
      }

      // Check if book already in cart
      const existingIndex = cart.findIndex(item => item.name.toLowerCase() === bookName.toLowerCase());

      if (existingIndex >= 0) {
        // Update quantity of existing book
        cart[existingIndex].quantity += bookQty;
      } else {
        // Add new book
        cart.push({ name: bookName, quantity: bookQty });
      }

      form.reset();
      renderCart();
    });

    function renderCart() {
      if (cart.length === 0) {
        cartTable.style.display = 'none';
        return;
      }

      cartTable.style.display = 'table';
      cartBody.innerHTML = '';

      cart.forEach((item, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td><button class="delete-btn" onclick="deleteBook(${index})">Delete</button></td>
        `;

        cartBody.appendChild(tr);
      });
    }

    function deleteBook(index) {
      cart.splice(index, 1);
      renderCart();
    }

  </script>

</body>
</html>



