const ClearButton = ({ reset }) => {

    /*   const some = () => {
          localStorage.removeItem(LOCAL_STORAGE_TACKLE);
      } */

    return (
        <>
            <button onClick={reset}>Clear</button>
        </>
    );
};

export default ClearButton;