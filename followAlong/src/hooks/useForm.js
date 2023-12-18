import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValues, cb) => {
  console.log("*** useForm HOOK ***");
  const [values, setValues] = useLocalStorage(key, initialValues);
  console.log("values =>", values);
  console.log("key =>", key);
  console.log("initialValues =>", initialValues);
  console.log("cb =>", cb);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    cb();
    setValues(initialValues);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
  };

  console.log("*** useForm HOOK END ***");
  return [values, clearForm, handleSubmit, handleChanges];
};
