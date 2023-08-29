
import { useState } from "react";

import CustomTackleForm from 'components/CustomTackleForm/CustomTackleForm';
import CustomTackleList from 'components/CustomTackleList/CustomTackleList';

import style from './CustomTackle.module.css';

const CustomTackle = () => {

  const [customTackle, setCustomTackle] = useState('');

  const onNewCustomTackleAdd = (infoFromForm) => {
    console.log("infoFromForm", infoFromForm)
    setCustomTackle([])
  }

  console.log(customTackle)

  const neueCustomeTackles = true

  return (
    <div className={style.ctWrapp}>
      <h3 className={style.ctHead}>Додаткові снасті</h3>
      <CustomTackleForm onSubmitForm={onNewCustomTackleAdd} />
      <CustomTackleList customTackles={neueCustomeTackles} />

    </div>
  );
};

export default CustomTackle;
