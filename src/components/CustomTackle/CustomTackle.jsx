
import { nanoid } from "nanoid";

import { useState, useEffect } from "react";

import CustomTackleForm from 'components/CustomTackleForm/CustomTackleForm';
import CustomTackleList from 'components/CustomTackleList/CustomTackleList';

import style from './CustomTackle.module.css';

const CustomTackle = () => {

  const LOCAL_STORAGE_CUSTOM_CONTACT = "custom_tackles";

  const [customTackle, setCustomTackle] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_CUSTOM_CONTACT)) ?? []);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_CUSTOM_CONTACT, JSON.stringify(customTackle));
  }, [customTackle, LOCAL_STORAGE_CUSTOM_CONTACT]);

  const onNewCustomTackleAdd = (infoFromForm) => {
    const newCustomTackle = {
      id: nanoid(),
      text: infoFromForm.formInfo,
    }
    setCustomTackle((prevState) => [newCustomTackle, ...prevState]);
  }

  console.log("customTackle", customTackle)

  /*   const neueCustomeTackles = true
    console.log("NEU customTackle", neueCustomeTackles) */
  return (
    <div className={style.ctWrapp}>
      <h3 className={style.ctHead}>Додаткові снасті</h3>
      <CustomTackleForm onSubmitForm={onNewCustomTackleAdd} />
      <CustomTackleList customTackles={customTackle} />

    </div>
  );
};

export default CustomTackle;
