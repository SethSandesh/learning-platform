import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './BlogPage.css'; // Import custom CSS

const BlogPage = () => {
  return (
    <Container fluid className="blog-page">
      <h1 className="text-center mt-5 mb-4">Blog Articles</h1>
      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <Card className="blog-card">
            <Card.Body>
              <Card.Title>Introduction to JavaScript Programming</Card.Title>
              <Card.Text>
                <strong>JavaScript</strong> is a versatile and essential programming language that powers modern web development. It was first introduced in 1995 by Netscape as a client-side scripting language, but it has since evolved into a powerful tool for both client-side and server-side programming.

                <h5 className="mt-3">What is JavaScript?</h5>
                JavaScript is a high-level, interpreted language known for its ability to create interactive and dynamic web pages. It runs in the browser and allows developers to implement complex features on web pages, such as form validation, animations, and dynamic content updates.

                <h5 className="mt-3">Key Features</h5>
                <ul>
                  <li><strong>Interactivity:</strong> JavaScript enables developers to make web pages interactive by responding to user actions such as clicks, hover events, and form submissions.</li>
                  <li><strong>Versatility:</strong> It can be used on both the client-side (in the browser) and server-side (with environments like Node.js), making it a full-stack language.</li>
                  <li><strong>Event-Driven:</strong> JavaScript uses an event-driven programming model, where code execution is triggered by events, such as user inputs or messages from other programs.</li>
                  <li><strong>Asynchronous Operations:</strong> JavaScript supports asynchronous programming, which allows tasks to run concurrently without blocking the main execution thread. This is particularly useful for handling tasks like API requests and file operations.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="blog-card">
            <Card.Body>
              <Card.Title>Why Learn Python?</Card.Title>
              <Card.Text>
                <strong>Python</strong> is one of the most popular and versatile programming languages today. Its simplicity and readability make it an excellent choice for beginners and experienced developers alike. Here’s why you should consider learning Python:

                <h5 className="mt-3">Ease of Learning</h5>
                Python's clean and easy-to-read syntax is designed to be straightforward, making it an ideal language for beginners. Its simplicity allows new programmers to focus on learning programming concepts without getting bogged down by complex syntax rules.

                <h5 className="mt-3">Versatility</h5>
                Python is highly versatile and can be used for a wide range of applications, from web development and data analysis to artificial intelligence and scientific computing. This flexibility opens up numerous opportunities in various fields.

                <h5 className="mt-3">Strong Community and Libraries</h5>
                Python boasts a large and active community, providing extensive resources, tutorials, and support. Additionally, it has a rich ecosystem of libraries and frameworks, such as Django for web development and Pandas for data analysis, which accelerate development and reduce the need for reinventing the wheel.

                <h5 className="mt-3">Career Opportunities</h5>
                Python is highly sought after in the job market due to its applicability in numerous domains. Learning Python can open doors to various career paths, including web development, data science, machine learning, and automation.

                In summary, Python’s ease of learning, versatility, strong community support, and broad range of applications make it a valuable language to add to your skillset, whether you're starting your programming journey or looking to expand your expertise.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="blog-card">
            <Card.Body>
              <Card.Title>HTML & CSS: Basics of Web Design</Card.Title>
              <Card.Text>
                <strong>HTML</strong> (Hypertext Markup Language) and <strong>CSS</strong> (Cascading Style Sheets) are the foundational technologies for web design. Together, they enable developers to create structured, styled, and visually appealing web pages.

                <h5 className="mt-3">What is HTML?</h5>
                HTML is the backbone of web content. It provides the structure for web pages through a system of tags and elements. Elements such as headings, paragraphs, links, and images are defined using HTML tags, which form the basic structure of a web page.

                <h5 className="mt-3">What is CSS?</h5>
                CSS is used to control the presentation of web pages. It allows developers to apply styles to HTML elements, such as colors, fonts, layouts, and spacing. By separating content (HTML) from presentation (CSS), web designers can maintain a consistent look and feel across different pages.

                <h5 className="mt-3">Key Concepts</h5>
                <ul>
                  <li><strong>HTML Structure:</strong> HTML documents are structured using elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code>, which define different parts of the page.</li>
                  <li><strong>CSS Styling:</strong> CSS rules are defined using selectors and properties. For example, <code>p  Color: blue; </code> changes the text color of all paragraphs to blue.</li>
                  <li><strong>Responsive Design:</strong> CSS media queries allow designers to create responsive layouts that adapt to different screen sizes and devices, ensuring a seamless user experience across desktops, tablets, and smartphones.</li>
                </ul>

                In conclusion, understanding HTML and CSS is crucial for anyone interested in web design and development. These technologies form the foundation upon which modern web pages are built, enabling developers to create structured, styled, and user-friendly websites.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="blog-card">
            <Card.Body>
              <Card.Title>Advanced JavaScript Concepts</Card.Title>
              <Card.Text>
                As you become more proficient in JavaScript, diving into advanced concepts can enhance your coding skills and open new possibilities. Here are some key advanced JavaScript concepts to explore:

                <h5 className="mt-3">Closures</h5>
                Closures allow functions to access variables from an outer function scope even after the outer function has finished executing. This enables powerful patterns such as data encapsulation and creating private variables.

                <h5 className="mt-3">Promises and Async/Await</h5>
                Promises and the async/await syntax simplify working with asynchronous code. Promises represent a value that may be available now or in the future, while async/await provides a more readable and concise way to handle asynchronous operations compared to traditional callbacks.

                <h5 className="mt-3">Prototypes and Inheritance</h5>
                JavaScript’s prototype-based inheritance allows objects to inherit properties and methods from other objects. Understanding prototypes and inheritance can help you create more efficient and modular code.

                <h5 className="mt-3">Event Delegation</h5>
                Event delegation involves attaching a single event listener to a parent element rather than multiple listeners to child elements. This technique can improve performance and simplify event handling, especially when dealing with dynamically added elements.

                <h5 className="mt-3">Modules</h5>
                JavaScript modules help organize code by encapsulating functionality into reusable components. ES6 introduced module syntax, allowing you to export and import functions, objects, or variables across different files, enhancing code maintainability and reusability.

                Exploring these advanced JavaScript concepts can significantly improve your programming skills and help you tackle more complex challenges in web development. Mastering these techniques will make you a more effective and versatile developer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="blog-card">
            <Card.Body>
              <Card.Title>Introduction to Backend Development with Node.js</Card.Title>
              <Card.Text>
                <strong>Node.js</strong> is a popular runtime environment that allows developers to execute JavaScript on the server side. It is widely used for building scalable and high-performance backend applications. Here’s an introduction to backend development with Node.js:

                <h5 className="mt-3">What is Node.js?</h5>
                Node.js is built on Chrome's V8 JavaScript engine and provides a non-blocking, event-driven architecture. This makes it ideal for handling multiple simultaneous connections efficiently, which is essential for modern web applications.

                <h5 className="mt-3">Key Features</h5>
                <ul>
                  <li><strong>Event-Driven Architecture:</strong> Node.js uses an event-driven, non-blocking I/O model that handles requests asynchronously, enabling high concurrency and scalability.</li>
                  <li><strong>npm (Node Package Manager):</strong> Node.js comes with npm, a package manager that provides access to a vast ecosystem of open-source libraries and tools, simplifying the development process.</li>
                  <li><strong>Single Programming Language:</strong> With Node.js, you can use JavaScript for both frontend and backend development, streamlining development and allowing for code reuse across the stack.</li>
                </ul>

                <h5 className="mt-3">Getting Started</h5>
                To start developing with Node.js, you need to install it on your machine and set up a development environment. Create a new project by initializing a package.json file with <code>npm init</code>, and then install necessary dependencies.

                <h5 className="mt-3">Basic Example</h5>
                Here’s a simple example of a basic Node.js server:

                <pre><code>
                  const http = require('http');<br />
                  const server = http.createServer((req, res) = {'{'}<br />
                  &nbsp;&nbsp;res.statusCode = 200;<br />
                  &nbsp;&nbsp;res.setHeader('Content-Type', 'text/plain');<br />
                  &nbsp;&nbsp;res.end('Hello, world!');<br />
                  {'}'});<br />
                  server.listen(3000, '127.0.0.1', () = {'{'}<br />
                  &nbsp;&nbsp;console.log('Server running at http://127.0.0.1:3000/');<br />
                  {'}'});<br />
                </code></pre>

                In conclusion, Node.js is a powerful and flexible platform for building server-side applications. Its non-blocking architecture, extensive package ecosystem, and use of JavaScript make it a popular choice for modern web development.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
