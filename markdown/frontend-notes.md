1.  **How to preserve space tab & newline**

    ```css
    white-space: pre;
    ```

1.  **When to use functional components and when to use class components (other than state management)**

    Functional components are simpler and easier to test, while class components offer more features and lifecycle methods.

    - Use functional components for simple UI components
    - Use class components for more complex UI components
    - Functional components are easier to read and maintain
    - Class components offer more lifecycle methods and state management options

1.  **How Html, CSS and Javascript are executed**

    HTML, CSS, and JS are executed by the browser.

    - HTML is parsed and rendered into a Document Object Model (DOM)
    - CSS is applied to the DOM to style the content
    - JS is executed to add interactivity and manipulate the DOM
    - Browser engines like Blink, Gecko, and WebKit handle the execution

    Convert a list of dates to a specific format.

1.  What is Hoisting

    Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.

1.  What are closures

    A closure is the combination of a function bundled(enclosed) together with its lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution. The closure has three scope chains.

    1. Own scope where variables defined between its curly brackets
    2. Outer function's variables
    3. Global variables

    Let's take an example of closure concept,

    ```jsx
    function Welcome(name) {
      var greetingInfo = function (message) {
        console.log(message + " " + name);
      };
      return greetingInfo;
    }
    var myFunction = Welcome("John");
    myFunction("Welcome "); //Output: Welcome John
    myFunction("Hello Mr."); //output: Hello Mr. John
    ```

    As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.

1.  **What are modules**

    Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor

1.  **Why do you need modules**

    Below are the list of benefits using modules in javascript ecosystem

    1. Maintainability
    2. Reusability
    3. Namespacing

1.  **What is scope in javascript**

    Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

1.  **What is a service worker**
    A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

1.  **How do you manipulate DOM using a service worker**
    Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM.

1.  **What is IndexedDB**
    IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.

1.  **What is a post message**
    Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).

1.  **How do you compare Object and Map**
    Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases:

    The keys of an Object can be Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive type.
    The keys in a Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in the order of insertion.
    You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually. 2. **What is a promise**

    A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

    The syntax of Promise creation looks like below,

1.  **Why do you need a promise**

    Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

1.  **What is the difference between == and === operators**

    JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,

    1.  Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
    2.  Two numbers are strictly equal when they are numerically equal, i.e., having the same number value. There are two special cases in this,
        1. NaN is not equal to anything, including NaN.
        2. Positive and negative zeros are equal to one another.
    3.  Two Boolean operands are strictly equal if both are true or both are false.
    4.  Two objects are strictly equal if they refer to the same Object.
    5.  Null and Undefined types are not equal with ===, but equal with == . i.e, `null===undefined --> false`, but `null==undefined --> true`

    Some of the example which covers the above cases:

    ```javascript
    0 == false   // true
    0 === false  // false
    1 == "1"     // true
    1 === "1"    // false
    null == undefined // true
    null === undefined // false
    '0' == false // true
    '0' === false // false
    NaN == NaN or NaN === NaN // false
    []==[] or []===[] //false, refer different objects in memory
    {}=={} or {}==={} //false, refer different objects in memory
    ```

1.  **Coersion**

    **\*\***Step 1: Understand Coercion ONLY Applies to Primitive Types**\*\***

    This may have been self-evident to you, but it wasn’t to me. JS is not ‘type safe’ after all, and it seems to be able to, or at least try to, coerce anything to anything. But it doesn’t. For any two objects:

    ```javascript
    anyObject == anyOtherObject;
    ```

    will always be `false`, unless they refer to the same actual object. It’s just a simple reference check. Coercion will ONLY occur when you attempt something that requires a value be forced into something else. `anyObject + anyOtherObject` for example will cause coercion to occur, but even then, both objects will *first* be converted to their primitive values.

    To state this another way: in Javascript, **objects NEVER get *coerced***. Coercion is the process of forcing one type of `primitive` value to another type of `primitive` value. If an object needs to ‘coerced’, Javascript will *first* attempt to get a `primitive` value for the object, and then coerce that primitive value if needed.

    That might be playing with semantics a little bit, but thinking in terms of ‘coercion ONLY happens on primitive values’ greatly reduces the amount of ‘coercion rules’ you need to remember to understand how it works, since Javascript has only ̶f̶i̶v̶e̶ seven (see following note) primitive types: `number`, `string`, `boolean`, `null`, and `undefined`.

    (NOTE: ES6 added the primitive type `symbol` but you don’t need to worry about anything coercing into a symbol, or vice versa, so we’re going to ignore that for coercion. Since the time of writing, `bigint`has also been added as another primitive, so its exact coercion details are not covered below and is ‘left as an exercise to the reader’. The general steps below are still the same however and should be useful to help you work out JS coercion behaviour).

    **\*\***Step 2: Understand How Objects “Coerce” to Primitives**\*\***

    The next question then is, how does Javascript get a primitive value for any object? And fortunately, this is pretty simple to understand. The process (known in the spec as the `ToPrimitive` operation) works like this:

    ```jsx
    // pseudo-codeif(obj.valueOf) {
       pVal = obj.valueOf();
       if(pVal is primitive) return pVal;
    }if(obj.toString) {
       pVal = obj.toString();
       if(pVal is primitive) return pVal;
    }// could not get a primitive value so
    throw TypeError;
    ```

    That’s it! It tries to get a primitive value from the `valueOf` function (if it exists). If that doesn’t work, it tries to get a primitive value from `toString`, which *probably* will exist and *probably* will return a `string`. (You can, of course, define a toString function that doesn’t return a string, but you are asking for trouble in doing so.) If neither of those functions produces a primitive value, then the object can NOT be coerced, so it just throws a `TypeError`.

    _NOTE_: as of ES6 you can redefine this behaviour by providing a different implementation of the `ToPrimitive`operation like so: `obj[Symbol.toPrimitive] = <insert your function here>`. Your function should return a primitive or you’ll get a TypeError again (it won’t proceed to check for valueOf or toString).

    **\*\***Step 3: Know What toString Will Return**\*\***

    For most objects, `toString` simply returns `'[object ObjectName]'`. But you should also be aware of what (at least) a couple other common objects do:

    **Arrays**:

    - toString returns a string that joins the `string` representations of its values with a comma. So`[1, {}, 3].toString()` will return `'1,[object Object],3'`
    - for empty arrays, or arrays with a single `null` value, it will return an empty string.

    **Functions**:

    - toString will usually return some type of truncated text of the actual function code. For built-in functions, it will look like `function funcName(){ [native code]}`

    **\*\***Step 4: Know What Primitive Type Your Primitive Will Coerce To**\*\***

    So now that you’ve gotten a primitive value for your object (or you started with primitive value), you need to know what Javascript will attempt to coerce it to. And that depends on what you are trying to do.

    First of all, if you are doing an operation like `==` and both values are the same primitive types, nothing happens. They can, obviously, already be compared to each other.

    It’s really only the `+` operator where you have to think about it. And again the rules here are simple:

    - if your expression is `+value` it will always coerce to a number (this is known as a *unary* plus operation, and is a common idiom for forcing something to it’s `number` value)
    - if your expression is `anything + string` it will always coerce ‘anything’ to a string and concatenate them

    That is, `+` is treated as an explicit coercion to a number if it’s used on a single value, a concatenation operation if it’s used on two values and either one is a string, otherwise it’s numeric addition.

    For other operators:

    - if your expression requires a boolean (e.g. `if(value)` or `!value`) it will coerce to a boolean
    - for everything else, it will coerce the values to a number (including if you are using a boolean and a string… `true — '2'` will result in `1` and that will also make sense in a moment)

    **\*\***Step 5: Coercing Primitive Values**\*\***

    Now you know you’ve got a primitive of type X, and you know what type it will be coerced to. Finally, those primitive to primitive rules are pretty straight forward:

    - **anything → boolean**: If it’s `null`, `undefined`, `0` (or `0`), `'’` (empty string), or `false`, the result of the coercion is `false`. If it’s \*ANYTHING **\***else, it’s `true`
    - **number → string:** the string representation of that number (which might be the scientific notation format… see`Number.toString()` if you need to know when it uses that).
    - **string → number**: if the string represents a valid number (including formats like scientific notation, hexadecimals, octals, etc), it’s converted to that number. And if it’s an empty string, it’s `0`. Otherwise it’s just `NaN`.
    - **boolean → number**: `true` becomes `1`, `false` becomes `0`
    - **null or undefined → number**: `0` and `NaN` respectively
    - **null or undefined → string**: `'null'` and `'undefined'` respectively

    That’s a pretty simple list of rules to learn, no? Especially since, for the most part, they make perfect sense. Basically, it’s just:

    1. A string that doesn’t represent a number is NaN.
    2. There’s only 5 things that coerce to false, everything else just becomes true.
    3. Null, undefined, and numbers are all spelled exactly like the strings that you’d expect.
    4. undefined is Not-A-Number.

    Probably the only thing you could say is a surprise is that null is 0 instead of NaN. So just memorize that, and the 5 falsy values, and everything else will probably be coerced into exactly what you’d expect it to become.

