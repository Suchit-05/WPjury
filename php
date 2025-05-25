number table
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Multiplication Table</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 40px auto; }
    input, button { padding: 8px; font-size: 16px; }
    table { border-collapse: collapse; margin-top: 20px; width: 100%; }
    th, td { border: 1px solid #333; padding: 8px; text-align: center; }
    th { background-color: #4CAF50; color: white; }
  </style>
</head>
<body>

  <h2>Multiplication Table Generator</h2>

  <form method="post" action="">
    <label for="number">Enter a number:</label><br>
    <input type="number" id="number" name="number" required min="1" /><br><br>
    <button type="submit">Generate Table</button>
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num = intval($_POST['number']);

    echo "<h3>Table of {$num}</h3>";
    echo "<table>";
    echo "<tr><th>Multiplier</th><th>Result</th></tr>";

    for ($i = 1; $i <= 10; $i++) {
      $result = $num * $i;
      echo "<tr><td>{$num} x {$i}</td><td>{$result}</td></tr>";
    }

    echo "</table>";
  }
  ?>

</body>
</html>


add item name id quantity
<?php
session_start();

if (!isset($_SESSION['items'])) {
    $_SESSION['items'] = [];
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $itemID = $_POST['itemID'];
    $itemName = $_POST['itemName'];
    $itemQuantity = $_POST['itemQuantity'];

    $_SESSION['items'][] = [
        'itemID' => $itemID,
        'itemName' => $itemName,
        'itemQuantity' => $itemQuantity
    ];
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Shopping Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f9f9f9;
            margin: 40px;
            color: #333;
        }
        h2 {
            color: #2c3e50;
        }
        form {
            background: #fff;
            padding: 20px;
            width: 350px;
            border-radius: 6px;
            box-shadow: 0 0 8px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        input[type="text"], input[type="number"] {
            width: 100%;
            padding: 8px 10px;
            margin: 6px 0 16px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 15px;
        }
        input[type="submit"] {
            background-color: #27ae60;
            color: white;
            padding: 10px 18px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        input[type="submit"]:hover {
            background-color: #219150;
        }
        table {
            width: 600px;
            border-collapse: collapse;
            background: #fff;
            box-shadow: 0 0 8px rgba(0,0,0,0.1);
            border-radius: 6px;
        }
        th, td {
            padding: 12px 20px;
            border-bottom: 1px solid #ddd;
            text-align: left;
            font-size: 16px;
        }
        th {
            background-color: #2c3e50;
            color: white;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
        td[colspan="3"] {
            text-align: center;
            font-style: italic;
            color: #666;
        }
    </style>
</head>
<body>

<h2>Add Item to Cart</h2>
<form method="post" action="">
    <label>Item ID:</label><br>
    <input type="text" name="itemID" required><br>

    <label>Item Name:</label><br>
    <input type="text" name="itemName" required><br>

    <label>Item Quantity:</label><br>
    <input type="number" name="itemQuantity" min="1" required><br>

    <input type="submit" value="Add Item">
</form>

<h2>Items in Cart</h2>
<table>
    <tr>
        <th>Item ID</th>
        <th>Item Name</th>
        <th>Quantity</th>
    </tr>
    <?php
    if (!empty($_SESSION['items'])) {
        foreach ($_SESSION['items'] as $item) {
            echo "<tr>
                    <td>" . htmlspecialchars($item['itemID']) . "</td>
                    <td>" . htmlspecialchars($item['itemName']) . "</td>
                    <td>" . htmlspecialchars($item['itemQuantity']) . "</td>
                  </tr>";
        }
    } else {
        echo "<tr><td colspan='3'>No items added yet.</td></tr>";
    }
    ?>
</table>

</body>
</html>



create and use db
<?php
// Simple DB connection
$conn = new mysqli("localhost", "root", "", "your_db");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data on form submit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rollNo = $_POST['rollNo'];
    $studName = $_POST['studName'];
    $studDept = $_POST['studDept'];
    $passingYear = $_POST['passingYear'];
    $classGrades = $_POST['classGrades'];

    $sql = "INSERT INTO students (rollNo, studName, studDept, passingYear, classGrades) 
            VALUES ('$rollNo', '$studName', '$studDept', '$passingYear', '$classGrades')";
    $conn->query($sql);
}

// Fetch all records
$result = $conn->query("SELECT * FROM students");
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
</head>
<body>

<h2>Student Registration Form</h2>

<form method="post" action="">
    Roll No:<br>
    <input type="text" name="rollNo" required><br><br>
    
    Name:<br>
    <input type="text" name="studName" required><br><br>
    
    Department:<br>
    <input type="text" name="studDept" required><br><br>
    
    Passing Year:<br>
    <input type="text" name="passingYear" required><br><br>
    
    Class Grades:<br>
    <select name="classGrades" required>
        <option value="">Select Grade</option>
        <option value="First Class">First Class</option>
        <option value="Second Class">Second Class</option>
        <option value="Pass">Pass</option>
    </select><br><br>
    
    <input type="submit" value="Submit">
</form>

<h2>Registered Students</h2>
<table border="1" cellpadding="5" cellspacing="0">
    <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Department</th>
        <th>Passing Year</th>
        <th>Class Grades</th>
    </tr>
    <?php
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>".$row['rollNo']."</td>
                    <td>".$row['studName']."</td>
                    <td>".$row['studDept']."</td>
                    <td>".$row['passingYear']."</td>
                    <td>".$row['classGrades']."</td>
                  </tr>";
        }
    } else {
        echo "<tr><td colspan='5'>No records found.</td></tr>";
    }
    $conn->close();
    ?>
</table>

</body>
</html>
