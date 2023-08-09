const FichTackle = ({ tacklesArray, head }) => {

    //const [fisch, setFilms] = useState([]);

    /*    useEffect(() => {
           filmsFetch.fetchTrendingMovies().then(result => {
               setFilms(result.results);
           });
       }, []); */

    return (
        <>
            {/* <FischList fischArray={fishes} sublink={'fishes/'} tackleArr={tackleArray} /> */}
            <h2>{head}</h2>
            <ul>
                {tacklesArray.map(tackle => (
                    <li>
                        <input type="checkbox" />
                        {tackle}
                    </li>
                ))}

            </ul>
        </>
    );
};

export default FichTackle;