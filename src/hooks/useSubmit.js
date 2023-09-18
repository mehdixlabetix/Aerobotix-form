import { useState } from "react";
import { db } from "../components/Firebase";
import { doc, setDoc } from "firebase/firestore";
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      data.time = new Date().toString();
      if(data.formation==="arduino"){
      await setDoc(doc(db, "formation_arduino", data.time), data);}
      else {
        await setDoc(doc(db, "formation_voltmetre", data.time), data);
      }
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.prenom}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
