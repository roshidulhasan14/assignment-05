


1. document.getElementById("id")

= Selects only ONE element with the given id.

= Returns the element object (or null if not found).

A single element by its unique ID.	
A single Element object, or null if not found



document.getElementsByClassName("className")

= Selects all elements with that class.

= Returns a live HTMLCollection (an array-like object).

= Must use index to access specific elements.

Multiple elements with the same class name.	
An HTMLCollection (an array-like object)



document.querySelector("cssSelector")

= Selects the first element that matches the CSS selector.

= Very flexible (can use #id, .class, div > p, etc.).

The first element that matches a specified CSS selector (e.g., #myID, .myClass, p).	
A single Element object, or null if not found.


querySelectorAll()

= Selects all elements that match.

= Returns a static NodeList (does NOT auto-update).

= Can use forEach directly.

	All elements that match a specified CSS selector.	
  A static NodeList (an array-like object)

summary:

1. getElementById → one element by ID

2. getElementsByClassName → multiple (live HTMLCollection)

3. querySelector → first matching element (CSS selector)

4. querySelectorAll → all matching elements (NodeList, static)



2. How to Create and Insert a New Element into the DOM?

The most robust and common approach is a two-step process: document.createElement() and an insertion method like appendChild(). 

Create the element using document.createElement(), assigning it to a variable.
Modify the element (add text content, classes, or attributes).

Insert the new element into an existing parent element using a method like appendChild().

Steps:

= Use document.createElement("tag")

= Add text with textContent or innerHTML

= Insert it into the DOM using:

= appendChild()

= append()

= prepend()

= insertBefore()

= before() / after()


3. What is Event Bubbling and How Does it Work?

= Event Bubbling = When an event happens on an element, it bubbles up (propagates) through its parent elements up to document.

** Event bubbling** is event propagation. An event triggered on an inner element first runs its handlers. Then, it moves up through its parent and other ancestor elements to the root of the DOM. This is the default behavior for most events in modern browsers.


4. What is Event Delegation in JavaScript? Why is it Useful?

= Event Delegation = Instead of adding event listeners to multiple child elements, attach one listener to a parent and use event.target to find which child triggered the event.

** Event delegation** uses event bubbling to manage events efficiently. Instead of attaching multiple event listeners to each child element, a single listener is attached to a common parent element.

= Why useful?

= Saves memory (fewer listeners)

= Works for dynamically added elements





5. Difference between preventDefault() and stopPropagation()
event.preventDefault()

= Prevents default browser behavior (but event still bubbles).

	Prevents the browser's default action for a given event.	
  It stops the standard browser behavior, like a form submission, link navigation, or checkbox toggling

event.stopPropagation()

= Stops the event from bubbling up (prevents parent handlers from running).

= Default behavior still happens (unless preventDefault is also used).

Prevents the event from propagating further up the DOM tree during the bubbling phase.	
It stops the event from reaching parent or ancestor elements, which prevents their event handlers from being triggered.

summary:

1. preventDefault() → Stops browser’s default action

2. stopPropagation() → Stops event bubbling to parent elements