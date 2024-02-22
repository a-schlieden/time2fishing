
import CustomTackleForm from 'components/CustomTackleForm/CustomTackleForm';
import CustomTackleList from 'components/CustomTackleList/CustomTackleList';
import style from './CustomTackle.module.css';

const CustomTackle = ({ allcustomTackles, newCustomTackleAdd, fnDeleteOneCustomTackle }) => {
  /* checkBoxState, checkBoxStateChange, */
  return (
    <div className={style.ctWrapp}>
      <h3 className={style.ctHead}>Додаткові снасті</h3>
      <CustomTackleForm
        onSubmitForm={newCustomTackleAdd}
      />
      <CustomTackleList
        customTackles={allcustomTackles}
        onDeleteOneCustomTackle={fnDeleteOneCustomTackle}
      />
    </div>
  );
};

export default CustomTackle;


/* checkBoxState={checkBoxState}
checkBoxStateChange={checkBoxStateChange} */