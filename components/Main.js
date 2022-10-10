import { useSelector, useDispatch } from "react-redux";
import { getAllRates, getSelectedRate } from "../redux/selectors";
import { setSelectedRate } from "../redux/actions";

import styles from "../styles/Main.module.scss";

export default function Main() {
  const rates = useSelector(getAllRates);
  const rate = useSelector(getSelectedRate);
  const dispatch = useDispatch();

  const options = rates?.reduce((arr, rate) => {
    arr.push(rate.code);
    return arr;
  }, []);

  const handleSelectChange = (e) => {
    dispatch(setSelectedRate(e.target.value));
  };

  return (
    <main className={styles.main}>
      <p className={styles.main__title}> for 1 BTC </p>
      <p className={styles.main__title}>
        {(rate?.rate_float && rate?.rate_float.toFixed(2)) ||
          rates[0]?.rate_float.toFixed(2)}
      </p>

      <select
        className={styles.main__select}
        onChange={handleSelectChange}
        defaultValue={rate.code || options[0]}
      >
        {options.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    </main>
  );
}
