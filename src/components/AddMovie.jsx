import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';
import MovieCard from './MovieCard';
const AddMovie=()=>{
    const [movie ,setMovie]=useState({
        title:'',
        director:'',
        genre:'',
        releaseYear:'',
        synopsis:'',
        posterUrl:'',
    });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name , value}=e.target;
        setMovie ({ ...movie , [name]:value});

    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Movie added: ',movie);
        navigate('/');
    };
    const handleCancel=()=>{
        navigate('/');
    };
    return (
        <div className='add-movie'>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input 
                    type="text"
                    name="title"
                    value={movie.title}
                    onChange={handleChange}
                    required
                    />


                </div>
                <div>
                    <label>Director:</label>
                    < input 
                    type="text"
                    name="director"
                    value={movie.director}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div >
                    <label>Genre</label>
                    <select 
                    name="genre"
                    value={movie.genre}
                    onChange={handleChange}
                    required
                >
                    <option value ="">select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Science Fiction">Science Fiction</option>
                    </select>


                </div>
                <div>
                    <label>Release Year:</label>
                    <input 
                    type="number"
                    name="releaseYear"
                    value={movie.releaseYear}
                    onChange={handleChange}
                    required
                    />

                </div>
                <div>
                    <label>Synopsis:</label>
                    <textarea 
                    name="synopsis"
                    value={movie.synopsis}
                    onChange={handleChange}
                    required
                    />
                    <div>
                        <label>Poster URL:</label>
                        <input 
                        type="url"
                        name="posterurl"
                        value={movie.posterUrl}
                        onChange={handleChange}
                        required
                        />
                    </div> 
                    <div className='form-buttons'>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleCancel}>
                            Cancel
                        </button>

                    </div>
                </div>
            </form>
        </div>
    );
};
export default AddMovie;