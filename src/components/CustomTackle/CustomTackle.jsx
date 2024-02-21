
//import { nanoid } from "nanoid";

//import { useState, useEffect } from "react";

import CustomTackleForm from 'components/CustomTackleForm/CustomTackleForm';
import CustomTackleList from 'components/CustomTackleList/CustomTackleList';

import style from './CustomTackle.module.css';

const CustomTackle = ({ allcustomTackles, newCustomTackleAdd, isCTinLS }) => {

  //const LOCAL_STORAGE_CUSTOM_TACKLE = "custom_tackles";

  // const [customTackle, setCustomTackle] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_CUSTOM_TACKLE)) ?? []);

  /*   useEffect(() => {
      window.localStorage.setItem(LOCAL_STORAGE_CUSTOM_TACKLE, JSON.stringify(customTackle));
    }, [customTackle, LOCAL_STORAGE_CUSTOM_TACKLE]); */

  /*   const onNewCustomTackleAdd = (infoFromForm) => {
      const newCustomTackle = {
        id: nanoid(),
        text: infoFromForm.formInfo,
        chk: true
      }
      setCustomTackle((prevState) => [newCustomTackle, ...prevState]);
    } */

  return (
    <div className={style.ctWrapp}>
      <h3 className={style.ctHead}>Додаткові снасті</h3>
      <CustomTackleForm onSubmitForm={newCustomTackleAdd} />
      <CustomTackleList
        customTackles={allcustomTackles}
        isCustomTackleinLS={isCTinLS}
      />

    </div>
  );
};

export default CustomTackle;