1.  **What is a higher order function**

    A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

1.  **What is a post message**

    Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).

1.  **What is a Cookie**

    A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs. For example, you can create a cookie named username as below,

    ```javascript
    document.cookie = "username=John";
    ```

    ![](https://github.com/sudheerj/javascript-interview-questions/raw/master/images/cookie.png)

1.  What are the options in a cookie

    There are few below options available for a cookie,

    1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).

    ```jsx
    document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
    ```

    1. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.

    ```jsx
    document.cookie = "username=John; path=/services";
    ```

1.  What are server-sent events

    Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.

1.  What is the difference between null and undefined

    Below are the main differences between null and undefined,

    | Null                                                                                            | Undefined                                                                                               |
    | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
    | It is an assignment value which indicates that variable points to no object.                    | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
    | Type of null is object                                                                          | Type of undefined is undefined                                                                          |
    | The null value is a primitive value that represents the null, empty, or non-existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value.            |
    | Indicates the absence of a value for a variable                                                 | Indicates absence of variable itself                                                                    |
    | Converted to zero (0) while performing primitive operations                                     | Converted to NaN while performing primitive operations                                                  |

1.  **What is an event flow**

    Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object.

    There are two ways of event flow

    1. Top to Bottom(Event Capturing)
    2. Bottom to Top (Event Bubbling)

1.  **What is event bubbling**

    Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element(i.e, global window object).

    By default, event handlers triggered in event bubbling phase as shown below,

    ```html
    <div>
      <button class="child">Hello</button>
    </div>

    <script>
      const parent = document.querySelector("div");
      const child = document.querySelector(".child");

      parent.addEventListener("click", function () {
        console.log("Parent");
      });

      child.addEventListener("click", function () {
        console.log("Child");
      });
    </script>
    // Child // Parent
    ```

1.  **What is event capturing**

    Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost target DOM element.

    You need to pass `true` value for `addEventListener` method to trigger event handlers in event capturing phase.

    ```html
    <div>
      <button class="child">Hello</button>
    </div>

    <script>
      const parent = document.querySelector("div");
      const child = document.querySelector(".child");

      parent.addEventListener(
        "click",
        function () {
          console.log("Parent");
        },
        true
      );

      child.addEventListener("click", function () {
        console.log("Child");
      });
    </script>
    // Parent // Child
    ```

1.  What is the difference between document load and DOMContentLoaded events

    The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).

    What is BOM

    The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

1.  **What is an arguments object**

    The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,

    ```jsx
    function sum() {
      var total = 0;
      for (var i = 0, len = arguments.length; i < len; ++i) {
        total += arguments[i];
      }
      return total;
    }

    sum(1, 2, 3); // returns 6
    ```

    **Note:** You can't apply array methods on arguments object. But you can convert into a regular array as below.

    ```jsx
    var argsArray = Array.prototype.slice.call(arguments);
    ```

