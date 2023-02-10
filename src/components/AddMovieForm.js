import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



const AddMovieForm = (props) => {

    const { push } = useHistory();

	const {id} = useParams()

    const { addMovie } = props;

	const [newMovie, setNewMovie] = useState({
		title:"",
		director: "",
		genre: "",
		metascore: 0,
		description: ""
	});

    return (
        <div>Hello world</div>
    )

}


export default AddMovieForm