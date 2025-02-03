// import { useState } from "react";

// import Testimonials from "./Project7/Testimonial";
// import Application from "./Project8/Application";

// import Main from "./Project3/Main";
// import Calculator from "./Project4/Calculator";
// import ToggleBackgroundColor from "./Project5/Colors";
// import HiddenSearchBar from "./Project6/HiddenSearchbar";
// import Counter from "./Project1/Counter";
// import Todo from "./Project2/Todo";

// import SearchClick from "./SearchClick";

// import { useState } from "react";
// import Data from "./city";
// import Nav from "./Navigation/Nav";
// import Products from "./Products/Products";
// import data from "./db/data";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./Sidebar/Sidebar";
// import Card from "./components/Card";
// import "./index.css";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // ----------- Input Filter -----------
//   const [query, setQuery] = useState("");

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   // ----------- Radio Filtering -----------
//   const handleChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   // ------------ Button Filtering -----------
//   const handleClick = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   function filteredData(data, selected, query) {
//     let filteredProducts = data;

//     // Filtering Input Items
//     if (query) {
//       filteredProducts = data.filter(
//         (data) => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
//       );
//     }

//     // Applying selected filter
//     if (selected) {
//       filteredProducts = filteredProducts.filter(
//         ({ category, color, company, newPrice, title }) =>
//           category === selected ||
//           color === selected ||
//           company === selected ||
//           newPrice === selected ||
//           title === selected
//       );
//     }

//     return filteredProducts.map(
//       ({ img, title, star, reviews, prevPrice, newPrice }) => (
//         <Card
//           key={Math.random()}
//           img={img}
//           title={title}
//           star={star}
//           reviews={reviews}
//           prevPrice={prevPrice}
//           newPrice={newPrice}
//         />
//       )
//     );
//   }

//   const result = filteredData(data, selectedCategory, query);

//   return (
//     <>
//       <Sidebar handleChange={handleChange} />
//       <Nav query={query} handleInputChange={handleInputChange} />
//       <Recommended handleClick={handleClick} />
//       <Products result={result} />
//     </>
//   );
// }
// function App() {
//   const [search, setSearch] = useState("")
//   return (
//     <div>
//       <center>
//         <h2 style={{ color: "red" }}>Enter Your City:</h2>
//         <br></br> <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }}></input>

//         {Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
//           return <div style={{ "border": "1px solid green", "padding": "10px", "margin": "10px", "max-width": "70vw" }}>
//             {city.id}. {city.name}
//           </div>
//         })}
//       </center >
//     </div >

//   )
// }

// function App() {
//   return (
//     <div>
// <SearchClick/>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Main /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      {/* <Application /> */}
    
    </div>
  )
}
export default App;
