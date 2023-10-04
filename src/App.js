import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Blogs from './ComplexComponents/Blogs';
import CreateBlog from './ComplexComponents/CreateBlog';
import BlogDetails from "./ComplexComponents/BlogDetails"

function App() {

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });


  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Blogs />} />
            <Route exact path="/add" element={<CreateBlog />} />
            <Route exact path="/:id" element={<BlogDetails />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
