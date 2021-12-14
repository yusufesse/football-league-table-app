# Football League Table Desktop App

This web application allows users to see the Premier League (ENG) and Ligue 1 (FRA) table for the 2020/21 season. 

## How Web Application was made

This project was made using HTML, CSS, JavaScript and the React framework. Involves key React concepts such as useState and useEffect hooks, custom hooks, React Fragments, React Portals and conditonal template rendering.

API used: https://github.com/azharimm/football-standings-api

### League Component and Custom 'Fetch' Hook

Here, I defined the 'url' state by invoking the useState function (React hook) and assigning an API endpoint as an argument. This API endpoint would later on help fetch data for each clubs in the Premier League. Two buttons were defined in the returned JSX of this component and a callback function was assigned to the onClick prop. Clicking on the first button would update the 'url' state from it's inital value (an API endpoint for Premier League club data), to an API endpoint for Ligue 1 (FRA) club data. Clicking on the second button would do the exact opposite. This logic happens by invoking the url's state updating function and passing the API endpoint (string) as an argument. 

A custom fetch hook was created by simply defining an export arrow function. The fetch hook has a 'url' parameter, expecting an API endpoint to be passed as an argument. The fetch hook is used and invoked in the League component and the 'url' state (default value is an API endpoint for Premier League club data) is passed as an argument. 

**The buttons in the returned JSX of the 'League' component toggle the 'url' state value. This would trigger the 'League' component to re-render and the updated 'url' state value would be passed on to the custom fetch hook.** 

The useEffect hook is defined inside the custom fetch hook. It accepts two arguments, an anonymous function and an array of dependancies. Because the fetch hook was called on the 'League' component, the useEffect function will execute when the 'League' component first renders.  This is where, I defined the fetch logic. Inside the useEffect function, I implemented an async function, using the await keyword to consume promises from the fetch api, which is native to JavaScript. I pass the 'url' parameter as an argument to the fetch function. I wrapped the fetching data logic in the try block and handling errors in the catch block. Inside the custom fetch hook, I created a 'data' state. I invoke the 'data' state updating function to update it's value to the Object data returned from the API. After defining the async function in the useEffect function, I immediately invoke it to ensure the web application fetches data. The fetch hook returns an object of properties, the property values being the data returned from the fetch request. Inside the fetch hook, I also define a 'loading' state and the returned object also contains this state as a property value. The 'loading' state will help conditionally render a loading message whilst the web application fetches data in the background. I believe it is important for end-users to be 'kept in the loop' when using any application and this feature will prevent a scenario where the application fecthes data and the page does not show anything until data is returned. 

A button is defined in the App component, which toggles a state, and this state will determine whether the League component is mounted or unmounted. If the League component is mounted, it immediately fetches data from the API. If I unmount the League component (by clicking on button), it would still fetch data in the background, then try to update state in an unmounted component. This will lead to an error. To solve this, I used an AbortController constructor function, which can help abort a fetch call if the 'League' component is unmounted. The useEffect function (inside custom fetch hook) can return a clean up function, which executes whenever a component unmounts. With this information, I created a 'fetchController' instance of the AbortController constructor function. 'fetchController' instance has a signal property. The fetch function can accept an object of options as a second argument, and the fetchController's signal property can be passed as a property value. This will link the fetchController to the fetch call. In the clean up function, I invoke the abort method on the fetchController instance. This will help abort a fetch call if the 'League' component unmounts.

When the buttons in the 'League' component update the 'url' state, the 'League' componet re-renders, passes the updated state value to the fetch hook. If the useEffect dependancy value changes, then the function inside useEffect will execute again, fetching data with a new API endpoint.

React Fragments were used to help prevent the final HTML page from having a bunch of unnecessary div elements. In the App component, React Portals were used as a demo to move a div container (holding copyright information) from the root 'id' container to the bottom of the HTML page.


