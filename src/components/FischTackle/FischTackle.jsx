const FichTackle = ({ tacklesArray }) => {

    //const [fisch, setFilms] = useState([]);

    /*    useEffect(() => {
           filmsFetch.fetchTrendingMovies().then(result => {
               setFilms(result.results);
           });
       }, []); */
    return (
        <>
            {/* <FischList fischArray={fishes} sublink={'fishes/'} tackleArr={tackleArray} /> */}
            <div>FischTackle</div>
            <div>{tacklesArray}</div>
        </>
    );
};

export default FichTackle;