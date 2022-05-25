import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="card w-5/6 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p> In React your UI is rendered by updating something called as DOM Document Object Model
                        In basic layman terms DOM resembles like a tree like structure of objects and nodes
                        In React howeve HTML is not the root node of a DOM In Fact it is only one single node from the Javascripts prototype chain so that it gets the functions to calculate styles properties or manipulate the individual nodes
                        In simpler terms DOM in React is a standard that defines how you ge pdate or manipulate HTML element
                        The React DOM knows how to render a page but it is not so intelligent to keep track of each node and components which are updating
                        So lets say you have a list of  items on your SPA Single page Application and you have to update one of them when your user interacts with  With DOM you will end up updating all the components as entire list will get re rendered
                        Thats where the concept of Virtual DOM comes into play The Virtual DOM is Reacts local copy of the HTML
                        Lets go back to our list example and figure out how Virtual DOM will let React renders the
                        When user interacts with UI React would create a copy in the form of Virtual DOM and updates the UI after comparing the real DOM with virtual  In this way the item which needs to be updated will update without affecting other items
                    </p>
                </div>
            </div>
            <div class="card w-5/6 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>React components have a built-in state object. The state is encapsulated data where
                        you store assets that are persistent between component renderings.
                        The state is just a fancy term for a JavaScript data structure. If a user
                        changes state by interacting with your application, the UI may look completely
                        different afterwards, because it's represented by this new state rather than the old state.
                        Redux was created to resolve this particular issue. it provides a central store that holds all states of
                        your application. Each component can access the stored state without sending it from one component to another.
                        Here is a simple view of how Redux works.
                    </p>
                </div>
            </div>
            <div class="card w-5/6 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>JavaScript has only primitives types null undefined, and objects. A big world of objects. In JavaScript contrary to languages like Java or PHP theres no concept of class that serves as a template to create objects.
                        Let's also recall that an object is a composable structure having properties: key and value pairs. For example, the following object cat contains 2 properties
                        In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is named prototype.
                        Following the example, you can make pet a prototype of cat which will then inherit legs property.
                        When creating an object using the object literal you can use the special property proto to set the prototype of the created object.
                        Let's use __proto__ and make pet the prototype of c
                    </p>
                </div>
            </div>
            <div class="card w-5/6 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p> In React your UI is rendered by updating something called as DOM Document Object Model
                        In basic layman terms DOM resembles like a tree like structure of objects and nodes
                        In React howeve HTML is not the root node of a DOM In Fact it is only one single node from the Javascripts prototype chain so that it gets the functions to calculate styles properties or manipulate the individual nodes
                        In simpler terms DOM in React is a standard that defines how you ge pdate or manipulate HTML element
                        The React DOM knows how to render a page but it is not so intelligent to keep track of each node and components which are updating
                        So lets say you have a list of  items on your SPA Single page Application and you have to update one of them when your user interacts with  With DOM you will end up updating all the components as entire list will get re rendered
                        Thats where the concept of Virtual DOM comes into play The Virtual DOM is Reacts local copy of the HTML
                        Lets go back to our list example and figure out how Virtual DOM will let React renders the
                        When user interacts with UI React would create a copy in the form of Virtual DOM and updates the UI after comparing the real DOM with virtual  In this way the item which needs to be updated will update without affecting other items
                    </p>
                </div>
            </div>
            <div class="card w-5/6 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p> In React your UI is rendered by updating something called as DOM Document Object Model
                        In basic layman terms DOM resembles like a tree like structure of objects and nodes
                        In React howeve HTML is not the root node of a DOM In Fact it is only one single node from the Javascripts prototype chain so that it gets the functions to calculate styles properties or manipulate the individual nodes
                        In simpler terms DOM in React is a standard that defines how you ge pdate or manipulate HTML element
                        The React DOM knows how to render a page but it is not so intelligent to keep track of each node and components which are updating
                        So lets say you have a list of  items on your SPA Single page Application and you have to update one of them when your user interacts with  With DOM you will end up updating all the components as entire list will get re rendered
                        Thats where the concept of Virtual DOM comes into play The Virtual DOM is Reacts local copy of the HTML
                        Lets go back to our list example and figure out how Virtual DOM will let React renders the
                        When user interacts with UI React would create a copy in the form of Virtual DOM and updates the UI after comparing the real DOM with virtual  In this way the item which needs to be updated will update without affecting other items
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Blogs;