1.  **What is a RegExp object**

    RegExp object is a regular expression object with predefined properties and methods. Let's see the simple usage of RegExp object,

    ```jsx
    var regexp = new RegExp("\\w+");
    console.log(regexp);
    // expected output: /\w+/
    ```

    **What are regular expression patterns**

    Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,

    1. **Brackets:** These are used to find a range of characters. For example, below are some use cases,
       1. [abc]: Used to find any of the characters between the brackets(a,b,c)
       2. [0-9]: Used to find any of the digits between the brackets
       3. (a|b): Used to find any of the alternatives separated with |
    2. **Metacharacters:** These are characters with a special meaning. For example, below are some use cases,
       1. \d: Used to find a digit
       2. \s: Used to find a whitespace character
       3. \b: Used to find a match at the beginning or ending of a word
    3. **Quantifiers:** These are useful to define quantities. For example, below are some use cases,
       1. n+: Used to find matches for any string that contains at least one n
       2. n\*: Used to find matches for any string that contains zero or more occurrences of n
       3. n?: Used to find matches for any string that contains zero or one occurrences of n

1.  **How do you determine two values same or not using object**

    The Object.is() method determines whether two values are the same value. For example, the usage with different types of values would be,

    ```jsx
    Object.is("hello", "hello"); // true
    Object.is(window, window); // true
    Object.is([], []); // false
    ```

    Two values are the same if one of the following holds:

    1. both undefined
    2. both null
    3. both true or both false
    4. both strings of the same length with the same characters in the same order
    5. both the same object (means both object have same reference)
    6. both numbers and both +0 both -0 both NaN both non-zero and both not NaN and both have the same value.

1.  **How do you copy properties from one object to other**

    You can use the Object.assign() method which is used to copy the values and properties from one or more source objects to a target object. It returns the target object which has properties and values copied from the source objects. The syntax would be as below,

    ```jsx
    Object.assign(target, ...sources);
    ```

    Let's take example with one source and one target object,

    ```javascript
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };

    const returnedTarget = Object.assign(target, source);

    console.log(target); // { a: 1, b: 3, c: 4 }

    console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
    ```

    As observed in the above code, there is a common property(`b`) from source to target so it's value has been overwritten.

1.  **How do you define property on Object constructor**

    The Object.defineProperty() static method is used to define a new property directly on an object, or modify an existing property on an object, and returns the object. Let's see an example to know how to define property,

    ```javascript
    const newObject = {};

    Object.defineProperty(newObject, "newProperty", {
      value: 100,
      writable: false,
    });

    console.log(newObject.newProperty); // 100

    newObject.newProperty = 200; // It throws an error in strict mode due to writable setting
    ```

1.  **What is an event loop**

    The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue.

    **Note:** The event loop allows Node.js to perform non-blocking I/O operations, even though JavaScript is single-threaded, by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.

1.  **What is an event queue**

    The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.

    Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of the promise is moved into the microtask queue).

    The event loop constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event loop moves the callback into the call stack. But if there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue.

1.  **What is a decorator**

    A decorator is an expression that evaluates to a function and that takes the target, name, and decorator descriptor as arguments. Also, it optionally returns a decorator descriptor to install on the target object. Let's define admin decorator for user class at design time,

    ```jsx
    function admin(isAdmin) {
       return function(target) {
           target.isAdmin = isAdmin;
       }
    }

    @admin(true)
    class User() {
    }
    console.log(User.isAdmin); //true

     @admin(false)
     class User() {
     }
     console.log(User.isAdmin); //false
    ```

1.  **What is a comma operator**

    The comma operator is used to evaluate each of its operands from left to right and returns the value of the last operand. This is totally different from comma usage within arrays, objects, and function arguments and parameters.

1.  **How do you set prototype of one object to another**

    You can use the `Object.setPrototypeOf()` method that sets the prototype (i.e., the internal `Prototype` property) of a specified object to another object or null. For example, if you want to set prototype of a square object to rectangle object would be as follows,

    ```javascript
    Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
    Object.setPrototypeOf({}, null);
    ```

1.  **List down some of the features of ES6**

    Below are the list of some new features of ES6,

    1. Support for constants or immutable variables
    2. Block-scope support for variables, constants and functions
    3. Arrow functions
    4. Default parameters
    5. Rest and Spread Parameters
    6. Template Literals
    7. Multi-line Strings
    8. Destructuring Assignment
    9. Enhanced Object Literals
    10. Promises
    11. Classes
    12. Modules

1.  **Does the `const` variable make the value immutable**

    No, the `const` variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)

    ```jsx
    const userList = [];
    userList.push("John"); // Can mutate even though it can't re-assign
    console.log(userList); // ['John']
    ```

1.  **How do you return all matching strings against a regular expression**

    The `matchAll()` method can be used to return an iterator of all results matching a string against a regular expression. For example, the below example returns an array of matching string results against a regular expression,

    ```jsx
    let regexp = /Hello(\d?)/g;
    let greeting = "Hello1Hello2Hello3";

    let greetingList = [...greeting.matchAll(regexp)];

    console.log(greetingList[0][0]); //Hello1
    console.log(greetingList[1][0]); //Hello2
    console.log(greetingList[2][0]); //Hello3
    ```

1.  **What is the difference between reflow and repaint**

    A *repaint* occurs when changes are made which affect the visibility of an element, but not its layout. Examples of this include outline, visibility, or background color. A *reflow* involves changes that affect the layout of a portion of the page (or the whole page). Resizing the browser window, changing the font, content changing (such as user typing text), using JavaScript methods involving computed styles, adding or removing elements from the DOM, and changing an element's classes are a few of the things that can trigger reflow. Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.

1.  What are tasks in event loop

    A task is any javascript code/program which is scheduled to be run by the standard mechanisms such as initially starting to run a program, run an event callback, or an interval or timeout being fired. All these tasks are scheduled on a task queue. Below are the list of use cases to add tasks to the task queue,

    1. When a new javascript program is executed directly from console or running by the `<script>` element, the task will be added to the task queue.
    2. When an event fires, the event callback added to task queue
    3. When a setTimeout or setInterval is reached, the corresponding callback added to task queue

1.  What is microtask

    Microtask is used for the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty. The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc

    **Note:** All of these microtasks are processed in the same turn of the event loop.

