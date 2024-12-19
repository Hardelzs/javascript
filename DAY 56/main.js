const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Tool Markup Language",
            "Hyper Text Markdown Language",
            "Hyper Tool Markdown Language"
        ],
        correct: "A"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "link",
            "a",
            "href",
            "h"
        ],
        correct: "B"
    },
    {
        question: "Which attribute specifies the URL for a hyperlink?",
        options: [
            "src",
            "link",
            "href",
            "url"
        ],
        correct: "C"
    },
    {
        question: "What does the <br> tag do?",
        options: [
            "Inserts a line break",
            "Makes text bold",
            "Breaks the browser connection",
            "Adds a border"
        ],
        correct: "A"
    },
    {
        question: "What is the use of the display property in CSS?",
        options: [
            "To hide elements",
            "To define how elements are displayed",
            "To position elements",
            "To control text alignment"
        ],
        correct: "B"
    },
    {
        question: "How do you link an external CSS file to an HTML document?",
        options: [
            "link rel='stylesheet' href='style.css'",
            "style src='style.css'",
            "css href='style.css'",
            "stylesheet link='style.css'"
        ],
        correct: "A"
    },
        {
        question: "What is the correct syntax for adding an inline style?",
        options: [
            " style='color: red;'>This is a paragraph.",
            " styles='color: red;'>This is a paragraph.",
            " style-color: red>This is a paragraph.",
            " style:red>This is a paragraph."
        ],
        correct: "A"
    },


    {
        question: "Which CSS property is used to add space inside an element's border?",
        options: [
            "padding",
            "margin",
            "border-spacing",
            "spacing"
        ],
        correct: "B"
    },

    {
        question: "Which CSS property is used to control the space outside an element?",
        options: [
            "padding",
            "margin",
            "spacing",
            "border"
        ],
        correct: "B"
    },

    {
        question: "What is the default position value in CSS?",
        options: [
            "absolute",
            "fixed",
            "static",
            "relative"
        ],
        correct: "C"
    },

    {
        question: "What is the purpose of the float property in CSS?",
        options: [
            "To position elements relatively",
            "To align elements horizontally",
            "To stack elements vertically",
            "To clear an element's styles"
        ],
        correct: "B"
    },

    {
        question: "Which CSS property is used to apply bold text?",
        options: [
            "font-weight",
            "text-bold",
            "font-bold",
            "text-weight"
        ],
        correct: "A"
    },

    {
        question: "What is the use of the display property in CSS?",
        options: [
            "box-shadow",
            "text-shadow",
            "font-shadow",
            "shadow"
        ],
        correct: "B"
    },

    {
        question: "Which unit is NOT a relative unit in CSS?",
        options: [
            "em",
            "rem",
            "%",
            "px"
        ],
        correct: "D"
    },

    {
        question: "What is the correct syntax to make the background image of a webpage cover the entire page?",
        options: [
            "background-size: cover;",
            "background-fit: fill;",
            "background-cover: full;",
            "background-fill: cover;"
        ],
        correct: "A"
    },

    {
        question: "What is the purpose of the overflow property in CSS?",
        options: [
            "To hide or scroll content that exceeds an element's box",
            "To clear floated elements",        
            "To define the z-index of an element",
            "To control the margins of an element"
        ],
        correct: "A"
    },

    {
        question: "How do you select an element with the id main in CSS?",
        options: [
            ".main",
            "#main",
            "main",
            "id=main"
        ],
        correct: "B"
    },  

    {
        question: "Which CSS property is used to change the cursor icon?",
        options: [
            "icon",
            "cursor",
            "pointer",
            "hover"
        ],
        correct: "B"
    },      
    {
        question: "What is a web-based application?",
        options: [
          " An application that is only usable offline.",
          " An application accessed over a network using HTTP.",
          " An application stored on a device's memory.",
          " An application requiring specific hardware."
        ],
        correct: "B"
    },
    {
        question: "Which protocol is commonly used for web applications?",
        options: [
          " FTP",
          " SMTP",
          " HTTP",
          " SNMP"
        ],
        correct: "C"
    },
    {
        question: "What scripting language did Netscape introduce in 1995?",
        options: [
          " Python",
          " PHP",
          " JavaScript",
          " Ruby"
        ],
        correct: "C"
    },
    {
        question: "What major milestone occurred in 2011 regarding HTML?",
        options: [
          " Introduction of JavaScript",
          " Finalization of HTML5",
          " Launch of Ajax",
          " Introduction of XML"
        ],
        correct: "B"
    },
    {
        question: "Which of these is NOT a benefit of web applications?",
        options: [
          " Accessibility",
          " Scalability",
          " Efficient Development",
          " Requires device-specific installation"
        ],
        correct: "D"
    },
    {
        question: "What is the purpose of the presentation layer in web architecture?",
        options: [
          " Processing client requests.",
          " Storing data.",
          " Displaying information to users.",
          " Handling business logic."
        ],
        correct: "C"
    },
    {
        question: "Which database is NOT an example of NoSQL?",
        options: [
          " MongoDB",
          " Cassandra",
          " MySQL",
          " Couchbase"
        ],
        correct: "C"
    },
    {
        question: "What does the application tier handle in a 3-tier architecture?",
        options: [
          " Data storage",
          " User interface",
          " Business logic",
          " Network management"
        ],
        correct: "C"
    },
    {
        question: "What does DNS primarily do?",
        options: [
          " Hosts databases",
          " Maps domain names to IP addresses",
          " Manages web applications",
          " Handles server-side logic"
        ],
        correct: "B"
    },
    {
        question: "What does CSS stand for?",
        options: [
          " Creative Style Sheets",
          " Cascading Style Sheets",
          " Computer Style Sheets",
          " Colorful Style Sheets"
        ],
        correct: "B"
    },
    {
        question: "Which property in CSS sets the background color?",
        options: [
          " color",
          " background-color",
          " bgcolor",
          " border-color"
        ],
        correct: "B"
    },
    {
        question: "Which type of CSS is defined inside the `<style>` tag?",
        options: [
          " Inline CSS",
          " Internal CSS",
          " External CSS",
          " Embedded CSS"
        ],
        correct: "B"
    },
    {
        question: "Which CSS property is used to add space inside an element?",
        options: [
          " margin",
          " padding",
          " border-spacing",
          " alignment"
        ],
        correct: "B"
    },
    {
        question: "What is the z-index property used for?",
        options: [
          " Text alignment",
          " Layer stacking",
          " Font size",
          " Padding control"
        ],
        correct: "B"
    },

];
