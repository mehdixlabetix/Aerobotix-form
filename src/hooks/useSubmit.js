import { useState } from "react";
import { db } from "../components/Firebase";
import { getDocs, doc, setDoc, collection } from "firebase/firestore";
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const FetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "annif"));

    return querySnapshot.size;
  };
  const submit = async (data) => {
    setLoading(true);
    try {
      data.time = new Date().toString();

      await setDoc(doc(db, "annif", data.time), data);
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

  return { isLoading, response, submit, FetchData };
};

export default useSubmit;