1.  What are different event loops

    In JavaScript, there are multiple event loops that can be used depending on the context of your application. The most common event loops are:

    1. The Browser Event Loop
    2. The Node.js Event Loop

    - Browser Event Loop: The Browser Event Loop is used in client-side JavaScript applications and is responsible for handling events that occur within the browser environment, such as user interactions (clicks, keypresses, etc.), HTTP requests, and other asynchronous actions.
    - The Node.js Event Loop is used in server-side JavaScript applications and is responsible for handling events that occur within the Node.js runtime environment, such as file I/O, network I/O, and other asynchronous actions.

1.  What is the purpose of queueMicrotask

    The `queueMicrotask` function is used to schedule a microtask, which is a function that will be executed asynchronously in the microtask queue. The purpose of `queueMicrotask` is to ensure that a function is executed after the current task has finished, but before the browser performs any rendering or handles user events.

    Example:

    ```javascript
    console.log("Start"); //1

    queueMicrotask(() => {
      console.log("Inside microtask"); // 3
    });

    console.log("End"); //2
    ```

    By using queueMicrotask, you can ensure that certain tasks or callbacks are executed at the earliest opportunity during the JavaScript event loop, making it useful for performing work that needs to be done asynchronously but with higher priority than regular `setTimeout` or `setInterval` callbacks.

1.  **Is Node.js completely single threaded**

    Node is a single thread, but some of the functions included in the Node.js standard library(e.g, fs module functions) are not single threaded. i.e, Their logic runs outside of the Node.js single thread to improve the speed and performance of a program.

1.  **How to detect if a function is called as constructor**

    You can use `new.target` pseudo-property to detect whether a function was called as a constructor(using the new operator) or as a regular function call.

    1. If a constructor or function invoked using the new operator, new.target returns a reference to the constructor or function.
    2. For function calls, new.target is undefined.

    ```jsx
    function Myfunc() {
      if (new.target) {
        console.log("called with new");
      } else {
        console.log("not called with new");
      }
    }

    new Myfunc(); // called with new
    Myfunc(); // not called with new
    Myfunc.call({}); // not called with new
    ```

1.  **What are the differences between arguments object and rest parameter**

    There are three main differences between arguments object and rest parameters

    1. The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
    2. The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.
    3. The rest parameters are only the ones that haven’t been given a separate name, while the arguments object contains all arguments passed to the function

1.  **What is nullish coalescing operator (??)?**

    It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.

    ```jsx
    console.log(null ?? true); // true
    console.log(false ?? true); // false
    console.log(undefined ?? true); // true
    ```

1.  **What is the difference between setTimeout, setImmediate and process.nextTick?**

    1. **Set Timeout:** setTimeout() is to schedule execution of a one-time callback after delay milliseconds.
    2. **Set Immediate:** The setImmediate function is used to execute a function right after the current event loop finishes.
    3. **Process NextTick:** If process.nextTick() is called in a given phase, all the callbacks passed to process.nextTick() will be resolved before the event loop continues. This will block the event loop and create I/O Starvation if process.nextTick() is called recursively.

1.  **How do you create custom HTML element?**

    The creation of custom HTML elements involves two main steps,

    1. **Define your custom HTML element:** First you need to define some custom class by extending HTMLElement class. After that define your component properties (styles,text etc) using `connectedCallback` method. **Note:** The browser exposes a function called `customElements.define` inorder to reuse the element.

       ```jsx
       class CustomElement extends HTMLElement {
         connectedCallback() {
           this.innerHTML = "This is a custom element";
         }
       }
       customElements.define("custom-element", CustomElement);
       ```

    2. **Use custom element just like other HTML element:** Declare your custom element as a HTML tag.

    ```html
       <body>
            <custom-element>
       </body>
    ```

1.  **What is global execution context?**

    The global execution context is the default or first execution context that is created by the JavaScript engine before any code is executed(i.e, when the file first loads in the browser). All the global code that is not inside a function or object will be executed inside this global execution context. Since JS engine is single threaded there will be only one global environment and there will be only one global execution context.

    For example, the below code other than code inside any function or object is executed inside the global execution context.

    ```jsx
    var x = 10;

    function A() {
      console.log("Start function A");

      function B() {
        console.log("In function B");
      }

      B();
    }

    A();

    console.log("GlobalContext");
    ```

1.  What is function execution context?

    Whenever a function is invoked, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the Global Execution Context (GEC) to evaluate and execute the code within that function.

1.  What is debouncing?

    Debouncing is a programming pattern that allows delaying execution of some piece of code until a specified time to avoid unnecessary *CPU cycles and API calls*. This in turn enhance the web page performance. The debounce function make sure that your code is only triggered once per user input. The common usecases are Search box suggestions, text-field auto-saves, and eliminating double-button clicks.

    Let's say you want to show suggestions for a search query, but only after a visitor has finished typing it. So here you write a debounce function where the user keeps writing the characters with in 500ms then previous timer cleared out using `clearTimeout` and reschedule API call/DB query for a new time—300 ms in the future.

    ```jsx
    function debounce(func, timeout = 500) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    }
    function fetchResults() {
      console.log("Fetching input suggestions");
    }
    const processChange = debounce(() => fetchResults());
    ```

    The *debounce()* function can be used on input, button and window events.

    **Input:**

    ```html
    <input type="text" onkeyup="processChange()" />
    ```

    **Button:**

    ```html
    <button onclick="processChange()">Click me</button>
    ```

    **Windows event:**

    ```javascript
    window.addEventListener("scroll", processChange);
    ```

1.  What is throttling?

    Throttling is a technique used to limit the execution of an event handler function in a given period of time, even when this event triggers continuously due to user actions. The common use cases are browser resizing, window scrolling, mouse movements etc.

    The below example creates a throttle function to reduce the number of events for each pixel change and trigger scroll event for each 100ms except for the first event.

    ```jsx
    const throttle = (func, limit) => {
      let inThrottle;
      return (...args) => {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };
    window.addEventListener("scroll", () => {
      throttle(handleScrollAnimation, 100);
    });
    ```

