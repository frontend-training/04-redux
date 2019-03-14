import * as React from 'react';
import Counter from "./components/counter";
import MovieList from './components/movieList';
import AddMovie from './components/addMovie';
import './App.css';
import WatchedMovies from "./components/watchedMovies";

class App extends React.Component {
    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="todolist not-done">
                            <h1>My List</h1>
                            <AddMovie/>
                            <hr/>
                            <MovieList/>
                            <Counter/>
                        </div>
                    </div>
                    <WatchedMovies/>
                </div>
            </div>
        );
    }
}

export default App;
