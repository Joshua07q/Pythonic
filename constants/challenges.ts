// import { Week } from '../types';
import { Week } from '../types';
export const WEEKS_DATA: Week[] = [
  // Week 1: Algorithms & Flowcharts
  {
    week: 1,
    title: "Algorithms & Flowcharts",
    description: "Understand the basics of algorithms and how to represent them with flowcharts.",
    challenges: [
      {
        id: "w1-c1",
        type: 'challenge',
        title: "What is an Algorithm?",
        description: "Write a short description of what an algorithm is, and give a real-life example (in a comment).",
        tasks: ["Add a comment in Python explaining what an algorithm is and give a real-life example.", "No code execution required."],
        starterCode: "# Your answer here\n",
        hints: ["Think of an algorithm as a recipe or a set of instructions to solve a problem."]
      },
      {
        id: "w1-c2",
        type: 'challenge',
        title: "Making Tea (Flowchart)",
        description: "Describe the steps to make a cup of tea as a numbered list in a comment, as if you were drawing a flowchart.",
        tasks: ["List the steps to make tea in a comment, using numbers."],
        starterCode: "# 1. Boil water\n# 2. Add tea leaves...\n",
        hints: ["Break down the process into simple, logical steps."]
      },
      {
        id: "w1-c3",
        type: 'challenge',
        title: "Sum of Two Numbers (Algorithm)",
        description: "Write a Python algorithm to add two numbers and print the result.",
        tasks: ["Assign two numbers to variables and print their sum.", "No user input required."],
        starterCode: "a = 5\nb = 7\n# Print their sum\n",
        hints: ["Use the + operator to add two numbers in Python."]
      },
      {
        id: "w1-c4",
        type: 'challenge',
        title: "Even or Odd (Algorithm)",
        description: "Write an algorithm to check if a number is even or odd.",
        tasks: ["Assign a number to a variable, check if it is even or odd, and print the result."],
        starterCode: "n = 10\n# Your code here\n",
        hints: ["Use the modulus operator (%) to check for evenness."]
      },
      {
        id: "w1-c5",
        type: 'challenge',
        title: "Find the Maximum (Algorithm)",
        description: "Write an algorithm to find the maximum of three numbers.",
        tasks: ["Assign three numbers to variables, find the largest, and print it."],
        starterCode: "a = 3\nb = 8\nc = 5\n# Your code here\n",
        hints: ["Use if-elif-else statements to compare the numbers."]
      }
    ]
  },
  // Week 2: Variables & Data Blueprints
  {
    week: 2,
    title: "Variables & Data Blueprints",
    description: "Learn to store and classify information—the building blocks of any program.",
    challenges: [
      {
        id: "w2-c1",
        type: 'challenge',
        title: "The Climate Converter",
        description: "Write a program that converts a temperature from Celsius to Fahrenheit.",
        tasks: [
          "Create a variable `celsius` and assign it a number.",
          "Calculate the equivalent temperature in Fahrenheit using the formula: F = C * 9/5 + 32.",
          "Print the result in a user-friendly format."
        ],
        breakdown: [
          "Create a variable named `celsius` and give it a numeric value.",
          "Apply the conversion formula: `F = C * 9/5 + 32`.",
          "Store the result in a new variable, for example, `fahrenheit`.",
          "Use an f-string with the `print()` function to display the original and converted temperatures clearly."
        ],
        hints: [
          "The order of operations matters. Multiplication and division happen before addition.",
          "You can use `(9/5)` or `1.8` for the conversion factor.",
          "An f-string is a great way to format your output: `print(f'{celsius}C is equal to {fahrenheit}F.')`"
        ],
        exampleOutput: "30C is equal to 86.0F.",
        starterCode: "celsius = 30\n\n# Calculate Fahrenheit\n# fahrenheit = ...\n\n# Print the result\n# print(...)"
      },
      {
        id: "w2-c2",
        type: 'challenge',
        title: "Data Specimen Collection",
        description: "In a single script, create four variables, one for each data type, and then print its value and type.",
        tasks: [
          "An integer (int)",
          "A floating-point number (float)",
          "A string (str)",
          "A boolean (bool)",
        ],
        breakdown: [
          "Declare a variable and assign it a whole number (e.g., `10`).",
          "Declare another variable and assign it a number with a decimal point (e.g., `99.9`).",
          "Declare a third variable and assign it some text in quotes (e.g., `'hello'`).",
          "Declare a fourth variable and assign it either `True` or `False`.",
          "For each variable, use a `print()` statement with an f-string to show its value and its type, which you can get using the `type()` function."
        ],
        hints: [
          "The `type()` function is essential here. It tells you the data type of any variable.",
          "Use f-strings `f''` to easily combine text and variable values in your print statements.",
          "Try changing the values to see different types in the output."
        ],
        exampleOutput: "Value: 42, Type: <class 'int'>\nValue: 3.14, Type: <class 'float'>\nValue: Python, Type: <class 'str'>\nValue: True, Type: <class 'bool'>",
        starterCode: "# Create variables\nmy_int = 42\nmy_float = 3.14\nmy_str = 'Python'\nmy_bool = True\n\n# Print value and type for each\n# print(f'Value: {my_int}, Type: {type(my_int)}')"
      },
      {
        id: "w2-c3",
        type: 'challenge',
        title: "Variable Swapper",
        description: "Swap the values of two variables and print the result.",
        tasks: [
          "Create two variables, a and b, with different values.",
          "Swap their values using a temporary variable.",
          "Print the values before and after swapping."
        ],
        breakdown: [
          "Assign values to a and b.",
          "Use a temporary variable to swap: temp = a; a = b; b = temp.",
          "Print the values before and after swapping using f-strings."
        ],
        hints: [
          "You can also swap in Python with a, b = b, a.",
          "Print before and after to see the change.",
          "Try with different values for a and b."
        ],
        exampleOutput: "Before: a=5, b=10\nAfter: a=10, b=5",
        starterCode: "a = 5\nb = 10\n# Your code here"
      },
    ]
  },
  // Week 3: Control Structures: Decision Making & Loops
  {
    week: 3,
    title: "Control Structures: Decision Making & Loops",
    description: "Master if-else statements and loops for decision making and repetition.",
    challenges: [
      {
        id: "w3-c1",
        type: 'challenge',
        title: "Positive, Negative, or Zero?",
        description: "Check if a number is positive, negative, or zero.",
        tasks: ["Assign a number to a variable, use if-elif-else to print if it is positive, negative, or zero."],
        breakdown: [
          "Assign a value to a variable n.",
          "Use if-elif-else to check if n is positive, negative, or zero.",
          "Print the result using f-strings."
        ],
        hints: [
          "Remember: n > 0 is positive, n < 0 is negative, n == 0 is zero.",
          "Use elif for the second condition.",
          "Try changing n to test all cases."
        ],
        starterCode: "n = 0\n# Check if n is positive, negative, or zero\n# Your code here\n"
      },
      {
        id: "w3-c2",
        type: 'challenge',
        title: "Find the Largest",
        description: "Find the largest of three numbers using if-else.",
        tasks: ["Assign three numbers to variables, use if-else to find and print the largest."],
        breakdown: [
          "Assign values to a, b, and c.",
          "Use if-elif-else to compare the numbers.",
          "Print the largest number."
        ],
        hints: [
          "Start by comparing a and b, then compare the result with c.",
          "Use f-strings to print the result.",
          "Try with different values."
        ],
        starterCode: "a = 4\nb = 9\nc = 2\n# Find the largest number\n# Your code here\n"
      },
      {
        id: "w3-c3",
        type: 'challenge',
        title: "Simple Grader",
        description: "Assign a score and print the grade (A, B, C, D, F) using if-elif-else.",
        tasks: ["Assign a score, use if-elif-else to print the grade."],
        breakdown: [
          "Assign a value to score.",
          "Use if-elif-else to check the score range.",
          "Print the corresponding grade."
        ],
        hints: [
          "Typical ranges: A >= 90, B >= 80, C >= 70, D >= 60, else F.",
          "Check the highest grade first.",
          "Use f-strings for output."
        ],
        starterCode: "score = 85\n# Print the grade based on score\n# Your code here\n"
      },
      {
        id: "w3-c4",
        type: 'challenge',
        title: "Sum of 1 to N (Loop)",
        description: "Use a for loop to calculate the sum of numbers from 1 to N.",
        tasks: ["Assign a value to N, use a for loop to sum from 1 to N, print the result."],
        breakdown: [
          "Assign a value to N.",
          "Initialize a variable total to 0.",
          "Use a for loop from 1 to N (inclusive) to add to total.",
          "Print the result."
        ],
        hints: [
          "Use range(1, N+1) to include N.",
          "Add each number to total inside the loop.",
          "Print total after the loop."
        ],
        starterCode: "N = 10\ntotal = 0\n# Sum numbers from 1 to N\n# Your code here\n"
      },
      {
        id: "w3-c5",
        type: 'challenge',
        title: "Multiplication Table",
        description: "Print the multiplication table for a given number using a loop.",
        tasks: ["Assign a number, use a for loop to print its multiplication table up to 12."],
        breakdown: [
          "Assign a value to num.",
          "Use a for loop from 1 to 12.",
          "Print num * i for each i."
        ],
        hints: [
          "Use range(1, 13) for 1 to 12.",
          "Use f-strings to format output.",
          "Try with different numbers."
        ],
        starterCode: "num = 7\n# Print multiplication table for num\n# Your code here\n"
      },
    ],
  },
  // Week 4: Functions (Normal, Fruitful, Recursive)
  {
    week: 4,
    title: "Functions: Normal, Fruitful, Recursive",
    description: "Learn to write and use functions, including recursive ones.",
    challenges: [
      {
        id: "w4-c1",
        type: 'challenge',
        title: "Simple Greeting Function",
        description: "Write a function that prints a greeting message.",
        tasks: ["Define a function greet() that prints 'Hello, World!'. Call the function."],
        breakdown: [
          "Define a function named greet().",
          "Inside the function, use print() to display the greeting.",
          "Call the function after defining it."
        ],
        hints: [
          "Use def to define a function.",
          "Don't forget to call the function.",
          "Indent the print statement inside the function."
        ],
        starterCode: "# Define the function\ndef greet():\n    # Your code here\n\n# Call the function\n# greet()"
      },
      {
        id: "w4-c2",
        type: 'challenge',
        title: "Fruitful Function: Add Two Numbers",
        description: "Write a function that takes two numbers and returns their sum.",
        tasks: ["Define a function add(a, b) that returns the sum. Print the result for two numbers."],
        breakdown: [
          "Define a function add(a, b).",
          "Return the sum of a and b.",
          "Call the function with two numbers and print the result."
        ],
        hints: [
          "Use return to send back the result.",
          "Print the result after calling the function.",
          "Try with different numbers."
        ],
        starterCode: "# Define the function\ndef add(a, b):\n    # Your code here\n\n# Call and print\n# print(add(3, 5))"
      },
      {
        id: "w4-c3",
        type: 'challenge',
        title: "Recursive Function: Factorial",
        description: "Write a recursive function to calculate the factorial of a number.",
        tasks: ["Define a function factorial(n) that returns n!. Test it with a number."],
        breakdown: [
          "Define a function factorial(n).",
          "Base case: if n == 0 or 1, return 1.",
          "Recursive case: return n * factorial(n-1).",
          "Test with a sample number."
        ],
        hints: [
          "Remember to include a base case.",
          "Call the function with a positive integer.",
          "Try with n = 5 or 6."
        ],
        starterCode: "# Define the function\ndef factorial(n):\n    # Your code here\n\n# Test the function\n# print(factorial(5))"
      },
      {
        id: "w4-c4",
        type: 'challenge',
        title: "Permutation and Combination",
        description: "Write functions to calculate nPr and nCr using factorial.",
        tasks: ["Define functions for nPr and nCr using the factorial function. Print results for sample values."],
        breakdown: [
          "Define a factorial function.",
          "Define nPr as n! / (n-r)!, nCr as n! / (r! * (n-r)!)",
          "Call both functions with sample values and print the results."
        ],
        hints: [
          "Use integer division (//) for results.",
          "Test with n=5, r=2.",
          "Use the previously defined factorial function."
        ],
        starterCode: "# Define factorial, nPr, nCr functions\n# Your code here\n\n# Test with sample values\n# print(nPr(5, 2))\n# print(nCr(5, 2))"
      },
      {
        id: "w4-c5",
        type: 'challenge',
        title: "Function with Default Argument",
        description: "Write a function that greets a user, with a default name if none is given.",
        tasks: ["Define greet(name='User') that prints a greeting. Call it with and without an argument."],
        breakdown: [
          "Define a function greet(name='User').",
          "Use print() to display the greeting.",
          "Call the function with and without an argument."
        ],
        hints: [
          "Default arguments are set with = in the parameter list.",
          "Try calling greet() and greet('Alice').",
          "Use f-strings for output."
        ],
        starterCode: "# Define the function\ndef greet(name='User'):\n    # Your code here\n\n# Call the function\n# greet()\n# greet('Alice')"
      },
    ],
  },
  // Week 5: Data Structures
  {
    week: 5,
    title: "Data Structures",
    description: "Organize vast amounts of data using lists, dictionaries, tuples, and sets.",
    challenges: [
      {
        id: "w5-c1",
        type: 'challenge',
        title: "List Operations",
        description: "Perform a series of common operations on a list of numbers.",
        tasks: [
          "Given a list `numbers`, first, add the number 50 to the end.",
          "Then, remove the first element of the list.",
          "Finally, sort the list in ascending order and print it."
        ],
        breakdown: [
          "Use the `.append()` method to add an item to the end of a list.",
          "Use `del list[0]` or the `.pop(0)` method to remove the first item.",
          "Use the `.sort()` method to sort the list in-place."
        ],
        hints: [
          "`.append(item)` modifies the list directly.",
          "`.pop(index)` removes an item at a specific index.",
          "`.sort()` also modifies the list directly, you don't need to assign it to a new variable."
        ],
        starterCode: `numbers = [10, 40, 20, 30]\n\n# Your code here\n\nprint(numbers)`
      },
      {
        id: "w5-p1",
        type: 'project',
        title: "The Crew Manifest",
        description: "Build a simple contact book using a dictionary and perform operations on it.",
        tasks: [
          "Start with a predefined dictionary `contacts`.",
          "Add a new contact: 'Sulu': '555-9876'.",
          "Update an existing contact: Change 'Uhura's number to '555-5555'.",
          "Remove a contact: Delete 'Scotty' from the manifest.",
          "Print the final `contacts` dictionary."
        ],
        breakdown: [
          "To add a new item, use the syntax `dictionary['new_key'] = 'new_value'`.",
          "To update, use the same syntax as adding: `dictionary['existing_key'] = 'updated_value'`.",
          "To remove an item, use the `del` keyword: `del dictionary['key_to_remove']`."
        ],
        hints: [
          "Dictionaries store data in key-value pairs.",
          "Accessing a key that doesn't exist will cause an error when reading, but not when writing (as it creates the key)."
        ],
        starterCode: `contacts = {\n  "Kirk": "555-1701",\n  "Spock": "555-1234",\n  "Uhura": "555-4321",\n  "Scotty": "555-8765"\n}\n\n# Your operations here\n\nprint(contacts)`
      },
    ]
  },
  // Week 6: Numpy
  {
    week: 6,
    title: "Numpy Basics",
    description: "Learn to use Numpy for numerical operations in Python.",
    challenges: [
      {
        id: "w6-c1",
        type: 'challenge',
        title: "Create a Numpy Array",
        description: "Import numpy and create a 1D array with numbers 1 to 5.",
        tasks: ["Import numpy as np, create an array [1,2,3,4,5], and print it."],
        breakdown: [
          "Import numpy as np.",
          "Create a numpy array with numbers 1 to 5.",
          "Print the array."
        ],
        hints: [
          "Use np.array([1,2,3,4,5]).",
          "Don't forget to import numpy.",
          "Use print() to display the array."
        ],
        starterCode: "import numpy as np\n# Create array\n# arr = np.array([1,2,3,4,5])\n# print(arr)"
      },
      {
        id: "w6-c2",
        type: 'challenge',
        title: "Array Operations",
        description: "Perform element-wise addition and multiplication on two arrays.",
        tasks: ["Create two arrays, add and multiply them, print the results."],
        breakdown: [
          "Create two numpy arrays.",
          "Add the arrays element-wise.",
          "Multiply the arrays element-wise.",
          "Print both results."
        ],
        hints: [
          "Use np.add() and np.multiply() or + and *.",
          "Arrays must be the same shape.",
          "Print both results."
        ],
        starterCode: "import numpy as np\n# arr1 = np.array([1,2,3])\n# arr2 = np.array([4,5,6])\n# Add and multiply\n# Your code here"
      },
      {
        id: "w6-c3",
        type: 'challenge',
        title: "Array Slicing",
        description: "Slice a numpy array to get a subarray.",
        tasks: ["Create an array, slice it to get the first three elements, print the result."],
        breakdown: [
          "Create a numpy array.",
          "Slice the array to get the first three elements.",
          "Print the subarray."
        ],
        hints: [
          "Use arr[:3] to get the first three elements.",
          "Try with different arrays.",
          "Print the result."
        ],
        starterCode: "import numpy as np\n# arr = np.array([10, 20, 30, 40, 50])\n# subarr = arr[:3]\n# print(subarr)"
      },
      {
        id: "w6-c4",
        type: 'challenge',
        title: "Array Statistics",
        description: "Find the mean, median, and standard deviation of a numpy array.",
        tasks: ["Create an array, use numpy functions to print mean, median, std."],
        breakdown: [
          "Create a numpy array.",
          "Use np.mean(), np.median(), np.std() to calculate statistics.",
          "Print each result."
        ],
        hints: [
          "Import numpy as np.",
          "Use print() for each statistic.",
          "Try with different arrays."
        ],
        starterCode: "import numpy as np\n# arr = np.array([1,2,3,4,5])\n# print(np.mean(arr))\n# print(np.median(arr))\n# print(np.std(arr))"
      },
      {
        id: "w6-c5",
        type: 'challenge',
        title: "2D Arrays",
        description: "Create a 2D numpy array (matrix) and print its shape.",
        tasks: ["Create a 2D array, print its shape using .shape attribute."],
        breakdown: [
          "Create a 2D numpy array.",
          "Use .shape to get its dimensions.",
          "Print the shape."
        ],
        hints: [
          "Use np.array([[1,2],[3,4]]).",
          "The shape is a tuple (rows, columns).",
          "Print the array and its shape."
        ],
        starterCode: "import numpy as np\n# arr2d = np.array([[1,2],[3,4]])\n# print(arr2d)\n# print(arr2d.shape)"
      },
    ],
  },
  // Week 7: Pandas
  {
    week: 7,
    title: "Pandas Essentials",
    description: "Work with data using pandas: cleaning, writing to CSV, and more.",
    challenges: [
      {
        id: "w7-c1",
        type: 'challenge',
        title: "Create a DataFrame",
        description: "Create a pandas DataFrame from a dictionary and print it.",
        tasks: ["Import pandas as pd, create a DataFrame, print it."],
        breakdown: [
          "Import pandas as pd.",
          "Create a dictionary with some data.",
          "Use pd.DataFrame() to create the DataFrame and print it."
        ],
        hints: [
          "A DataFrame is like a table in Python.",
          "You can use {'col1': [1,2], 'col2': [3,4]} as a sample dictionary.",
          "Use print(df) to display the DataFrame."
        ],
        exampleOutput: "   col1  col2\n0     1     3\n1     2     4",
        starterCode: "# Your code here\n"
      },
      {
        id: "w7-c2",
        type: 'challenge',
        title: "Read CSV",
        description: "Read a CSV file into a DataFrame and print the first 5 rows.",
        tasks: ["Use pd.read_csv to read a file, print .head()."],
        breakdown: [
          "Import pandas as pd.",
          "Use pd.read_csv('filename.csv') to read the file.",
          "Call .head() on the DataFrame to print the first 5 rows."
        ],
        hints: [
          "You can use any CSV file for testing.",
          "If you don't have a file, create one with sample data.",
          "Use print(df.head()) to see the top rows."
        ],
        exampleOutput: "   col1  col2\n0     1     3\n1     2     4",
        starterCode: "# Your code here\n"
      },
      {
        id: "w7-c3",
        type: 'challenge',
        title: "Data Cleaning",
        description: "Remove missing values from a DataFrame.",
        tasks: ["Use .dropna() to remove NaN values, print the cleaned DataFrame."],
        breakdown: [
          "Create a DataFrame with some NaN values.",
          "Call .dropna() to remove rows with missing data.",
          "Print the cleaned DataFrame."
        ],
        hints: [
          "NaN means 'Not a Number' and represents missing data.",
          "Use import numpy as np; np.nan to create NaN values.",
          "Use print(df) to see the result."
        ],
        exampleOutput: "   col1  col2\n0   1.0   3.0\n2   2.0   4.0",
        starterCode: "# Your code here\n"
      },
      {
        id: "w7-c4",
        type: 'challenge',
        title: "Write to CSV",
        description: "Write a DataFrame to a CSV file.",
        tasks: ["Use .to_csv() to write a DataFrame to 'output.csv'."],
        breakdown: [
          "Create a DataFrame with some data.",
          "Call .to_csv('output.csv') to save it.",
          "Check the file to see the result."
        ],
        hints: [
          "The file will be created in your working directory.",
          "You can open the CSV file in Excel or a text editor.",
          "Use index=False to avoid writing row numbers."
        ],
        exampleOutput: "col1,col2\n1,3\n2,4",
        starterCode: "# Your code here\n"
      },
      {
        id: "w7-c5",
        type: 'challenge',
        title: "Describe Data",
        description: "Print summary statistics of a DataFrame.",
        tasks: ["Use .describe() to print summary statistics."],
        breakdown: [
          "Create a DataFrame with numeric data.",
          "Call .describe() to get statistics.",
          "Print the result."
        ],
        hints: [
          "describe() gives count, mean, std, min, max, etc.",
          "Works only on numeric columns by default.",
          "Use print(df.describe()) to see the output."
        ],
        exampleOutput: "       col1  col2\ncount   2.0   2.0\nmean    1.5   3.5\nstd     0.7   0.7\nmin     1.0   3.0\nmax     2.0   4.0",
        starterCode: "# Your code here\n"
      },
      // Added extra challenge for week 7
      {
        id: "w7-c6",
        type: 'challenge',
        title: "Column Selection",
        description: "Select a single column from a DataFrame and print it.",
        tasks: ["Create a DataFrame, select one column, and print it."],
        breakdown: [
          "Create a DataFrame with at least two columns.",
          "Select a column using df['colname'].",
          "Print the selected column."
        ],
        hints: [
          "You can use df['col1'] to select the column named 'col1'.",
          "Try printing different columns.",
          "Use print(type(df['col1'])) to see the type."
        ],
        exampleOutput: "0    1\n1    2\nName: col1, dtype: int64",
        starterCode: "# Your code here\n"
      },
    ],
  },

 
  // Week 8: Matplotlib
  {
    week: 8,
    title: "Matplotlib Visualization",
    description: "Visualize data using bar charts, line graphs, and scatter plots.",
    challenges: [
      {
        id: "w8-c1",
        type: 'challenge',
        title: "Bar Chart",
        description: "Plot a bar chart of sample data using matplotlib.",
        tasks: ["Import matplotlib.pyplot as plt, plot a bar chart, show it."],
        breakdown: [
          "Import matplotlib.pyplot as plt.",
          "Create sample data for x and y.",
          "Use plt.bar() to plot.",
          "Call plt.show() to display."
        ],
        hints: [
          "Use x = ['A', 'B', 'C'], y = [3, 7, 5].",
          "plt.bar(x, y) creates the bar chart.",
          "plt.show() displays the plot."
        ],
        starterCode: "import matplotlib.pyplot as plt\nx = ['A', 'B', 'C']\ny = [3, 7, 5]\n# Plot bar chart\n# plt.bar(x, y)\n# plt.show()"
      },
      {
        id: "w8-c2",
        type: 'challenge',
        title: "Line Graph",
        description: "Plot a line graph of sample data.",
        tasks: ["Plot a line graph using plt.plot()."],
        breakdown: [
          "Create sample data for x and y.",
          "Use plt.plot() to plot the line graph.",
          "Call plt.show() to display."
        ],
        hints: [
          "Use x = [1,2,3], y = [2,4,6].",
          "plt.plot(x, y) creates the line graph.",
          "plt.show() displays the plot."
        ],
        starterCode: "import matplotlib.pyplot as plt\nx = [1,2,3]\ny = [2,4,6]\n# Plot line graph\n# plt.plot(x, y)\n# plt.show()"
      },
      {
        id: "w8-c3",
        type: 'challenge',
        title: "Scatter Plot",
        description: "Plot a scatter plot of two lists of numbers.",
        tasks: ["Use plt.scatter() to plot two lists."],
        breakdown: [
          "Create two lists of numbers for x and y.",
          "Use plt.scatter() to plot the points.",
          "Call plt.show() to display."
        ],
        hints: [
          "Use x = [1,2,3], y = [4,5,6].",
          "plt.scatter(x, y) creates the scatter plot.",
          "plt.show() displays the plot."
        ],
        starterCode: "import matplotlib.pyplot as plt\nx = [1,2,3]\ny = [4,5,6]\n# Plot scatter plot\n# plt.scatter(x, y)\n# plt.show()"
      },
      {
        id: "w8-c4",
        type: 'challenge',
        title: "Histogram",
        description: "Plot a histogram of a list of numbers.",
        tasks: ["Use plt.hist() to plot a histogram."],
        breakdown: [
          "Create a list of numbers.",
          "Use plt.hist() to plot the histogram.",
          "Call plt.show() to display."
        ],
        hints: [
          "Use data = [1,2,2,3,3,3,4].",
          "plt.hist(data) creates the histogram.",
          "plt.show() displays the plot."
        ],
        starterCode: "import matplotlib.pyplot as plt\ndata = [1,2,2,3,3,3,4]\n# Plot histogram\n# plt.hist(data)\n# plt.show()"
      },
      {
        id: "w8-c5",
        type: 'challenge',
        title: "Customize Plot",
        description: "Add title, labels, and legend to a plot.",
        tasks: ["Add a title, x/y labels, and a legend to a matplotlib plot."],
        breakdown: [
          "Create sample data for x and y.",
          "Plot the data using plt.plot().",
          "Add title, x/y labels, and legend.",
          "Call plt.show() to display."
        ],
        hints: [
          "Use plt.title(), plt.xlabel(), plt.ylabel(), plt.legend().",
          "Add label='Line' to plt.plot().",
          "plt.legend() shows the legend."
        ],
        starterCode: "import matplotlib.pyplot as plt\nx = [1,2,3]\ny = [2,4,6]\n# Plot with labels\n# plt.plot(x, y, label='Line')\n# plt.title('My Plot')\n# plt.xlabel('X')\n# plt.ylabel('Y')\n# plt.legend()\n# plt.show()"
      },
    ],
  },
  // Week 9: Machine Learning
  {
    week: 9,
    title: "Machine Learning Basics",
    description: "Get started with machine learning: linear regression, logistic regression, and decision trees.",
    challenges: [
      {
        id: "w9-c1",
        type: 'challenge',
        title: "Linear Regression",
        description: "Fit a linear regression model to sample data using scikit-learn.",
        tasks: ["Import LinearRegression, fit a model, print coefficients.", "Use sample X and y data."],
        starterCode: "# Your code here\n",
        hints: ["Use LinearRegression from sklearn.linear_model."]
      },
      {
        id: "w9-c2",
        type: 'challenge',
        title: "Logistic Regression",
        description: "Fit a logistic regression model to sample data.",
        tasks: ["Import LogisticRegression, fit a model, print accuracy.", "Use sample X and y data."],
        starterCode: "# Your code here\n",
        hints: ["Use LogisticRegression from sklearn.linear_model."]
      },
      {
        id: "w9-c3",
        type: 'challenge',
        title: "Decision Tree Classifier",
        description: "Train a decision tree classifier and print accuracy.",
        tasks: ["Import DecisionTreeClassifier, fit a model, print accuracy.", "Use sample X and y data."],
        starterCode: "# Your code here\n",
        hints: ["Use DecisionTreeClassifier from sklearn.tree."]
      },
      {
        id: "w9-c4",
        type: 'challenge',
        title: "Train/Test Split",
        description: "Split data into train and test sets using train_test_split.",
        tasks: ["Import train_test_split, split X and y, print shapes of splits."],
        starterCode: "# Your code here\n",
        hints: ["Use train_test_split from sklearn.model_selection."]
      },
      {
        id: "w9-c5",
        type: 'challenge',
        title: "Model Evaluation",
        description: "Evaluate a model's predictions using accuracy_score.",
        tasks: ["Import accuracy_score, compare predictions to y_test, print accuracy."],
        starterCode: "# Your code here\n",
        hints: ["Use accuracy_score from sklearn.metrics."]
      },
    ]
  },
   {
    week: 10,
    title: "Challenge Yourself!",
    description: "Take on these real-world problems to test your Python skills.",
    challenges: [
      {
        id: "cy-1",
        type: 'challenge',
        title: "ATM Machine Simulator",
        description: "Simulate a simple ATM machine with balance check, deposit, and withdrawal.",
        tasks: ["Create a balance variable.", "Allow deposit and withdrawal operations.", "Print the balance after each operation.", "Handle insufficient funds."],
        breakdown: ["Use input() to select operation.", "Update balance based on user input.", "Check for negative balance before withdrawal."],
        hints: ["Use if-elif-else for menu.", "Use while loop for multiple operations.", "Print messages for errors."],
        exampleOutput: "Welcome!\n1. Deposit\n2. Withdraw\n3. Check Balance\nEnter choice: 1\nEnter amount: 100\nBalance: 100",
        starterCode: "balance = 0\n# Your code here"
      },
      {
        id: "cy-2",
        type: 'challenge',
        title: "Discount Calculator",
        description: "Calculate the final price after applying a discount.",
        tasks: ["Input original price and discount percent.", "Calculate and print the discounted price."],
        breakdown: ["Get price and discount from user.", "Calculate discount amount.", "Subtract from original price."],
        hints: ["Use float() for decimal input.", "Discount = price * percent / 100.", "Print with two decimals."],
        exampleOutput: "Original: 200\nDiscount: 10%\nFinal Price: 180.00",
        starterCode: "# Your code here"
      },
      {
        id: "cy-3",
        type: 'challenge',
        title: "BMI Calculator",
        description: "Calculate the Body Mass Index (BMI) from user input.",
        tasks: ["Input weight (kg) and height (m).", "Calculate BMI using the formula.", "Print the BMI value."],
        breakdown: ["Get weight and height from user.", "BMI = weight / (height ** 2).", "Print the result rounded to 2 decimals."],
        hints: ["Use float() for input.", "Use ** for exponentiation.", "BMI is usually between 15 and 40."],
        exampleOutput: "Weight: 70\nHeight: 1.75\nBMI: 22.86",
        starterCode: "# Your code here"
      },
      {
        id: "cy-4",
        type: 'challenge',
        title: "Leap Year Checker",
        description: "Check if a given year is a leap year.",
        tasks: ["Input a year.", "Check leap year rules.", "Print if it is a leap year or not."],
        breakdown: ["A year is leap if divisible by 4, not by 100 unless also by 400.", "Use if-elif-else.", "Print the result."],
        hints: ["Use % operator.", "Careful with 1900, 2000, etc.", "Test with several years."],
        exampleOutput: "Year: 2020\nLeap year!",
        starterCode: "# Your code here"
      },
      {
        id: "cy-5",
        type: 'challenge',
        title: "Password Generator",
        description: "Generate a random password of given length.",
        tasks: ["Input desired password length.", "Generate a password with letters and numbers.", "Print the password."],
        breakdown: ["Use import random and string.", "Use random.choices().", "Join the result into a string."],
        hints: ["Use string.ascii_letters and string.digits.", "random.choices() returns a list.", "Use ''.join()."],
        exampleOutput: "Password: a8B2kLm9",
        starterCode: "# Your code here"
      },
      {
        id: "cy-6",
        type: 'challenge',
        title: "Prime Number Finder",
        description: "Find all prime numbers up to a given number.",
        tasks: ["Input a number N.", "Print all primes up to N."],
        breakdown: ["Loop from 2 to N.", "Check if each number is prime.", "Print primes separated by space."],
        hints: ["A prime has no divisors except 1 and itself.", "Use nested loops.", "Use break to exit early."],
        exampleOutput: "Primes up to 10: 2 3 5 7",
        starterCode: "# Your code here"
      },
      {
        id: "cy-7",
        type: 'challenge',
        title: "Fibonacci Sequence",
        description: "Print the first N numbers in the Fibonacci sequence.",
        tasks: ["Input N.", "Print the sequence up to N terms."],
        breakdown: ["Start with 0, 1.", "Each next number is sum of previous two.", "Use a loop to generate sequence."],
        hints: ["Use a for loop.", "Store previous two numbers.", "Print each number."],
        exampleOutput: "Fibonacci: 0 1 1 2 3 5 8",
        starterCode: "# Your code here"
      },
      {
        id: "cy-8",
        type: 'challenge',
        title: "Palindrome Checker",
        description: "Check if a string is a palindrome.",
        tasks: ["Input a string.", "Check if it reads the same forwards and backwards.", "Print result."],
        breakdown: ["Get string from user.", "Reverse string with slicing.", "Compare and print True/False."],
        hints: ["Use s[::-1] to reverse.", "Case matters unless you .lower().", "Try with 'madam', 'racecar'."],
        exampleOutput: "madam is a palindrome: True",
        starterCode: "# Your code here"
      },
      {
        id: "cy-9",
        type: 'challenge',
        title: "Number Guessing Game",
        description: "Guess a randomly generated number.",
        tasks: ["Generate a random number.", "Let user guess until correct.", "Print hints for too high/low."],
        breakdown: ["Use random.randint().", "Use a while loop for guesses.", "Print attempts at the end."],
        hints: ["Use input() for guesses.", "Convert input to int.", "Give feedback after each guess."],
        exampleOutput: "Guess the number between 1 and 100.\nToo high!\nToo low!\nCorrect in 5 attempts!",
        starterCode: "# Your code here"
      },
      {
        id: "cy-10",
        type: 'challenge',
        title: "Simple Calendar",
        description: "Print the calendar for a given month and year.",
        tasks: ["Input month and year.", "Print the calendar."],
        breakdown: ["Use import calendar.", "Call calendar.month(year, month).", "Print the result."],
        hints: ["Use int() for input.", "calendar.month() returns a string.", "Print the string."],
        exampleOutput: "   July 2025\nMo Tu We Th Fr Sa Su\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31",
        starterCode: "# Your code here"
      },
      {
        id: "cy-11",
        type: 'challenge',
        title: "Currency Converter",
        description: "Convert an amount from one currency to another using a fixed rate.",
        tasks: ["Input amount in USD.", "Convert to EUR using a fixed rate.", "Print the result."],
        breakdown: ["Get amount from user.", "Multiply by rate (e.g., 0.9).", "Print result with 2 decimals."],
        hints: ["Use float() for input.", "Choose any rate.", "Print with f-strings."],
        exampleOutput: "USD: 100\nEUR: 90.00",
        starterCode: "# Your code here"
      },
      {
        id: "cy-12",
        type: 'challenge',
        title: "Temperature Converter",
        description: "Convert Celsius to Fahrenheit and vice versa.",
        tasks: ["Input temperature and unit.", "Convert to the other unit.", "Print the result."],
        breakdown: ["Get value and unit from user.", "Use formulas for conversion.", "Print both values."],
        hints: ["Use if-else for unit.", "C to F: F = C*9/5+32.", "F to C: C = (F-32)*5/9."],
        exampleOutput: "Celsius: 0\nFahrenheit: 32.0",
        starterCode: "# Your code here"
      },
      {
        id: "cy-13",
        type: 'challenge',
        title: "Student Gradebook",
        description: "Store and print student names and grades.",
        tasks: ["Input names and grades.", "Store in a dictionary.", "Print all students and grades."],
        breakdown: ["Use a loop for multiple students.", "Store in dict: {name: grade}.", "Print each entry."],
        hints: ["Use input() in a loop.", "Use int() or float() for grades.", "Print with f-strings."],
        exampleOutput: "Alice: 90\nBob: 85",
        starterCode: "# Your code here"
      },
      {
        id: "cy-14",
        type: 'challenge',
        title: "Shopping Cart",
        description: "Simulate a simple shopping cart.",
        tasks: ["Add items and prices.", "Calculate total.", "Print receipt."],
        breakdown: ["Use a list for items.", "Sum prices for total.", "Print each item and total."],
        hints: ["Use append() for list.", "Use a loop to print items.", "Print total at the end."],
        exampleOutput: "Apple: $1.00\nBanana: $0.50\nTotal: $1.50",
        starterCode: "# Your code here"
      },
      {
        id: "cy-15",
        type: 'challenge',
        title: "To-Do List",
        description: "Create a simple to-do list app.",
        tasks: ["Add, remove, and view tasks.", "Use a list to store tasks.", "Print all tasks."],
        breakdown: ["Use a loop for menu.", "Use append() and remove() for list.", "Print tasks after each operation."],
        hints: ["Use while loop for menu.", "Use input() for choices.", "Print tasks with a loop."],
        exampleOutput: "1. Add\n2. Remove\n3. View\nTask: Buy milk\nTasks: ['Buy milk']",
        starterCode: "# Your code here"
      },
      {
        id: "cy-16",
        type: 'challenge',
        title: "Rock Paper Scissors",
        description: "Play Rock, Paper, Scissors against the computer.",
        tasks: ["Input your choice.", "Randomly select computer's choice.", "Print winner."],
        breakdown: ["Use random.choice().", "Compare choices.", "Print result."],
        hints: ["Choices: 'rock', 'paper', 'scissors'.", "Use lower() for input.", "Print both choices."],
        exampleOutput: "You: rock\nComputer: scissors\nYou win!",
        starterCode: "# Your code here"
      },
      {
        id: "cy-17",
        type: 'challenge',
        title: "Dice Roller",
        description: "Simulate rolling a dice.",
        tasks: ["Input number of sides.", "Roll the dice and print result."],
        breakdown: ["Use random.randint(1, sides).", "Print the result.", "Repeat if desired."],
        hints: ["Default is 6 sides.", "Use int() for input.", "Print with f-strings."],
        exampleOutput: "Rolled: 4",
        starterCode: "# Your code here"
      },
      {
        id: "cy-18",
        type: 'challenge',
        title: "Simple Stopwatch",
        description: "Create a simple stopwatch using time module.",
        tasks: ["Start and stop the timer.", "Print elapsed time."],
        breakdown: ["Use time.time() for start and end.", "Subtract to get elapsed.", "Print with 2 decimals."],
        hints: ["Use input() to start/stop.", "time.sleep() can pause.", "Print seconds elapsed."],
        exampleOutput: "Elapsed: 2.34 seconds",
        starterCode: "# Your code here"
      },
      {
        id: "cy-19",
        type: 'challenge',
        title: "Word Counter",
        description: "Count the number of words in a sentence.",
        tasks: ["Input a sentence.", "Count and print the number of words."],
        breakdown: ["Use input() to get sentence.", "Use .split() to get words.", "Print length of list."],
        hints: ["Words are separated by spaces.", "Use len() to count.", "Try with different sentences."],
        exampleOutput: "Sentence: Hello world\nWords: 2",
        starterCode: "# Your code here"
      },
      {
        id: "cy-20",
        type: 'challenge',
        title: "File Line Counter",
        description: "Count the number of lines in a text file.",
        tasks: ["Open a file.", "Count lines.", "Print the count."],
        breakdown: ["Use open() and readlines().", "Count with len().", "Print the result."],
        hints: ["Use with open() as f.", "Use try-except for errors.", "Print file not found if needed."],
        exampleOutput: "Lines: 42",
        starterCode: "# Your code here"
      },
    ]
  },
];
  // Week 3: Control Structures (Decision Making & Loops)
  