1.  **How to verify if a variable is an array?**

    It is possible to check if a variable is an array instance using 3 different ways,

    1. Array.isArray() method:

       The `Array.isArray(value)` utility function is used to determine whether value is an array or not. This function returns a true boolean value if the variable is an array and a false value if it is not.

       ```jsx
       const numbers = [1, 2, 3];
       const user = { name: "John" };
       Array.isArray(numbers); // true
       Array.isArray(user); //false
       ```

    2. instanceof operator:

       The instanceof operator is used to check the type of an array at run time. It returns true if the type of a variable is an Array other false for other type.

       ```jsx
       const numbers = [1, 2, 3];
       const user = { name: "John" };
       console.log(numbers instanceof Array); // true
       console.log(user instanceof Array); // false
       ```

    3. Checking constructor type:

       The constructor property of the variable is used to determine whether the variable Array type or not.

       ```jsx
       const numbers = [1, 2, 3];
       const user = { name: "John" };
       console.log(numbers.constructor === Array); // true
       console.log(user.constructor === Array); // false
       ```

1.  What are the uses of closures?

    Closures are a powerful feature in programming languages like JavaScript. They allow functions to retain access to variables from their containing (enclosing) scope even after the outer function has finished executing. This means that a function defined within another function can access variables from the outer function, even if the outer function has already returned. Here are some common use cases of closures:

    - Data Privacy: Closures can be used to create private variables and methods. By defining variables within a function's scope and returning inner functions that have access to those variables, you can create a form of encapsulation, limiting access to certain data or functionality.
    - Function Factories: Closures are often used to create functions with pre-set parameters. This is useful when you need to create multiple functions with similar behavior but different configurations.
    - Callback Functions: Closures are frequently used in asynchronous programming, such as handling event listeners or AJAX requests. The inner function captures variables from the outer scope and can access them when the callback is invoked.
    - Memoization: Closures can be used for memoization, a technique to optimize performance by caching the results of expensive function calls. The inner function can remember the results of previous calls and return the cached result if the same input is provided again.
    - iterators and Generators: Closures can be used to create iterators and generators, which are essential for working with collections of data in modern JavaScript.

1.  What are the phases of execution context?

    The execution context in JavaScript is a data structure that stores the information necessary for executing a piece of code. It includes the code itself, the values of the variables used in the code, and the scope chain. The scope chain is a list of objects that are used to resolve variable names.

    The execution context has two phases:

    - Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. This includes creating the variable object and the scope chain.
    - Execution phase: In this phase, the JavaScript engine executes the code in the execution context. This includes evaluating expressions, assigning values to variables, and calling functions.

    The execution context is created when a function is called. The function's code is then executed in the execution context. When the function returns, the execution context is destroyed.

1.  What are the possible reasons for memory leaks?

    Memory leaks can lead to poor performance, slow loading times and even crashes in web applications. Some of the common causes of memory leaks are listed below,

    1. The execessive usage of global variables or omitting the `var` keyword in local scope.
    2. Forgetting to clear the timers set up by `setTimeout` or `setInterval`.
    3. Closures retain references to variables from their parent scope, which leads to variables might not garbage collected even they are no longer used.

1.  What are the event phases of a browser?

    There are 3 phases in the lifecycle of an event propagation in JavaScript,

    1. **Capturing phase:** This phase goes down gradually from the top of the DOM tree to the target element when a nested element clicked. Before the click event reaching the final destination element, the click event of each parent's element must be triggered.
    2. **Target phase:** This is the phase where the event originally occurred reached the target element .
    3. **Bubbling phase:** This is reverse of the capturing phase. In this pase, the event bubbles up from the target element through it's parent element, an ancestor and goes all the way to the global window object.

       The pictorial representation of these 3 event phases in DOM looks like below,

       ![](https://github.com/sudheerj/javascript-interview-questions/raw/master/images/event-flow.png)

1.  **What are the different ways to execute external scripts?**

    There are three different ways to execute external scripts,

    1. async: The script is downloaded in parallel to parsing the page, and executed as soon as it is available even before parsing completes. The parsing of the page is going to be interuppted once the script is downloaded completely and then the script is executed. Thereafter, the parsing of the remaining page will continue.

       The syntax for async usage is as shown below,

       ```
       <script src="demo.js" async></script>
       ```

    2. defer: The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.

       The syntax for defer usage is as shown below,

       ```
       <script src="demo.js" defer></script>
       ```

    3. Neither async or defer: The script is downloaded and executed immediately by blocking parsing of the page until the script execution is completed.

    **Note:** You should only use either async or defer attribute if the `src` attribute is present.

1.  What is the difference between substring and substr methods?

         There are subtle differences between the substring() and substr() methods, so you should be careful not to get them confused.

         - The two parameters of substr() are start and length, while for substring(), they are start and end.
         - substr()'s start index will wrap to the end of the string if it is negative, while substring() will clamp it to 0.
         - Negative lengths in substr() are treated as zero, while substring() will swap the two indexes if end is less than start.

         Furthermore, substr() is considered a legacy feature in ECMAScript, so it is best to avoid using it if possible.

         `const text = "Mozilla";

    console.log(text.substring(2, 5)); // "zil"
    console.log(text.substr(2, 3)); // "zil"`

         https://0.30000000000000004.com/

         **What is the output of below code**

         ```javascript
         const arrowFunc = () => arguments.length;
         console.log(arrowFunc(1, 2, 3));
         ```

         - 1: ReferenceError: arguments is not defined
         - 2: 3
         - 3: undefined
         - 4: null
         - **Answer**

           **Answer: 1**

           Arrow functions do not have an `arguments, super, this, or new.target` bindings. So any reference to `arguments` variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.

           Where as the normal function provides the number of arguments passed to the function

           ```
           const func = function () {
             return arguments.length;
           };
           console.log(func(1, 2, 3));
           ```

           But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

           ```
           const arrowFunc = (...args) => args.length;
           console.log(arrowFunc(1, 2, 3));
           ```

# React

1. **How does React work?**

   React creates a virtual DOM. When the state changes in a component it first runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.

   - **What is the Virtual DOM? And why is it often more performant than manipulating the "real" DOM?**
     - Virtual DOM is a JavaScript object containing a replica to the real DOM, it is capable of making comparisons with the real DOM, and then apply patches avoiding a full re-render in the DOM, rerendering only what have changed.
     - Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation
     - Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions

1. **Under what circumstances does a component re-render in React?**
   1. Changes in props: When a component receives new props, it triggers a re-render. This happens even if the new props are the same as the old ones.
   2. Changes in state: When a component's state is updated, a re-render is triggered.
   3. Parent component re-renders: When a parent component re-renders, by default, its child components also re-render.
   4. Context changes: If a component is consuming values from a React context using `useContext` (in functional components), and the context value changes, the component will re-render.
   5. Using hooks with dependencies: Hooks like `useEffect`, `useMemo`, and `useCallback` accept dependency arrays as their second argument. When any of the listed dependencies change, the effect will run, or the memoized value or callback will be recomputed, potentially causing the component to re-render.
1. **How can we prevent unnecessary rerenders?**
   - React.memo
   - Use the hook dependencies correctly in useCallback, useEffect and useMemo to avoid re-renders
   - For big forms, prefer useRef over useState
1. **What is the advantage of using the `React.memo` API?**
   - Prevents unnecessary renders when the component's props haven't changed, improving performance
1. **What is virtualization? And what is it for?**

   - Virtualization is a technique used to optimize the rendering of large lists or grids by only rendering the visible items on the screen. It improves performance by reducing the number of DOM elements created and updated, minimizing memory usage, and reducing layout calculations.

1. **When to use a Class Component over a Function Component?**

   After the addition of Hooks(i.e. React 16.8 onwards) it is always recommended to use Function components over Class components in React. Because you could use state, lifecycle methods and other features that were only available in class component present in function component too.

   But even there are two reasons to use Class components over Function components.

   1. If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.
   2. In older versions, If the component needs *state or lifecycle methods* then you need to use class component.

   So the summary to this question is as follows:

   **Use Function Components:**

   - If you don't need state or lifecycle methods, and your component is purely presentational.
   - For simplicity, readability, and modern code practices, especially with the use of React Hooks for state and side effects.

   **Use Class Components:**

   - If you need to manage state or use lifecycle methods.
   - In scenarios where backward compatibility or integration with older code is necessary.

   **Note:** You can also use reusable [react error boundary](https://github.com/bvaughn/react-error-boundary) third-party component without writing any class. i.e, No need to use class components for Error boundaries.

   The usage of Error boundaries from the above library is quite straight forward.

   > Note when using react-error-boundary: ErrorBoundary is a client component. You can only pass props to it that are serializable or use it in files that have a "use client"; directive.

   ```jsx
   "use client";

   import { ErrorBoundary } from "react-error-boundary";

   <ErrorBoundary fallback={<div>Something went wrong</div>}>
     <ExampleApplication />
   </ErrorBoundary>;
   ```

1. **What is state in React?**

   *State* of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.

1. **What are props in React?**

   *Props* are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

1. **What is the difference between state and props?**

   In React, both `state` and `props` are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics.

   The `state` entity is managed by the component itself and can be updated using the setter(`setState()` for class components) function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. i.e, state acts as a component's memory. Moreover, changes in the state trigger a re-render of the component and its children. The components cannot become reusable with the usage of state alone.

   On the otherhand, `props` (short for "properties") are passed to a component by its parent component and are `read-only`, meaning that they cannot be modified by the own component itself. i.e, props acts as arguments for a function. Also, props can be used to configure the behavior of a component and to pass data between components. The components become reusable with the usage of props.

1. What is Virtual DOM?

   The *Virtual DOM* (VDOM) is an in-memory representation of *Real DOM*. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called *reconciliation*.

1. How Virtual DOM works?

   The *Virtual DOM* works in three simple steps.

   1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

      ![](https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/vdom1.png)

   2. Then the difference between the previous DOM representation and the new one is calculated.

      ![](https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/vdom2.png)

   3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

      ![](https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/vdom3.png)

1. What is the difference between Shadow DOM and Virtual DOM?

   The *Shadow DOM* is a browser technology designed primarily for scoping variables and CSS in *web components*. The *Virtual DOM* is a concept implemented by libraries in JavaScript on top of browser APIs.

1. What is React Fiber?

   Fiber is the new *reconciliation* engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

1. What is the main goal of React Fiber?

   The goal of *React Fiber* is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

   _from documentation_

   Its main goals are:

   1. Ability to split interruptible work in chunks.
   2. Ability to prioritize, rebase and reuse work in progress.
   3. Ability to yield back and forth between parents and children to support layout in React.
   4. Ability to return multiple elements from render().
   5. Better support for error boundaries.

1. **What is reconciliation?**

   `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the `real DOM` and the copy of DOM `(Virtual DOM)` when there's an update of components. React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by `Diffing Algorithm`. Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called *Reconciliation*.

Html ,css

1. Explain box model in CSS.

   The box model in CSS is a way of representing elements as boxes with content, padding, borders, and margins. The content area is the actual content of the element, the padding is the space between the content and the border, the border is a line around the element, and the margin is the space between the border and the surrounding elements.

2. What is the difference between margin and padding in CSS?

   Margin is the space between the border of an element and the surrounding elements, while padding is the space between the content of an element and its border.

3. What are CSS pseudo-classes? Give some examples.

   CSS pseudo-classes are selectors that target elements based on their state or position in the document. Some examples include :hover, :active, :focus, :first-child, :last-child, and :nth-child.

4. Cross-origin resource sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain

5. webpack is a module bundler. It examines all of the [**modules**](https://ui.dev/javascript-modules-iifes-commonjs-esmodules) in your application, creates a dependency graph, then intelligently puts all of them together into one or more bundle(s) that your **`index.html`** file can reference.

6. The **`currentTarget`** read-only property of the [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) interface identifies the element to which the event handler has been attached.

   This will not always be the same as the element on which the event was fired, because the event may have fired on a descendant of the element with the handler, and then [bubbled](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Event_bubbling) up to the element with the handler. The element on which the event was fired is given by [`Event.target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target).

7. The **`window.postMessage()`** method safely enables cross-origin communication between [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) objects; *e.g.,* between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.

**86. What is the Difference Between Debouncing and Throttling?**

The main difference between debouncing and throttling is that debouncing executes the function only after some cooling period, while throttling executes the function at a regular interval. Debouncing and throttling are both useful techniques to improve the performance of your code, but they have different use cases and effects.

Debouncing is useful when you want to delay the execution of your code until the user stops performing a certain action. For example, you can use debouncing for autocomplete, where you want to wait for the user to stop typing before fetching suggestions from the backend. Debouncing can reduce the number of times your code is executed, but it can also introduce some latency in your user interface.

Throttling is useful when you want to limit the execution of your code to a certain frequency. For example, you can use throttling for resize, where you want to update the layout of your page at a fixed rate. Throttling can improve the responsiveness of your user interface, but it can also cause some loss of information or accuracy in your code.

```tsx
function debounce(func, delay) {
    // A timer variable to track the delay period
    let timer;
    // Return a function that takes arguments
    return function(…args) {
        // Clear the previous timer if any
        clearTimeout(timer);
        // Set a new timer that will execute the function after the delay period
        timer = setTimeout(() => {
            // Apply the function with arguments
            func.apply(this, args);
        }, delay);
    };
}

function throttle(func, interval) {
    // A flag variable to track whether the function is running or not
    let isRunning = false;
    // Return a function that takes arguments
    return function(…args) {
        // If the function is not running
        if (!isRunning) {
            // Set the flag to true
            isRunning = true;
            // Apply the function with arguments
            func.apply(this, args);
            // Set a timer that will reset the flag after the interval
            setTimeout(() => {
                // Set the flag to false
                isRunning = false;
            }, interval);
        }
    };
}

```

- **anything → boolean**: If it’s `null`, `undefined`, `0` (or `0`), `'’` (empty string), or `false`, the result of the coercion is `false`. If it’s \*ANYTHING **\***else, it’s `true`
- **number → string:** the string representation of that number (which might be the scientific notation format… see`Number.toString()` if you need to know when it uses that).
- **string → number**: if the string represents a valid number (including formats like scientific notation, hexadecimals, octals, etc), it’s converted to that number. And if it’s an empty string, it’s `0`. Otherwise it’s just `NaN`.
- **boolean → number**: `true` becomes `1`, `false` becomes `0`
- **null or undefined → number**: `0` and `NaN` respectively
- **null or undefined → string**: `'null'` and `'undefined'` respectively

# React Fiber

**React waits until _all_ code in the event handlers has run before processing your state updates.**

This lets you update multiple state variables—even from multiple components—without triggering too many [re-renders.](https://react.dev/learn/render-and-commit#re-renders-when-state-updates) But this also means that the UI won’t be updated until _after_ your event handler, and any code in it, completes. This behavior, also known as **batching**

```jsx
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>
```

1. `setNumber(number + 5)`: `number` is `0`, so `setNumber(0 + 5)`. React adds *“replace with `5`”* to its queue.
2. `setNumber(n => n + 1)`: `n => n + 1` is an updater function. React adds *that function* to its queue.

During the next render, React goes through the state queue:

| queued update      | `n`          | returns     |
| ------------------ | ------------ | ----------- |
| ”replace with `5`” | `0` (unused) | `5`         |
| `n => n + 1`       | `5`          | `5 + 1 = 6` |

React stores `6` as the final result and returns it from `useState`.

You may have noticed that `setState(5)` actually works like `setState(n => 5)`, but `n` is unused!

useRef

You can access the current value of that ref through the `ref.current` property. This value is intentionally mutable, meaning you can both read and write to it. It’s like a secret pocket of your component that React doesn’t track.

Note that **the component doesn’t re-render with every increment.** Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!

Limitations of React state don’t apply to refs. For example, state acts like a [snapshot for every render](https://react.dev/learn/state-as-a-snapshot) and [doesn’t update synchronously.](https://react.dev/learn/queueing-a-series-of-state-updates) But when you mutate the current value of a ref, it changes immediately:

`ref.current = 5;console.log(ref.current); // 5`

components that _want_ to expose their DOM nodes have to **opt in** to that behavior. A component can specify that it “forwards” its ref to one of its children. Here’s how `MyInput` can use the `forwardRef` API:

```jsx
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```

`MyInput` exposes the original DOM input element. This lets the parent component call `focus()` on it. However, this also lets the parent component do something else—for example, change its CSS styles. In uncommon cases, you may want to restrict the exposed functionality. You can do that with `useImperativeHandle`:

```jsx
import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    // Only expose focus and nothing else
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});
```

```jsx
// Child Component
const ChildComponent = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment() {
      setCount(count + 1);
    },
    getCount() {
      return count;
    },
  }));

  return <div>{count}</div>;
});

// Parent Component
const ParentComponent = () => {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.increment();
  };

  return (
    <>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Increment</button>
    </>
  );
};
```

In React, [state updates are queued.](https://react.dev/learn/queueing-a-series-of-state-updates) Usually, this is what you want. However, here it causes a problem because `setTodos` does not immediately update the DOM. So the time you scroll the list to its last element, the todo has not yet been added. This is why scrolling always “lags behind” by one item.

To fix this issue, you can force React to update (“flush”) the DOM synchronously. To do this, import `flushSync` from `react-dom` and **wrap the state update** into a `flushSync` call:

```javascript
flushSync(() => {
  setTodos([...todos, newTodo]);
});
listRef.current.lastChild.scrollIntoView();
```

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called [reconciliation](https://legacy.reactjs.org/docs/reconciliation.html).

# What is “React Fiber”?

Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM

# Render and Commit Phases 🔗︎

The React team divides this work into two phases, conceptually:

- The "Render phase" contains all the work of rendering components and calculating changes
- The "Commit phase" is the process of applying those changes to the DOM

After React has updated the DOM in the commit phase, it updates all refs accordingly to point to the requested DOM nodes and component instances. It then synchronously runs the `componentDidMount` and `componentDidUpdate` class lifecycle methods, and the `useLayoutEffect` hooks.React then sets a short timeout, and when it expires, runs all the `useEffect` hooks. This step is also known as the "Passive Effects" phase.

https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/

**React's default behavior is that when a parent component renders, React will recursively render *all* child components inside of it!**

**Rendering a component will, by default, cause *all* components inside of it to be rendered too!**

**In normal rendering, React does *not* care whether "props changed" - it will render child components unconditionally just because the parent rendered!**

Remember, **rendering is not a *bad* thing - it's how React knows whether it needs to actually make any changes to the DOM!**

# How to improve performance

**Tree shaking**

Tree shaking also known as unused exports is a process of removing unused code from the JavaScript bundles

**Code Splitting**

Adaptive loading is the loading of resources or features based on the user device capabilities and the network condition. For example:

- For users on the slower network, serve low-quality images, do not autoplay the videos, etc.
- For users with limited processing capacity on the devices, do not provide large animations.

**SSG vs CSR**

- **Server-side rendered**:- In SSR, every time a page is navigated in the browser, the request is sent to the server and the server generates a new HTML page with data pre-filled and sends it back to the browser. This HTML is then parsed and rendered in the browser.
- **Client-side rendered**:- In CSR, Only the HTML page is there which is loaded initially, after that the page navigation is handled on the client itself (browser) and only the data is fetched from the server through any means like Rest APIs and then the UI is updated with the help of JavaScript.

**Load script efficiently with async and defer**

Whenever it hits the `script` tag it stops the parsing of the DOM and starts fetching the script (If it is external) and then executes it and later resumes the parsing of DOM.

`async` downloads the script while the DOM is parsing and only pauses the DOM for execution of the script.

`defer` downloads the script while the DOM is still parsing but executes them only after the parsing is finished

- **How a web page is rendered in browser?**

  In each HTTP request that browser makes for an HTML page, the server returns the data into bytes, these bytes are then converted to Characters, Tokens, Nodes, and finally DOM (Document Object Model).

  Once the DOM is generated, the parsing of the page starts, the HTML contains CSS code or links, JavaScript code or links, media elements such as images, etc, each of them is then parsed separately and plugged together to create a render tree, which is then converted to the layout and then is painted on the screen at the refresh rate of 60 frames per second.

  This complete process is called a critical rendering path. Optimizing the critical rendering path helps to load the web page faster and without glitches or janks.

  The complete page rendering can be broken down into 5 different steps.

  - [Creation of DOM](https://learnersbucket.com/examples/web/how-a-web-page-is-rendered-in-browser/#dom)
  - [Creation of CSSOM](https://learnersbucket.com/examples/web/how-a-web-page-is-rendered-in-browser/#cssom)
  - [Formation of Render tree](https://learnersbucket.com/examples/web/how-a-web-page-is-rendered-in-browser/#render-tree)
  - [Layouting](https://learnersbucket.com/examples/web/how-a-web-page-is-rendered-in-browser/#layout)
  - [Paint](https://learnersbucket.com/examples/web/how-a-web-page-is-rendered-in-browser/#paint)

  ## **Creation of DOM**

  When an HTML is returned as an HTTP response in the browser the data we receive is in bytes, which is then converted to characters, tokens, nodes, and DOM in the order.

  ![](https://learnersbucket.com/ezoimgfmt/i0.wp.com/learnersbucket.com/wp-content/uploads/2023/06/DOM-creation.png?resize=768%2C600&ssl=1&ezimgfmt=rs:768x600/rscb1/ng:webp/ngcb1)

  The DOM (document object model) is created as the HTML is parsed as a tree-like representation of different HTML nodes. When the HTML is being parsed it encounters styles associated with DOM written inline or imported, script which when loaded can result in the DOM manipulation.

  The external elements like scripts and media can be blocked, thus it may halt the HTML parsing until they are completely loaded. That is why it is always advised to load the script at the end or use [defer / async](https://learnersbucket.com/examples/html/how-to-load-script-efficiently-with-async-and-defer) so that web page is loaded smoothly.

  Once the Styles are loaded the CSSOM (CSS object model) is formed which is then matched with their respective HTML element node in the DOM via the browser engine.

  ## **Creating of CSSOM**

  CSS object model is similar to the DOM in structure but differs in nature. As the DOM stores all the content of the web page, CSSOM stores all the styling information. It blocks the rendering of the webpage until all the CSS style is loaded, parsed, and applied to each DOM node. It is blocking in nature because CSS styles can be overridden.

  Each browser engine follows a set of rules for CSS to apply the styles to the corresponding DOM node. The C in the CSS stands for cascade, thus the styles are also cascaded down, which means the child nodes inherit few styles from the parent nodes.

  When the browser starts parsing the CSSOM it applies browser-specific styles (user agent) to the nodes as well.

  ## **Formation of Render Tree**

  Once the DOM and the CSSOM are ready, the browser engine combines them together to create the render tree.

  ![](https://learnersbucket.com/ezoimgfmt/i0.wp.com/learnersbucket.com/wp-content/uploads/2023/06/Render-Tree-formation.png?resize=768%2C600&ssl=1&ezimgfmt=rs:768x600/rscb1/ng:webp/ngcb1)

  The render tree is constructed by traversing each node in the DOM and attaching its corresponding style from the CSSOM.

  The render tree only contains the visible element, for example, if any node style `display: none;` neither itself nor any of its descendants will be part of the render tree.

  ## **Layout**

  Once the render tree is ready the layout can be created, the layout is bounded on the device dimension.

  ![](https://learnersbucket.com/ezoimgfmt/i0.wp.com/learnersbucket.com/wp-content/uploads/2023/06/Box-Layout1.png?resize=768%2C400&ssl=1&ezimgfmt=rs:768x400/rscb1/ng:webp/ngcb1)

  The placement of each element is decided through layouting, it decides the dimension of each element as well as their relation to the other elements.

  The layout is impacted by the viewport meta tag’s definition of the layout viewport’s width. Without it, the browser uses the standard viewport width, which on full-screen browsers by default is often 960px. By setting meta name=”viewport” content=”width=device-width”>, you can force full-screen browsers, like the one on your phone, to use the device’s width rather than the viewport’s standard width. When a user flips their phone between landscape and portrait mode, the device width changes. Every time a device is rotated or a browser is otherwise resized, the layout takes place.

  ## **Paint the page on the screen**

  Once the layout is ready, it can be painted pixel by pixel on the screen at the refresh rate of 60fps.

  Initially, the entire page will be painted and thereafter if any DOM manipulation occurs only those elements will be reconstructed and painted again.

  The more the DOM manipulation, the more the re-rendering of the page, thus we should avoid the frequent DOM changes.
